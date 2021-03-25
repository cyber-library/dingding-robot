/* eslint-disable */
const deepExtend=require("deep-extend");
const basic_babel_config=require("@cyber-tools/preset-babel-option");

module.exports = deepExtend(basic_babel_config,{
  plugins:[
    [require.resolve("babel-plugin-module-resolver"),{
      root: ["./src/"],
      alias: {
        "@": "./src/",
        "@@":"./"
      }
    }]
  ]
});