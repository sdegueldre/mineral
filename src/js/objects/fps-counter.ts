import { GameObject } from '../engine/types';

export default class FPSCounter implements GameObject {
  public x = 50;
  public y = 50;
  private fps = [60];
  constructor(private nbFrames: number = 60) {
    window.addEventListener('mousemove', (e) => {
      this.x = e.clientX;
      this.y = e.clientY;
    });
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillText(String(avg(this.fps)).slice(0,4), this.x, this.y);
  }

  tick(dt: number): void{
    if(dt > 0) {
      this.fps.push(1000/dt);
      this.fps = this.fps.slice(this.fps.length - this.nbFrames);
    }
  }
}

function avg(arr: number[]) {
  return arr.reduce((sum, val) => sum + val, 0)/arr.length;
}
