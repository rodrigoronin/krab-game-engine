import { Application, Assets, Container, Sprite } from "pixi.js";

import "./style..css";

import texture from "./Game/Assets/wizard.png";

const app: Application = new Application();
await app.init({
  width: innerWidth,
  height: innerHeight,
  background: "#3d3d3d",
});

const playerTexture = await Assets.load(texture);

const player: Container = new Container();
const playerSprite = new Sprite();
playerSprite.texture = playerTexture;
playerSprite.texture.source.scaleMode = "nearest";
playerSprite.anchor.set(0.5);
player.addChild(playerSprite);
player.position.set(100);

app.stage.addChild(player);
app.stage.scale.set(2);

const speed = 50;

app.ticker.add((ticker) => {
  // player.x += (speed * ticker.deltaMS) / 1000;
});

document.body.appendChild(app.canvas);
