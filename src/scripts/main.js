/**
 *
 * main
 *
 */

/* eslint-disable no-console */

import PlayHandwriting from './modules/PlayHandwriting';
import replay from './modules/replay';

const wait = document.getElementById('js-wait');
const path1 = Array.from(document.querySelectorAll('#js-mask path'));
const path2 = Array.from(document.querySelectorAll('#js-clip path'));
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const resetAll = () => {
  wait.classList.add('fadeout');
  PlayHandwriting.reset(path1);
  PlayHandwriting.reset(path2);
};
const play1 = () => {
  setTimeout(() => {
    const ph1 = new PlayHandwriting(path1, 15, 0);
    ph1.playAnimation();
  }, 1000);
};
const btnShow1 = () => {
  setTimeout(() => {
    btn1.classList.toggle('hidden');
  }, 3600);
};
const play2 = () => {
  setTimeout(() => {
    const ph2 = new PlayHandwriting(path2, 15, 0);
    ph2.playAnimation();
  }, 3600);
};
const btnShow2 = () => {
  setTimeout(() => {
    btn2.classList.toggle('hidden');
  }, 6200);
};
const initPromise = () => Promise.resolve()
.then(resetAll)
.then(play1)
.then(btnShow1)
.then(play2)
.then(btnShow2);

// const ph1 = new PlayHandwriting(path1, 15, 0);
// const ph2 = new PlayHandwriting(path2, 15, 0);
// function resetAll() {
//   return new Promise((resolve) => {
//     wait.classList.add('fadeout');
//     PlayHandwriting.reset(path1);
//     PlayHandwriting.reset(path2);
//     resolve(1000);
//   });
// }
// const initPromise = () => {
//   resetAll()
//   .then(value => setTimeout(() => ph1.playAnimation(), value))
//   .then(setTimeout(() => btn1.classList.toggle('hidden'), 3600))
//   .then(setTimeout(() => ph2.playAnimation(), 3600))
//   .then(setTimeout(() => btn2.classList.toggle('hidden'), 6200));
// };

window.onload = () => initPromise();

replay(btn1, 3800, path1, 10, 0);
replay(btn2, 3800, path2, 10, 0);
