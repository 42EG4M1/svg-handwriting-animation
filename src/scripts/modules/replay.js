/**
 *
 * repeat
 *
 */

import PlayHandwriting from './PlayHandwriting';

export default function replay(btn, timeout, path, speed, interval) {
  const target = btn;
  target.addEventListener('click', () => {
    target.classList.toggle('disabled');
    PlayHandwriting.reset(path);
    const r = new PlayHandwriting(path, speed, interval);
    r.playAnimation();
    setTimeout(() => {
      target.classList.toggle('disabled');
    }, timeout);
  }, false);
}
