/*
 * @Author: jiawei.guo
 * @Date: 2022-12-26 15:51:14
 * @Description: action
 */
"use strict";

const inquirer = require("inquirer");
const config = require("../../utils/config");

const action = (project, args) => {
  // 创建的名称, 其他拼接的参数

  inquirer
    .prompt([
      {
        type: "list",
        name: "framework",
        choices: config.framework,
        message: "请选择你要使用的框架",
      },
    ])
    .then((answer) => {
      console.log(answer);
    });
};

module.exports = action;
