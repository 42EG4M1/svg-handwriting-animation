/**
 *
 * main
 *
 */

import PlayHandwriting from './modules/PlayHandwriting';

const path1 = document.querySelectorAll('#js-mask path');
const path2 = document.querySelectorAll('#js-clip path');

const ph1 = new PlayHandwriting(path1, 20, 0);
const ph2 = new PlayHandwriting(path2, 10, 0);

window.onload = () => {
  PlayHandwriting.reset(path1);
  PlayHandwriting.reset(path2);
  ph1.playAnimation();
  setTimeout(() => {
    ph2.playAnimation();
  }, 2000);
};
