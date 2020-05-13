#!/usr/bin/env node
const cm = require('commander');
const ir = require('inquirer');
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const download = require('./download');
cm.usage('<project-name>').parse(process.argv);
// const promptFn = (callBack) => {
//   return ir
//     .prompt([
//       {
//         name: 'projectName',
//         message: '请输入项目名称',
//       },
//     ])
//     .then((answers) => {
//       console.log(`你输入的项目名称是：${answers.projectName}`);
//       callBack(answers);
//     });
// };

const projectName = cm.args[0];
// console.log(projectName);
if (!projectName) {
  cm.help();
  return;
}
// 判断项目文件目录名是否存在
let next = undefined;
const list = glob.sync('*');
let rootName = path.basename(process.cwd());
if (list.length) {
  const projectNameList = list.filter((item) => {
    //console.log(item);
    const fileName = path.resolve(process.cwd(), path.join('.', item)); // 文件目录的绝对路径
    const isDir = fs.statSync(fileName).isDirectory(); // 判断文件目录是否存在
    //  console.log(isDir);
    return item.indexOf(projectName) !== -1 && isDir;
  });
  if (projectNameList.length !== 0) {
    console.log(`项目${projectName}已经存在`);
    return;
  }
  rootName = projectName;
} else if (rootName === projectName) {
  next = rootName = '.';
} else {
  rootName = projectName;
}
go();
function go() {
  //  console.log(path.resolve(process.cwd(), path.join('.', rootName)));
  download(rootName).then((res) => {
    console.log(res);
  });
}
