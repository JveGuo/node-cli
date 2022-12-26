/*
 * @Author: jiawei.guo
 * @Date: 2022-12-26 22:23:43
 * @Description: 下载模版
 */
"use strict";

const download = require("download-git-repo");
const ora = require("ora");

const downloadRepo = (frameworkUrl, project) => {
  const spinner = ora("正在下载模版...").start();

  download(`direct:${frameworkUrl}`, project, { clone: true }, (err) => {
    // 成功
    if (!err) {
      spinner.succeed("下载模版成功");
    } else {
      spinner.fail("下载模版失败");
    }
  });
};

module.exports = downloadRepo;
