import {encoder as Encoder} from 'vorbis-encoder-js';

// quality between - 0.1 to 1
function encodeOGG(buffer, numberOfChannels, sampleRate, quality, tags) {
    const audioBuffer = {
        getChannelData: (id) => {
            return buffer[id];
        }
    }
    const encoder = new Encoder(sampleRate, numberOfChannels, quality, tags);
    encoder.encodeFrom(audioBuffer);
    const blob = encoder.finish();
    self.postMessage(blob);
}

self.onmessage = (e) => {
    switch (e.data.command) {
        case 'encodeOGG': {
            encodeOGG(e.data.buffer, e.data.numberOfChannels, e.data.sampleRate, e.data.quality, e.data.tags);
            break;
        }
        default: {
            // todo
            //throw new Error('Unknown export worker command');
        }
    }
};
