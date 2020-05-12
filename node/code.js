#!/usr/bin/env node
// npm link 关联文件; 脚手架必写的第一行
// console.log(1);
// commander 指令
const cm = require('commander');
const ir = require('inquirer');
// 版本指令定义
cm.version('1.0.0', '-v --version');
// cm.option('-a -atest', 'it is test');
// 用户自定义输入命令：vue init / npm init
cm.command('init <name>').action((name) => {
  ir.prompt([
    {
      type: 'input',
      name: 'author',
      message: 'who are you',
    },
  ]).then((res) => {
    require('./bin/download.js')(res);
  });
});
cm.parse(process.argv);
