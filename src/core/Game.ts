const app: HTMLElement | null = document.getElementById("app");
const canvas: HTMLCanvasElement = document.createElement("canvas");
const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d") as CanvasRenderingContext2D;

if (app) app.appendChild(canvas);
else console.log("App render error. Canvas couldn't be created");

const CANVAS_WIDTH: number = 800;
const CANVAS_HEIGHT: number = 600;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
canvas.style.backgroundColor = "#302F2F";

let lastTime: number = 0;
let FPS: number = 0;

const player = {
  size: { width: 32, height: 32 },
  color: "green",
};

function update(deltaTime: number): void {
  FPS = Math.round(1000 / deltaTime);
  console.log(`FPS: ${FPS}`);
}

function render(): void {
  if (!ctx) return;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.fillStyle = "green";
  ctx.fillRect(
    CANVAS_WIDTH / 2 - player.size.width / 2,
    CANVAS_HEIGHT / 2 - player.size.height / 2,
    32,
    32
  );
}

function gameLoop(timestamp: number): void {
  if (!lastTime) lastTime = timestamp;
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  update(deltaTime);
  render();

  requestAnimationFrame(gameLoop);
}

export { gameLoop };
