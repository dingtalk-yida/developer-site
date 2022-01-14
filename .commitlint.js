#!/usr/bin/env node
const fs = require('fs');
const myRegex = new RegExp(/(^|\b)to\s#\d+/);
const commitMsg = fs.readFileSync(process.env.HUSKY_GIT_PARAMS, 'utf8');

if (!myRegex.test(commitMsg) ) {
  console.error(`提交信息需要加上 to #AoneID 哦`);
  process.exit(1);
}
