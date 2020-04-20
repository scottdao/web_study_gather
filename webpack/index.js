const babel = require('@babel/core');
const loaderUtils = require('loader-utils');
const path = require('path');
module.exports = function (content) {
  console.log(content, 'content');
  return content;
};
