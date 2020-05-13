#!/usr/bin/env node

const cm = require('commander');
const ir = require('inquirer');
cm.version('1.0.0', '-v --version');
cm.command('init <name>').action((name) => {
  ir.prompt([
    {
      type: 'input',
      name: 'author',
      message: 'who are you',
    },
  ]).then((res) => {
    console.log(res);
    // require('./bin/download.js')(res);
  });
});

cm.parse(process.argv);
