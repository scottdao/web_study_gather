const babylon = require('babylon')
const fs = require('fs')
const traverse = require('babel-traverse').default
const { transformFromAst } = require('babel-core')
module.exports = {
    getAST:(path)=>{ // 获取语法树
        const source = fs.readFileSync(path, 'utf-8');
        return babylon.parse(source, {
            sourceType:"module"
        })
    },
    getDependencies:(ast)=>{ // 获取文件依赖
        const dependencies = []
        traverse(ast, {
            ImportDeclaration:({ node })=>{
                dependencies.push(node.source.value)
            }
        })
        return dependencies
    },
    transform:(ast)=>{ // 将ast语法树进行解析；转换语法
        // console.log(ast, 99877)
       const { code } =  transformFromAst(ast, null,{
            presets:['env']
        })
        return code
    }
}