var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output:{ path:__dirname + '/webpacked_code', filename: 'bundel.js'},
    watch:true,

    module:{
      loaders:[
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/,
          query:{
            presets:['es2015', 'stage-0','react'],
            plugins:['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
          }
        }
      ]
    },
};
