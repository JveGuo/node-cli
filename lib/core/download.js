/*
 * @Author: jiawei.guo
 * @Date: 2022-12-26 22:23:43
 * @Description: 下载模版
 */
"use strict";

const download = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");
const file = require("./file");

const downloadRepo = async (frameworkUrl, projectName) => {
  const spinner = ora("正在下载模版...").start();

  try {
    await file(projectName);

    await download(
      `direct:${frameworkUrl}`,
      projectName,
      { clone: true },
      (err) => {
        if (err) {
          spinner.fail();
          console.log(chalk.red("下载模版失败"));
          return;
        }
        spinner.succeed("下载模版成功");
        console.log(chalk.green.bold("Done!"), chalk.bold("you can run"));
        console.log(chalk.bold(`cd ${projectName}`));
      }
    );
  } catch (e) {
    spinner.fail(e.message);
  }
};

module.exports = downloadRepo;
