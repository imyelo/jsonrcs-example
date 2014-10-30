var connect = require('connect');
var serveStatic = require('serve-static');
var opn = require('opn');
var path = require('path');
var cwd = path.join(__dirname, './public');
var update = require('./update');

var PORT = 8887;

update();

var app = connect();
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use('/lib/jsonrcs.js', serveStatic(path.join(__dirname, './node_modules/jsonrcs/dest/client.js')));
app.use(serveStatic(cwd, {'index': ['index.html', 'index.htm']}));
app.listen(PORT, function () {
  var url = "http://localhost:" + PORT;
  console.log("Running at " + url);
  opn(url);
});
