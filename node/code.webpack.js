const chalk = require('chalk');
const ora = require('ora');

const spinner = ora(chalk.red('it is loading')).start();
spinner.color = 'yellow';
setTimeout(() => {
  spinner.stop();
}, 2000);
