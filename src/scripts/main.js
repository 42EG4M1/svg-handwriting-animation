/**
 *
 * main
 *
 */

import PlayHandwriting from './modules/PlayHandwriting';
import replay from './modules/replay';

const path1 = document.querySelectorAll('#js-mask path');
const path2 = document.querySelectorAll('#js-clip path');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const reset1 = () => PlayHandwriting.reset(path1);
const reset2 = () => PlayHandwriting.reset(path2);

window.onload = () => {
  const ph1 = new PlayHandwriting(path1, 15, 0);
  const ph2 = new PlayHandwriting(path2, 15, 0);
  reset1();
  reset2();
  ph1.playAnimation();
  setTimeout(() => ph2.playAnimation(), 2600);
};

replay(btn1, 3800, path1, 10, 0);
replay(btn2, 3800, path2, 10, 0);
