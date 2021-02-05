const path = require('path');

module.exports = {
  entry: ['regenerator-runtime/runtime.js', path.join(__dirname, '/src/app.js')],
  output: {
    path: path.join(__dirname, '/dist/waveform-playlist/js'),
    publicPath: '/waveform-playlist/js/',
    filename: 'waveform-playlist.var.js',
    library: 'WaveformPlaylist',
    libraryTarget: 'var',
    globalObject: 'this'
  },
  target: 'es2015',
  mode: "development",
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"],
          }
        }
      },
      {
        test: /\.work1er\.js$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'worker-loader'}
        ]
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    publicPath: '/waveform-playlist/js/',
    inline: true,
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  resolve: {
    fallback: {
      "fs": false
    },
  }
};
