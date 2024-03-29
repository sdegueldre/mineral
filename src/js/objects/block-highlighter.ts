import { GameObject, timestamp } from '../engine/types';
import Pointer from './pointer';
import TileMap from './tile-map';


export default class BlockHighlighter implements GameObject {

  constructor(private pointer: Pointer, private tileMap: TileMap){

  }

  draw(ctx: CanvasRenderingContext2D): void{
    const x = (~~((this.x - this.tileMap.x%this.tileMap.tileSize.x)/this.tileMap.tileSize.x))*this.tileMap.tileSize.x + this.tileMap.x%this.tileMap.tileSize.x;
    const y = (~~((this.y - this.tileMap.y%this.tileMap.tileSize.y)/this.tileMap.tileSize.y))*this.tileMap.tileSize.y + this.tileMap.y%this.tileMap.tileSize.y;
    ctx.save();
    ctx.strokeStyle = 'hsla(50, 100%, 50%, 0.5)';
    ctx.strokeRect(x-0.5, y-0.5, this.tileMap.tileSize.x+0.5, this.tileMap.tileSize.y+0.5);
    ctx.restore();
  }

  tick(dt: timestamp): void {}

  get x(){
    return this.pointer.x;
  }

  get y(){
    return this.pointer.y;
  }
}
