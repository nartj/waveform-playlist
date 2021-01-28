import { pixelsToSeconds } from '../../utils/conversions';

export default class {
  constructor(track) {
    this.track = track;
    this.active = false;
    this.lastOffsetX = 0;
  }

  setup(samplesPerPixel, sampleRate) {
    this.samplesPerPixel = samplesPerPixel;
    this.sampleRate = sampleRate;
  }

  emitShift(x) {
    const deltaX = x - this.prevX;
    const deltaTime = pixelsToSeconds(deltaX, this.samplesPerPixel, this.sampleRate);
    this.prevX = x;
    this.track.ee.emit('shift', deltaTime, this.track);
  }

  complete(x) {
    this.emitShift(x);
    this.active = false;
  }

  mousedown(e) {
    e.preventDefault();

    this.active = true;
    this.el = e.target;
    this.prevX = e.offsetX;
  }

  mousemove(e) {
    if (this.active) {
      e.preventDefault();
      console.log(e.offsetX);
      this.emitShift(e.offsetX);
    }
  }

  mouseup(e) {
    if (this.active) {
      e.preventDefault();
      this.complete(e.offsetX);
    }
  }

  mouseleave(e) {
    if (this.active) {
      e.preventDefault();
      this.complete(e.offsetX);
    }
  }

  touchstart(e) {
    e.preventDefault();

    this.active = true;
    this.el = e.target;
    const rect = e.target.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    this.lastOffsetX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
    this.prevX = this.lastOffsetX;
  }

  touchmove(e) {
    if (this.active) {
      e.preventDefault();
      const rect = e.target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      this.lastOffsetX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
      this.emitShift(e.targetTouches[0].clientX - (rect.left - bodyRect.left));
    }
  }

  touchend(e) {
    if (this.active) {
      e.preventDefault();
      this.complete(this.lastOffsetX);
    }
  }

  touchcancel(e) {
    if (this.active) {
      e.preventDefault();
      const rect = e.target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      this.lastOffsetX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
      this.complete(this.lastOffsetX);
    }
  }

  static getClass() {
    return '.state-shift';
  }

  static getEvents() {
    return ['mousedown', 'mousemove', 'mouseup', 'mouseleave', 'touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }
}
