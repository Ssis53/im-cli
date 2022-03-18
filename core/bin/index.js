#!/usr/bin/env node

console.log("im-cli core index");
console.log(__filename);
console.log(__dirname);

const importLocal = require("import-local");
const log = require("npmlog");

if(importLocal(__dirname)) {
  log.info("core/bin/index.js", "用本地的")
} else {
  log.info("core/bin/index.js", "用全局的")
  require("../lib/core")(process.argv.slice(2));
}