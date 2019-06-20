export default class SpriteSheet {
  sprites: HTMLCanvasElement[] = [];
  constructor(public spriteWidth: number, public spriteHeight: number, private image: HTMLImageElement){

  }

  getSprite(n: number) {
    if(this.sprites[n])
      return this.sprites[n];
    const canvas = this.sprites[n] = document.createElement('canvas');
    canvas.width = this.spriteWidth;
    canvas.height = this.spriteHeight;
    const ctx = canvas.getContext('2d');
    const img = this.image;
    ctx.drawImage(
      img,
      n*this.spriteWidth%img.width,
      ~~(n*this.spriteWidth/img.width)*this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      0,
      0,
      this.spriteWidth,
      this.spriteHeight
    );
    return canvas;
  }
}
