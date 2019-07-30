const base = require("../../config/jest/jest.config.base.js");
const pack = require("./package");

module.exports = {
  ...base,
  displayName: pack.name,
  name: pack.name,
  rootDir: "../.."
};