"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireNodeModule = void 0;
var path = require("path");
function requireNodeModule(moduleRelativePath, importMetaUrl, optionalSettings = {}) {
  if (optionalSettings.ts) {
    require('ts-node').register();
  }
  var moduleId = (
    importMetaUrl
      ? path.resolve(new URL('.', importMetaUrl).pathname, moduleRelativePath)
      : moduleRelativePath
  );
  if (moduleId.startsWith('.')) {
    throw new Error('Import error: To import by relative path, you need to pass "import.meta.url" as the second parameter.');
  }
  return require(moduleId);
}
exports.requireNodeModule = requireNodeModule;
