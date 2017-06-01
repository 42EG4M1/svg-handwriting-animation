/**
 *
 * main
 *
 */

/* eslint-disable no-console */

import PlayHandwriting from './modules/PlayHandwriting';
import replay from './modules/replay';

const path1 = Array.from(document.querySelectorAll('#js-mask path'));
const path2 = Array.from(document.querySelectorAll('#js-clip path'));
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const ph1 = new PlayHandwriting(path1, 15, 0);
const ph2 = new PlayHandwriting(path2, 15, 0);

function resetAll() {
  return new Promise((resolve, reject) => {
    PlayHandwriting.reset(path1);
    PlayHandwriting.reset(path2);
  });
}

const init = () => {
  resetAll()
  .then(ph1.playAnimation())
  .then(setTimeout(() => btn1.classList.toggle('hidden'), 2600))
  .then(setTimeout(() => ph2.playAnimation(), 2600))
  .then(setTimeout(() => btn2.classList.toggle('hidden'), 5200));
};

window.onload = () => init();

replay(btn1, 3800, path1, 10, 0);
replay(btn2, 3800, path2, 10, 0);
