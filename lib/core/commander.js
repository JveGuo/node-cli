/*
 * @Author: jiawei.guo
 * @Date: 2022-12-26 15:40:40
 * @Description: commander
 */
"use strict";

const action = require("./action");

const commander = (program) => {
  program
    .command("create <project> [other...]")
    .alias("crt") // 缩写
    .description("创建项目") // 介绍
    .action(action);
};

module.exports = commander;
