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

  emitSelection(x) {
    const minX = Math.min(x, this.startX);
    const maxX = Math.max(x, this.startX);
    const startTime = pixelsToSeconds(minX, this.samplesPerPixel, this.sampleRate);
    const endTime = pixelsToSeconds(maxX, this.samplesPerPixel, this.sampleRate);

    this.track.ee.emit('select', startTime, endTime, this.track);
  }

  complete(x) {
    this.emitSelection(x);
    this.active = false;
  }

  mousedown(e) {
    e.preventDefault();
    this.active = true;

    this.startX = e.offsetX;
    const startTime = pixelsToSeconds(this.startX, this.samplesPerPixel, this.sampleRate);

    this.track.ee.emit('select', startTime, startTime, this.track);
  }

  mousemove(e) {
    if (this.active) {
      e.preventDefault();
      this.emitSelection(e.offsetX);
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
    const rect = e.target.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    this.startX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
    const startTime = pixelsToSeconds(this.startX, this.samplesPerPixel, this.sampleRate);

    this.track.ee.emit('select', startTime, startTime, this.track);
  }

  touchmove(e) {
    if (this.active) {
      e.preventDefault();
      const rect = e.target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      this.lastOffsetX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
      this.emitSelection(this.lastOffsetX);
    }
  }

  touchend(e) {
    if (this.active) {
      e.preventDefault();
      const rect = e.target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      this.lastOffsetX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
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
    return '.state-select';
  }

  static getEvents() {
    return ['mousedown', 'mousemove', 'mouseup', 'mouseleave', 'touchstart', 'touchend', 'touchmove', 'touchcancel'];
  }
}
