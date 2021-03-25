/* eslint-disable */
const basic_babel_config=require("@cyber-tools/preset-babel-option");

basic_babel_config.plugins.push([
  require.resolve("babel-plugin-module-resolver"),{
    root: ["./src/"],
    alias: {
      "@": "./src/",
      "@@":"./"
    }
  }
]);

module.exports=basic_babel_config;