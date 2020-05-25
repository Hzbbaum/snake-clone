"use strict";
//#region constants
var direction_enum;
(function (direction_enum) {
    direction_enum[direction_enum["UP"] = 38] = "UP";
    direction_enum[direction_enum["DOWN"] = 40] = "DOWN";
    direction_enum[direction_enum["LEFT"] = 37] = "LEFT";
    direction_enum[direction_enum["RIGHT"] = 39] = "RIGHT";
})(direction_enum || (direction_enum = {}));
const INITIAL_SNAKE = [
    { x: 33, y: 50 },
    { x: 32, y: 50 },
    { x: 31, y: 50 },
    { x: 30, y: 50 },
];
const TICK_LENGTH_MS = 17;
const INITIAL_SNAKE_LENGTH = 6;
const MAX_NUMBER_APPLES = 3;
let mvmntDirection = direction_enum.RIGHT;
let maxSnakeLength = INITIAL_SNAKE_LENGTH;
let snake = INITIAL_SNAKE;
let score = 0;
let game;
let canvas;
let ctx;
let snakeColorGradient;
let applePosition = [];
//#endregion
//#endregion
window.onload = () => {
    canvas = document.querySelector("#game");
    try {
        ctx = canvas.getContext("2d");
    }
    catch (error) {
        console.log("could not find ctx");
    }
    snakeColorGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    snakeColorGradient.addColorStop(0.25, "#73e943");
    snakeColorGradient.addColorStop(0.75, "#73e943");
    snakeColorGradient.addColorStop(0.5, "#42801d");
    renderBorder();
};
function doturn() {
    clearBoard();
    renderBorder();
    renderSnake();
    renderApples();
    document.onkeydown = changeDirection;
    const newSegement = increment(snake[0]);
    checkAppleEaten(newSegement);
    if (applePosition.length < MAX_NUMBER_APPLES)
        generateApple();
    if (detectCollision(newSegement)) {
        console.log("game Over");
        stop();
    }
    snake = [newSegement, ...snake];
    if (snake.length > maxSnakeLength)
        snake.pop();
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
function increment(coordinateToIncrement) {
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
function changeDirection(e) {
    const ilegalDirection = 37 + ((mvmntDirection - 37 + 2) % 4);
    if (e.keyCode in direction_enum && e.keyCode !== ilegalDirection) {
        mvmntDirection = e.keyCode;
        document.onkeydown = null;
    }
}
function detectCollision(newestSegement) {
    return (!!snake.find((p) => p === newestSegement) ||
        newestSegement.x >= 200 ||
        newestSegement.x <= 0 ||
        newestSegement.y >= 200 ||
        newestSegement.y <= 0);
}
function generateApple() {
    let proposedCoordinate = {
        x: 5 + Math.floor(Math.random() * 190),
        y: 5 + Math.floor(Math.random() * 190),
    };
    if (!snake.find((p) => p == proposedCoordinate) &&
        !applePosition.find((p) => p == proposedCoordinate))
        applePosition.push(proposedCoordinate);
}
function checkAppleEaten(newSegement) {
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
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(snake[0].x, snake[0].y);
    snake.slice(1).forEach((point) => ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(point.x, point.y));
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
function InEuclidDistance(pointA, pointB, range) {
    let distanceX = Math.pow(Math.abs(pointA.x - pointB.x), 2);
    let distanceY = Math.pow(Math.abs(pointA.y - pointB.y), 2);
    return range - Math.pow(distanceX + distanceY, 0.5) > 0;
}
//#endregion
