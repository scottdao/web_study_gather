// 模板代码
var fs = require('fs');
var path = require('path');
try {
  const modelFile = fs.readFileSync(
    path.resolve(__dirname, './index.model'),
    'utf-8'
  );

  // console.log(modelFile, __dirname, '11');
  // var targetFile = fs.readFileSync(path.resolve(__dirname, './dist/index.js'));
  var targetFile = fs.readFileSync(
    path.resolve(__dirname, './index.js'),
    'utf-8'
  );
  const content = modelFile.replace('/* template */', targetFile);
  fs.writeFileSync(
    path.resolve(__dirname, 'dist/index.bundle.js'),
    content,
    'utf-8'
  );
} catch (error) {
  console.log(error);
}
