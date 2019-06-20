import { Game, loadImage } from './engine/engine';
import Pointer from './objects/pointer';
import FPSCounter from './objects/fps-counter';
import SpriteSheet from './objects/sprite-sheet';
import TileData from './objects/tile-data';
import TileMap from './objects/tile-map';

// @ts-ignore
import pickaxe from '../assets/pickaxe.png';
// @ts-ignore
import spritesheet from '../assets/spritesheet.png'

const game = new Game();
document.body.appendChild(game.canvas);
(async () => {

  const mapWidth = 80;
  const mapHeight = 21;
  const tileMap = new TileMap(
    new SpriteSheet(20, 20, await loadImage(spritesheet)),
    new TileData(mapWidth, mapHeight, [...new Array(mapWidth).fill([0,...new Array(mapHeight-1).fill(1)])])
  );
  game.addObject(tileMap);

  let toggle = 0;
  window.addEventListener('click', () => {
    ++toggle%2 ? game.pause() : game.play();
  });
  game.addObject(new Pointer(pickaxe));
  game.addObject(new FPSCounter(600));


  game.play();
})();
