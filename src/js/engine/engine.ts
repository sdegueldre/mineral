import GameObject from './game-object';

type timestamp = number;

export class Game {
  public canvas;
  private playing = false;
  private objects: GameObject[] = [];
  private lastUpdate: timestamp;
  constructor(options?: any){
    const canvas = this.canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = this.ctx;
  }

  get ctx(){
    return this.canvas.getContext('2d');
  }

  play(): void {
    this.playing = true;
    this.lastUpdate = Date.now();
    this.tick();
  }

  pause(): void {
    this.playing = false;
  }

  tick(): void {
    if(this.playing){
      const now = Date.now();
      const dt = now - this.lastUpdate;
      this.lastUpdate = now;
      this.objects.forEach(o => o.tick(dt))
      this.draw();
      window.requestAnimationFrame(this.tick.bind(this));
    }
  }

  addObject(object: GameObject): void {
    this.objects.push(object);
  }

  draw(): void {
    const ctx = this.ctx;
    const canvas = this.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let object of this.objects){
      object.draw(ctx);
    }
  }
}

export async function loadImage(path: string): Promise<HTMLImageElement> {
  const img = new Image();
  img.src = path;
  return new Promise((resolve, reject) => {
    img.addEventListener('load', () => resolve(img));
  });
}
