type timestamp = number;

type Drawable = HTMLImageElement | HTMLCanvasElement;

export interface GameObject {
  x: Number;
  y: Number;
  draw(ctx: CanvasRenderingContext2D): void;
  tick(dt: timestamp): void;
}
