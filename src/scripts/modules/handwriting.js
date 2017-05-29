/**
 *
 * _handwriting
 *
 */

/* eslint-disable no-console */

import requestAnimFrame from './requestAnimFrame';
import DrawSvg from './DrawSvg';

const target = document.querySelectorAll('#js-mask path');
const speed = 12;
const interval = 0; // milli second
const funcArr = [];
const frameArr = [];
let durationArr = [];

const settings = () => {
  target.forEach((elm, i) => {
    const length = elm.getTotalLength();
    const frame = Math.ceil(length / speed);
    const drawSvg = new DrawSvg(elm, i, length, frame);
    funcArr.push(drawSvg);
    frameArr.push(frame);
  });
};

const timer = () => {
  settings();
  const len = frameArr.length;
  frameArr.unshift(1);
  frameArr.pop();
  durationArr = frameArr.map(val => (Math.floor(val) / 60) * 1000);
  for (let i = 0; i < len; i += 1) {
    if (i !== 0) {
      const t = durationArr[i] + durationArr[i - 1] + interval;
      durationArr.splice(i, 1, t);
    }
  }
};

const playAnimation = () => {
  timer();
  funcArr.forEach((item, i) => {
    setTimeout(() => {
      item.play();
    }, durationArr[i]);
  });
};

const handwriting = () => {
  requestAnimFrame();
  playAnimation();
};

export default handwriting;
