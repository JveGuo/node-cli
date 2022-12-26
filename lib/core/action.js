/*
 * @Author: jiawei.guo
 * @Date: 2022-12-26 15:51:14
 * @Description: action
 */
"use strict";

const inquirer = require("inquirer");
const config = require("../../utils/config");
const downloadRepo = require("../core/download");

const action = async (project, args) => {
  // 创建的名称, 其他拼接的参数

  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      choices: config.framework,
      message: "请选择你要使用的框架",
    },
  ]);

  // 下载模版仓库
  downloadRepo(config.frameworkUrl[answer.framework], project);
};

module.exports = action;
