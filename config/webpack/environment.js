const { environment } = require('@rails/webpacker')
const path = require('path');

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)(\.erb)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', { modules: false }],
        ],
      },
    },
    {
      test: /\.(woff|eot|otf|ttf|svg)$/,
      exclude: path.resolve(__dirname, '../../app/assets'),
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/',
          useRelativePath: false,
        },
      },
    },
    {
      test: /\.(png|jpg(eg)?|gif|ico)$/,
      exclude: path.resolve(__dirname, '../../app/assets'),
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'images/',
          useRelativePath: false,
        },
      },
    },
  ],
};

environment.config.set('resolve.extensions', ['.foo', '.bar']);
environment.config.set('output.filename', '[name].js');
environment.config.merge({ devtool: 'eval-source-map' });
environment.config.delete('output.chunkFilename');

module.exports = environment;
