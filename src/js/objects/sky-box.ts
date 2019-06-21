import { GameObject, timestamp } from '../engine/types';


export default class SkyBox implements GameObject {
  public x = 0;
  public y = 0;
  private time = 0;
  constructor(){

  }

  draw(ctx: CanvasRenderingContext2D): void{
    const timeOfDay = (this.time%60000)/60000; // Days are 60 seconds
    ctx.save();
    ctx.fillStyle = `hsl(210, 50%, ${Math.sin(timeOfDay*Math.PI)*60+5}%)`;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.restore();
  }

  tick(dt: timestamp): void{
    this.time += dt;
  }
}
