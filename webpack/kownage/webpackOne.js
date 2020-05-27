// webpack 系列之 Tapable

const { SyncHook } = require('tapable');

const hook = new SyncHook(['arg1', 'arg2']);

// 注册

hook.tap('a', (a1, a2) => {
  // console.log('a', a1, a2);
});

hook.tap('b', (a1, a2) => {
  // console.log('b', a1, a2);
});

hook.call(1, 2);
// loader
// console.log(compiler);
