const path = require("path");
const fs = require("fs");
 
const rewireBabelLoader = require("react-app-rewire-babel-loader");
 
// helpers
 
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
 
module.exports = function override(config, env) {
 
  // white-list some npm modules to the babel-loader pipeline
  // see: https://webpack.js.org/configuration/module/#rule-include
 
  config = rewireBabelLoader.include(
    config,
    resolveApp("../shared")
  );
 
  // black-list some modules from the babel-loader pipeline
  // see: https://webpack.js.org/configuration/module/#rule-exclude
 
  config = rewireBabelLoader.exclude(
    config,
    /(node_modules|bower_components)/
  );
 
  return config;
 
};