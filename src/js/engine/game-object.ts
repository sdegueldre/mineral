type Drawable = HTMLImageElement | HTMLCanvasElement;

export default interface GameObject {
  x: Number;
  y: Number;
  draw(CanvasRenderingContext2D): void;
  tick(timestamp): void;
}
