/*
 * @Author: jiawei.guo
 * @Date: 2022-12-26 15:22:40
 * @Description: help 命令
 */
"use strict";

const help = (program) => {
  program.option("-f --framework <framework>", "设置框架");
};

module.exports = help;
