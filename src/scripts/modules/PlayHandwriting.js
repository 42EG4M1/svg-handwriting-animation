/**
 *
 * PlayHandwriting
 *
 */

/* eslint-disable no-console */

import requestAnimFrame from './requestAnimFrame';
import DrawSvg from './DrawSvg';

export default class PlayHandwriting {
  constructor(pathArr, speed, interval) {
    this.pathArr = pathArr;
    this.speed = speed;
    this.interval = interval;
    this.instanceArr = [];
    this.frameArr = [];
    this.durationArr = [];
  }
  static reset(target) {
    target.forEach((elm) => {
      // const type = elm.tagName;
      // if (type === 'path') {
      const e = elm;
      const l = e.getTotalLength();
      e.style.strokeDasharray = `${l} ${l}`;
      e.style.strokeDashoffset = l;
      // }
    });
  }
  settings() {
    this.pathArr.forEach((elm, i) => {
      const length = elm.getTotalLength();
      const frame = Math.ceil(length / this.speed);
      const drawSvg = new DrawSvg(elm, i, length, frame);
      this.instanceArr.push(drawSvg);
      this.frameArr.push(frame);
    });
  }
  timer() {
    this.settings();
    const length = this.frameArr.length;
    this.frameArr.unshift(1);
    this.frameArr.pop();
    this.durationArr = this.frameArr.map(val => (Math.floor(val) / 60) * 1000);
    for (let i = 0; i < length; i += 1) {
      if (i !== 0) {
        const t = this.durationArr[i] + this.durationArr[i - 1] + this.interval;
        this.durationArr.splice(i, 1, t);
      }
    }
  }
  playAnimation() {
    requestAnimFrame();
    this.timer();
    this.instanceArr.forEach((item, i) => {
      setTimeout(() => {
        item.play();
      }, this.durationArr[i]);
    });
  }
}
