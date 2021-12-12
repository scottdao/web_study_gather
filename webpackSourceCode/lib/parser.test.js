const { getAST, getDependencies, transform } = require('./parser')
const path = require('path')
const ast = getAST(path.join(__dirname, '../src/index.js'))
const dep = getDependencies(ast)
const sourceCode = transform(ast)
console.log(sourceCode, dep)