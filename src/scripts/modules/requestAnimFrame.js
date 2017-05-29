/**
 *
 * _requestAnimFrame
 *
 */

/* eslint func-names: ["error", "never"] */

const requestAnimFrame = () => {
  window.raf = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  }());
  window.caf = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      window.msCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  }());
};

export default requestAnimFrame;
