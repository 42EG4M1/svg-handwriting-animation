/**
 *
 * DrawSvg
 *
 */

/* eslint-disable no-console */

export default class DrawSvg {
  constructor(el, order, length, frame) {
    this.el = el;
    this.order = order;
    this.totalLength = length;
    this.totalFrame = frame;
    this.currentFrame = 0;
    this.requestId = null;
  }
  play() {
    this.draw();
  }
  draw() {
    const progress = this.currentFrame / this.totalFrame;
    if (progress > 1) {
      window.caf(this.requestId);
    } else {
      this.currentFrame += 1;
      this.el.style.strokeDashoffset = Math.floor(this.totalLength * (1 - progress));
      this.requestId = window.raf(() => {
        this.draw();
      });
    }
  }
}
