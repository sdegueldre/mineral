import { GameObject } from '../engine/types';
import { loadImage } from '../engine/engine';

export default class Pointer implements GameObject {
  public x = 50;
  public y = 50;
  private anchorX = 2.5;
  private anchorY = 12;
  private image: HTMLImageElement;

  constructor(path: string) {
    this.loadImage(path);
    window.addEventListener('mousemove', (e) => {
      this.x = e.clientX/2;
      this.y = e.clientY/2;
    });
  }

  async loadImage(path: string){
    this.image = await loadImage(path);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if(this.image) {
      ctx.drawImage(this.image, this.x - this.anchorX, this.y - this.anchorY);
    }
  }

  tick(dt: number): void{

  }
}
