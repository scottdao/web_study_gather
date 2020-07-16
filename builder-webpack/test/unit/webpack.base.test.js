const assert = require('assert')
describe('webpack.base.test is running', () => {
    const baseConfig = require('../../lib/webpack.base.js');
    it('entry', ()=>{
        // 配置文件入口文件是否正确
        assert.equal(baseConfig.entry.index, 'D:/study/github/scottPackaging/builder-webpack/src/index/index.js')
        assert.equal(baseConfig.entry.search, 'D:/study/github/scottPackaging/builder-webpack/src/search/index.js')
    })
});
function add (){
    return 1+3
}
describe('test add function', () => {
    it('add', ()=>{
        assert.equal(add(), 4)
    })
});
