/*
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-08-30 11:21:05
 * @LastEditors: superDragon
 * @LastEditTime: 2019-08-30 14:14:10
 */
'use strict';

// init 安装脚手架命令
const init = require('./action');
// 提示文件
const locals = require('../../locals')();

module.exports = function (program) {

  // define init command
  program
    .command('init')
    .description(locals.INIT_DESC)
    .option('-f, --force', locals.INIT_OPTION_FORCE)
    .action(options => init({
      force: options.force
    }));
};