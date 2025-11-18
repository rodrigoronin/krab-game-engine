import { Application, Assets, Container, Sprite } from 'pixi.js';
import { initInput } from "./input/InputManager";
import { Camera } from './core/Camera';
import { update } from './core/Game';

import "./index.css";

import william from './assets/william_idle.png';

initInput();

// Pixi.js always need an IIFE to work properly
(async () => {
  const app: Application = new Application();

  // Init the app vefore everything
  await app.init({
    background: "#0B1220",
    resizeTo: window,
  });

  document.body.appendChild(app.canvas);

  const camera: Camera = new Camera({
    position: {
      x: 0,
      y: 0,
    },
    size: {
      width: app.canvas.width,
      height: app.canvas.height
    },
    lerpSpeed: 0.003
  });

  // Create and add a Container to the app stage
  const WorldLayer: Container = new Container();
  const EntityLayer: Container = new Container();
  const FXLayer: Container = new Container();
  const UILayer: Container = new Container();

  app.stage.addChild(WorldLayer, EntityLayer, FXLayer, UILayer);

  WorldLayer.position.set(-camera.position.x, -camera.position.y);
  EntityLayer.position.set(-camera.position.x, -camera.position.y);

  const texture = await Assets.load(william);

  // create a sprite from the texture (right now it will render all the frames together)
  const player = new Sprite(texture);

  EntityLayer.addChild(player);

  // center the container relative to the app screen
  EntityLayer.x = app.screen.width / 2;
  EntityLayer.y = app.screen.height / 2;
  // center the sprite using local container coordinates
  EntityLayer.pivot.x = EntityLayer.width / 2;
  EntityLayer.pivot.y = EntityLayer.height / 2;

  // This is the render loop
  app.ticker.add((time) => {
    // just a rotation test
    update(time.deltaMS);
  });
})();