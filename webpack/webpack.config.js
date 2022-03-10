const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const DotenvPlugin = require('dotenv-webpack');

module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig, {
    plugins: [
      new DotenvPlugin({
        path: path.resolve(__dirname, '..', `env/.env.${env}`),
        defaults: path.resolve(__dirname, '..', 'env/.env.defaults'),
      }),
    ],
  });
};
