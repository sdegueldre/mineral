type timestamp = number;

export interface GameObject {
  x: Number;
  y: Number;
  draw(ctx: CanvasRenderingContext2D): void;
  tick(dt: timestamp): void;
}
