import { pixelsToSeconds } from '../../utils/conversions';

export default class {
  constructor(track) {
    this.track = track;
    this.active = false;
    this.lastOffsetX = 0;
    this.moveBegin = 0;
    this.moveEnd = 0;
  }

  setup(samplesPerPixel, sampleRate) {
    this.samplesPerPixel = samplesPerPixel;
    this.sampleRate = sampleRate;
  }

  emitShift(x) {
    const deltaX = x - this.prevX;
    const deltaTime = pixelsToSeconds(deltaX, this.samplesPerPixel, this.sampleRate);
    if (this.moveBegin === x) {
      this.track.ee.emit('shiftbegin', deltaTime, this.track);
    }
    if (this.moveEnd === x) {
      const prevX = this.prevX;
      const moveBegin = this.moveBegin;
      const moveEnd = this.moveEnd;
      const self = this;
      const undoDelta = (moveEnd - moveBegin);
      const undo = () => {
        self.prevX = prevX - undoDelta;
      }
      this.track.ee.emit('shiftend', pixelsToSeconds(undoDelta, this.samplesPerPixel, this.sampleRate), this.track, undo);
    }

    this.prevX = x;
    this.track.ee.emit('shift', deltaTime, this.track);
  }

  begin(x) {
    this.moveBegin = x;
    this.moveEnd = 0;
  }

  complete(x) {
    this.moveEnd = x;
    this.emitShift(x);
    this.active = false;
  }

  mousedown(e) {
    e.preventDefault();
    this.active = true;
    this.el = e.target;
    this.prevX = e.offsetX;
    this.begin(e.offsetX);
  }

  mousemove(e) {
    if (this.active) {
      e.preventDefault();
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
    this.begin(this.lastOffsetX);
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
