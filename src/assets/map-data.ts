export const mapWidth = 80;
export const mapHeight = 21;

const redstone = generator(15, 7, 0.05);
const gold = generator(15, 9, 0.02);
const diamond = generator(20, 2, 0.05);

const data = [...new Array(mapWidth).fill(new Array(mapHeight).fill(0))]
  .map((arr: number[], x: number) => arr.map((val: number, y: number) => {
    return y == 0 ? 0 :
      (y < 6) ? Math.random() > (y-2)/4 ? 1 : 2 :
      redstone(y) ? 11 :
      gold(y) ? 9 :
      diamond(y) ? 10 :
      2;
  }));

export default data;

function generator(level: number, spread: number, density: number) {
  return (y: number) => {
    return Math.random() > ((y - level)**2)/(2*spread + 1) && Math.random() < density;
  }
}
