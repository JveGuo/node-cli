#!/usr/bin/env node

"use strict";

const { program } = require("commander");
const help = require("../lib/core/help");
const commander = require("../lib/core/commander");

// help 命令集合
help(program);

commander(program);

program.parse(process.argv);
