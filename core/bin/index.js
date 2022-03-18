#!/usr/bin/env node

console.log("im-cli core index");
console.log(__filename);
console.log(__dirname);

const importLocal = require("import-local");
const log = require("npmlog");

if(importLocal(__dirname)) {
  log.info("core/index.js", "有Local的")
} else {
  require("../lib/core")(process.argv.slice(2));
}