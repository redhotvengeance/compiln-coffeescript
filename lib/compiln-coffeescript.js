var fs = require('fs');
var coffeescript = require('coffee-script');

module.exports.detect = function()
{
  return ["coffee"];
};

module.exports.ext = function()
{
  return "js";
};

module.exports.compile = function(file, options)
{
  return coffeescript.compile(fs.readFileSync(file, "utf8"));
};
