/*
 * @describe: 上色
 * @Author: superDragon
 * @Date: 2019-08-29 17:51:58
 * @LastEditors: superDragon
 * @LastEditTime: 2019-08-29 17:54:12
 */
'use strict';

/* eslint-disable */
const chalk = require('chalk');
const util = require('util');

let log = {};

// 管理命令 log 颜色
let logTypes = [
  {
    name: 'info',
    color: chalk.green,
    level: 2
  },
  {
    name: 'error',
    color: chalk.red,
    level: 4
  }
];


logTypes.forEach(function (item) {

  /**
   * 定义打印日志格式
   *
   * @param {string} format 要输出的内容.
   * @param {...*} varArgs 变长参数.
   */
  log[item.name] = function (format, varArgs) {
    // 格式化输出字符串
    let msg = util.format.apply(null, arguments);

    if (msg) {
      console.log((log.prefix || 'msg') + ' ' + item.color(item.name.toUpperCase()) + ' ' + msg);
    }
    else {
      console.log();
    }
  };
});


module.exports = log;