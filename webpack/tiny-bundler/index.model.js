// 模板代码
var fs = require('fs');
var path = require('path');
try {
  var modelFile = fs.readFileSync(path.resolve(__dirname, './index.js'));
  // console.log(modelFile, __dirname, '11');
  var targetFile = fs.readFileSync(path.resolve(__dirname, './dist/index.js'));
  console.log(targetFile);
} catch (error) {
  console.log(error);
}
