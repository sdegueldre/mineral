import { Game } from './engine/engine';
import Pointer from './objects/pointer';
import FPSCounter from './objects/fps-counter';
// @ts-ignore
import pickaxe from '../assets/pickaxe.png';

const game = new Game();
document.body.appendChild(game.canvas);
(async () => {
  let toggle = 0;
  window.addEventListener('click', () => {
    ++toggle%2 ? game.pause() : game.play();
  });
  game.addObject(new Pointer(pickaxe));
  game.addObject(new FPSCounter());
  game.play();
})();
