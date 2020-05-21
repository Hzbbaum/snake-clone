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
const snake: coordinate[] = [
  { x: 33, y: 50 },
  { x: 32, y: 50 },
  { x: 31, y: 50 },
  { x: 30, y: 50 },
];
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D | null;
let turnlength = 167;
let maxSnakeLength: number = 4;
let game: number;
let mvmntDirection: direction_enum = direction_enum.LEFT;
//#endregion

//#endregion

window.onload = () => {
  canvas = document.querySelector("#game") as HTMLCanvasElement;
  ctx = canvas.getContext("2d");
  if (!ctx) console.log("could not find ctx");
};

function doturn(): void {
  ctx?.clearRect(0, 0, canvas.width, canvas.height);
  document.onkeydown = (e: KeyboardEvent) => {
    console.log("press", e.keyCode);
    if (e.keyCode in direction_enum) {
      mvmntDirection = e.keyCode;
      document.onkeydown = null;
      console.log("unsubbed");
    }
    renderSnake();
  };
  const newSegement: coordinate = increment(snake[0]);
  snake.unshift(newSegement);
  if (snake.length > maxSnakeLength) snake.pop();
}

function start() {
  game = setInterval(doturn, turnlength);
}
function stop() {
  clearInterval(game);
}

function increment(coordinateToIncrement: coordinate): coordinate {
  switch (mvmntDirection) {
    case direction_enum.DOWN:
      return { x: coordinateToIncrement.x, y: coordinateToIncrement.y - 1 };
    case direction_enum.UP:
      return { x: coordinateToIncrement.x, y: coordinateToIncrement.y + 1 };
    case direction_enum.RIGHT:
      return { x: coordinateToIncrement.x + 1, y: coordinateToIncrement.y };
    case direction_enum.LEFT:
      return { x: coordinateToIncrement.x - 1, y: coordinateToIncrement.y };
    default:
      return coordinateToIncrement;
  }
}
function renderSnake() {
  ctx?.moveTo(snake[0].x, snake[0].y);
  snake.slice(1).forEach((point) => ctx?.lineTo(point.x, point.y));
  ctx?.stroke;
}

//#endregion
