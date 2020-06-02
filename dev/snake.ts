//#region constants
import Score from "./scoreClass";
let score: Score | null;
const isTouch: boolean =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;
enum direction_enum {
  UP = 38,
  DOWN = 40,
  LEFT = 37,
  RIGHT = 39,
}

interface coordinate {
  x: number;
  y: number;
}
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const CANVAS_WIDTH: number = 200;
const CANVAS_HEIGHT: number = 200;
const INITIAL_SNAKE = [
  { x: 33, y: 50 },
  { x: 32, y: 50 },
  { x: 31, y: 50 },
  { x: 30, y: 50 },
];
const TICK_LENGTH_MS = 17;
const INITIAL_SNAKE_LENGTH = 6;
const MAX_NUMBER_APPLES = 3;

let mvmntDirection: direction_enum = direction_enum.RIGHT;
let maxSnakeLength: number = INITIAL_SNAKE_LENGTH;
let snake: coordinate[] = INITIAL_SNAKE;
// let score: number = 0;
let game: number;

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let snakeColorGradient: CanvasGradient;
let applePosition: coordinate[] = [];
//#endregion

//#region setup
window.onload = () => {
  (document.querySelector(
    "#startButton"
  ) as HTMLButtonElement).addEventListener("click", start);
  (document.querySelector("#stopButton") as HTMLButtonElement).addEventListener(
    "click",
    stop
  );
  canvas = document.querySelector("#game") as HTMLCanvasElement;
  score = new Score(document.querySelector("#scoreBox") as HTMLDataElement);
  try {
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  } catch (error) {
    console.log("could not find ctx");
  }
  snakeColorGradient = ctx.createLinearGradient(
    0,
    0,
    canvas.width,
    canvas.height
  );
  snakeColorGradient.addColorStop(0.25, "#73e943");
  snakeColorGradient.addColorStop(0.75, "#73e943");
  snakeColorGradient.addColorStop(0.5, "#42801d");
  renderBorder();
};
//#endregion
//#region game logic
function doturn(): void {
  clearBoard();
  renderBorder();
  renderSnake();
  renderApples();
  if (isTouch) canvas.ontouchstart = changeDirectionTouchScreen;
  else document.onkeydown = changeDirection;
  const newSegement: coordinate = increment(snake[0]);
  checkAppleEaten(newSegement);
  if (applePosition.length < MAX_NUMBER_APPLES) generateApple();
  if (detectCollision(newSegement)) {
    stop();
  }

  snake = [newSegement, ...snake];
  if (snake.length > maxSnakeLength) snake.pop();
}
function start() {
  score.reset();
  applePosition = [];
  snake = INITIAL_SNAKE;
  maxSnakeLength = INITIAL_SNAKE_LENGTH;
  mvmntDirection = direction_enum.RIGHT;
  game = setInterval(doturn, TICK_LENGTH_MS);
}
function stop() {
  clearInterval(game);
}
function increment(coordinateToIncrement: coordinate): coordinate {
  switch (mvmntDirection) {
    case direction_enum.DOWN:
      return { x: coordinateToIncrement.x, y: coordinateToIncrement.y + 1 };
    case direction_enum.UP:
      return { x: coordinateToIncrement.x, y: coordinateToIncrement.y - 1 };
    case direction_enum.RIGHT:
      return { x: coordinateToIncrement.x + 1, y: coordinateToIncrement.y };
    case direction_enum.LEFT:
      return { x: coordinateToIncrement.x - 1, y: coordinateToIncrement.y };
    default:
      return coordinateToIncrement;
  }
}
function changeDirection(e: KeyboardEvent) {
  const ilegalDirection = 37 + ((mvmntDirection - 37 + 2) % 4);
  if (e.keyCode in direction_enum && e.keyCode !== ilegalDirection) {
    mvmntDirection = e.keyCode;
    document.onkeydown = null;
  }
}
function changeDirectionTouchScreen(e: TouchEvent) {
  let canvasRect = canvas.getBoundingClientRect();
  let relativeclick: coordinate = {
    x: e.touches[0].clientX - canvasRect.x,
    y: e.touches[0].clientY - canvasRect.y,
  };
  let snakePixelPosition = {
    x: (canvasRect.width * snake[snake.length - 1].x) / CANVAS_WIDTH,
    y: (canvasRect.height * snake[snake.length - 1].y) / CANVAS_HEIGHT,
  };
  const movingHorizontal: boolean =
    mvmntDirection == direction_enum.LEFT ||
    mvmntDirection == direction_enum.RIGHT;
  if (!movingHorizontal) {
    mvmntDirection =
      relativeclick.x < snakePixelPosition.x
        ? direction_enum.LEFT
        : direction_enum.RIGHT;
  } else {
    mvmntDirection =
      relativeclick.y < snakePixelPosition.y
        ? direction_enum.UP
        : direction_enum.DOWN;
  }
}
function detectCollision(newestSegement: coordinate): boolean {
  return (
    detectCollisionSelf(newestSegement) ||
    detectCollisionBorders(newestSegement)
  );
}
function detectCollisionSelf(newestSegement: coordinate): boolean {
  return !!snake.find(
    (p) => p.y == newestSegement.y && p.x == newestSegement.x
  );
}
function detectCollisionBorders(newestSegement: coordinate): boolean {
  return (
    newestSegement.x >= 200 ||
    newestSegement.x <= 0 ||
    newestSegement.y >= 200 ||
    newestSegement.y <= 0
  );
}
function generateApple() {
  let proposedCoordinate: coordinate = {
    x: 5 + Math.floor(Math.random() * 190),
    y: 5 + Math.floor(Math.random() * 190),
  };
  if (
    !snake.find((p) => p == proposedCoordinate) &&
    !applePosition.find((p) => p == proposedCoordinate)
  )
    applePosition.push(proposedCoordinate);
}
function checkAppleEaten(newSegement: coordinate) {
  applePosition.forEach((p, index) => {
    if (InEuclidDistance(p, newSegement, 2)) {
      score?.increment(1);
      applePosition.splice(index, 1);
      maxSnakeLength++;
    }
  });
}
function clearBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//#endregion
//#region render function
function renderBorder() {
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  ctx.stroke();
}
function renderSnake() {
  ctx.strokeStyle = snakeColorGradient;
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx?.moveTo(snake[0].x, snake[0].y);
  snake.slice(1).forEach((point) => ctx?.lineTo(point.x, point.y));
  ctx.stroke();
}
function renderApples() {
  applePosition.forEach((p) => {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.arc(p.x, p.y, 0.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  });
}
//#endregion
//#region helper functions
function InEuclidDistance(
  pointA: coordinate,
  pointB: coordinate,
  range: number
) {
  let distanceX = Math.pow(Math.abs(pointA.x - pointB.x), 2);
  let distanceY = Math.pow(Math.abs(pointA.y - pointB.y), 2);
  return range - Math.pow(distanceX + distanceY, 0.5) > 0;
}
//#endregion
