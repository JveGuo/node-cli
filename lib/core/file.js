/*
 * @Author: jiawei.guo
 * @Date: 2022-12-27 10:46:33
 * @Description: 判断文件
 */
"use strict";

const fs = require("fs-extra");

const file = async (projectName) => {
  const exists = await fs.pathExists(projectName);
  if (exists) {
    throw new Error(`${projectName} 项目已存在, 请删除后重试`);
  }
};

module.exports = file;
