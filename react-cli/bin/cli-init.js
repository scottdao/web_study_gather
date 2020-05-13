#!/usr/bin/env node
const cm = require('commander');
const ir = require('inquirer');
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const latestVersion = require('latest-version');
const download = require('./download');
cm.usage('<project-name>').parse(process.argv);

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
  // rootName = projectName;
  next = Promise.resolve(projectName);
} else if (rootName === projectName) {
  //  next = rootName = '.';
  next = ir
    .prompt([
      {
        name: 'buildInCurrent',
        message:
          '当前目录为空，且目录名称和项目名称相同，是否直接在当前目录下创建新项目？',
        type: 'confirm',
        default: true,
      },
    ])
    .then((answer) => {
      return Promise.resolve(answer.buildInCurrent ? '.' : projectName);
    });
} else {
  // rootName = projectName;
  next = Promise.resolve(projectName);
}
next && go();

function go() {
  next.then((res) => {
    if (res !== '.') {
      fs.mkdirSync(res);
    }
    return download(res)
      .then((item) => {
        // console.log(item);
        return {
          root: res,
          downloadTemp: item,
          name: res,
        };
      })
      .then((context) => {
        return ir.prompt([
          {
            name: 'projectName',
            message: '项目的名称',
            default: context.name,
          },
          {
            name: 'projectVersion',
            message: '项目的版本号',
            default: '1.0.0',
          },
          {
            name: 'projectDescription',
            message: '项目的简介',
            default: `A project named ${context.name}`,
          },
        ]);
      })
      .then((items) => {
        return latestVersion('react-cli')
          .then((version) => {
            console.log(items, version);
            return {
              ...context,
              metadata: {
                ...items,
              },
            };
          })
          .then((items) => {
            console.log(items);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  });
  //  console.log(path.resolve(process.cwd(), path.join('.', rootName)));
}
