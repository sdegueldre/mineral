export const mapWidth = 120;
export const mapHeight = 27;

const redstone = generator(22, 7, 0.025);
const gold = generator(17, 10, 0.02);
const diamond = generator(25, 2, 0.05);

const data = [...new Array(mapWidth).fill(new Array(mapHeight).fill(0))]
  .map((arr: number[], x: number) => arr.map((val: number, y: number) => {
    return y == 0 ? 3 :
      (y < 6) ? Math.random() > (y-2)/4 ? 2 : 1 :
      redstone(y) ? 75 :
      gold(y) ? 48 :
      diamond(y) ? 74 :
      1;
  }));

export default data;

function generator(level: number, spread: number, density: number) {
  return (y: number) => {
    return Math.random() > ((y - level)**2)/(2*spread + 1) && Math.random() < density;
  }
}
