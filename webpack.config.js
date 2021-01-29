const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/app.js'),
  output: {
    path: path.join(__dirname, '/dist/waveform-playlist/js'),
    publicPath: '/waveform-playlist/js/',
    filename: 'waveform-playlist.var.js',
    library: 'WaveformPlaylist',
    libraryTarget: 'var',
  },
  devtool: '#source-map',
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    publicPath: '/waveform-playlist/js/',
    inline: true,
    colors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
};
