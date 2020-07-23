'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: 'feat:      一个新的特性'},
    {value: 'fix',      name: 'fix:       修复一个Bug'},
    {value: 'docs',     name: 'docs:      变更的只有文档'},
    {value: 'style',    name: 'style:     空格, 分号等格式修复'},
    {value: 'refactor', name: 'refactor:  代码重构，注意和特性、修复区分开'},
    {value: 'perf',     name: 'perf:      提升性能'},
    {value: 'test',     name: 'test:      添加一个测试'},
    {value: 'chore',    name: 'chore:     开发工具变动(构建、脚手架工具等)'},
    {value: 'revert',   name: 'revert:    代码回退'},
    {value: 'WIP',      name: 'WIP:       Work in progress'}
  ],
  scopes: [
    {name: '新功能'},
    {name: 'bug修复'},
    {name: '空格等符号修复'},
    {name: '重构代码'},
    {name: "性能优化"},
    {name: '添加测试'},
    {name: '工具修改'},
    {name: '版本回退'},
    {name: "工作进度"}
  ],
 /* messages: {
    type: 'Select the type of change that you\'re committing:',
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },*/

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100
};
