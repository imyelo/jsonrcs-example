var jsonrcs = require('jsonrcs');
var path = require('path');

module.exports = function () {
  jsonrcs.push(path.join(__dirname, './public/json/dict.json'));
};
