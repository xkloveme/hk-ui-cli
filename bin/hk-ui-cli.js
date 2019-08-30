#!/usr/bin/env node
/*
 * @describe: 主入口
 * @Author: superDragon
 * @Date: 2019-08-30 10:56:06
 * @LastEditors: superDragon
 * @LastEditTime: 2019-08-30 14:12:36
 */
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
clear();
console.log(chalk.yellow(figlet.textSync('HK-UI-CLI', { horizontalLayout: 'full' })));
process.env.NODE_PATH = __dirname + '/../node_modules/'
process.env.NODE_ENV = 'development';
process.env.VERSION = require('./../package.json').version;
require('../packages/cli/src/commander');