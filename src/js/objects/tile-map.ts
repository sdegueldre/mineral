import { GameObject } from '../engine/types';
import SpriteSheet from './sprite-sheet';
import TileData from './tile-data';

export default class TileMap implements GameObject {
  public x = 0;
  public y = 140;
  public tileSize: {x: number, y: number};
  private canvas: HTMLCanvasElement;
  constructor(sheet: SpriteSheet, data: TileData) {
    this.tileSize = {x: sheet.spriteWidth, y: sheet.spriteHeight};
    const canvas = this.canvas = document.createElement('canvas');
    canvas.width = sheet.spriteWidth * data.width;
    canvas.height = sheet.spriteHeight * data.height;
    const ctx = canvas.getContext('2d');
    for(let j = 0; j < data.height; j++) {
      for(let i = 0; i < data.width; i++) {
        ctx.drawImage(sheet.getSprite(data.tiles[i][j]), i*sheet.spriteWidth, j*sheet.spriteHeight);
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.canvas, this.x, this.y);
  }

  tick(dt: number): void{

  }
}
