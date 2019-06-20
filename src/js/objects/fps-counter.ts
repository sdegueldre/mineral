import GameObject from '../engine/game-object';

export default class FPSCounter implements GameObject {
  public x = 50;
  public y = 50;
  private fps = [60,60,60,60,60];
  constructor(void) {
    window.addEventListener('mousemove', (e) => {
      this.x = e.clientX;
      this.y = e.clientY;
    });
  }

  async loadImage(path: string){
    this.image = await loadImage(path);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillText(String(Math.trunc(avg(this.fps))), this.x, this.y);
  }

  tick(dt: number): void{
    this.fps.push(1000/dt);
    this.fps = this.fps.slice(1);
  }
}

function avg(arr: number[]) {
  return arr.reduce((sum, val) => sum + val, 0)/arr.length;
}
