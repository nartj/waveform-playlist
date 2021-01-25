import { expect } from 'chai';
import { secondsToPixels } from './../../src/utils/conversions';

describe('Util Conversions', () => {
  it('calculates the requested number of peaks', () => {
    expect(secondsToPixels(1, 2048, 44100)).to.equal(22);
  });
});
