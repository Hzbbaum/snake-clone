//#region constants
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
let score: number = 0;
let game: number;

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let snakeColorGradient: CanvasGradient;
let applePosition: coordinate[] = [];
//#endregion

//#endregion

window.onload = () => {
  canvas = document.querySelector("#game") as HTMLCanvasElement;
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

function doturn(): void {
  clearBoard();
  renderBorder();
  renderSnake();
  renderApples();
  document.onkeydown = changeDirection;
  const newSegement: coordinate = increment(snake[0]);
  checkAppleEaten(newSegement);
  if (applePosition.length < MAX_NUMBER_APPLES) generateApple();
  if (detectCollision(newSegement)) {
    console.log("game Over");
    stop();
  }

  snake = [newSegement, ...snake];
  if (snake.length > maxSnakeLength) snake.pop();
}
function start() {
  score = 0;
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
function detectCollision(newestSegement: coordinate): boolean {
  return (
    !!snake.find((p) => p === newestSegement) ||
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
      score++;
      applePosition.splice(index, 1);
      maxSnakeLength++;
    }
  });
}
function clearBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
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
    ctx.arc(p.x, p.y, 0.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.fill();
  });
}
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
