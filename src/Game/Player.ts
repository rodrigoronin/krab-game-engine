import { Sprite, Texture } from "pixi.js";
import { Entity } from "../Engine/Entity";
import { InputSystem } from "../Engine/Systems/InputSystem";

export class Player extends Entity {
  private _sprite: Sprite;
  private _maxHealth: number = 40;
  private _maxSkillPoints: number = 20;
  private currentHealth: number = this._maxHealth;
  private currentSkillPoints: number = this._maxSkillPoints;
  // Movement
  private _input: InputSystem = InputSystem.get();

  constructor(texture: Texture) {
    super();

    this._sprite = new Sprite(texture);
    this._sprite.texture.source.scaleMode = "nearest";
    this._sprite.anchor.set(0.5);
    this.container.addChild(this._sprite);
  }
}
