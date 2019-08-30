/*
 * @describe: 命令配置
 * @Author: superDragon
 * @Date: 2019-08-29 17:48:31
 * @LastEditors: superDragon
 * @LastEditTime: 2019-08-30 14:40:09
 */
'use strict';

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const program = require('commander');
const exec = require('mz/child_process').exec;
const locals = require('../locals')();
const log = require('../lib/utils/log');
// const initCommand = require('./scaffold');
// 检查版本更新方法
// const checkUpdate = require('../lib/utils/checkUpdate');

let version = process.env.VERSION;

// 检查最新版本
// checkUpdate().then(async () => {
// 如果后序没有输入命令，执行帮助指令
if (!process.argv[2]) {
  let output = exec('hk-ui-cli -h');
  // let output = await exec('hk-ui-cli -h');
  console.log(output[0]);
}
// 获取版本号
else {
  let argv = process.argv[2];

  if (argv === '-v' || argv === '--version') {
    clear();
    console.log(chalk.yellow(figlet.textSync('HK-UI-CLI', { horizontalLayout: 'full' })));
    log.info('hk-ui-cli version: ', version);
  }
}

// 定义命令
program
  // 设置/获取命令用法str
  .usage('[commands] [options]')
  // 定义顶级命令的参数语法。
  .arguments('<cmd> [env]')
  // 查看当前版本
  .option('-v, --version', locals.SHOW_VERSION)
  // 注册命令的回调
  .action((cmd, env) => {

    if (env) {
      log.error(`\`hk-ui-cli ${cmd} ${env}\` ${locals.NO_COMMAND}`);
    }
    else {
      log.error('`hk-ui-cli ' + cmd + '` ' + locals.NO_COMMAND);
    }
  });

// init
// initCommand(program);

program.parse(process.argv);
// });
