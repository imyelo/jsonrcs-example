require(['jsonrcs'], function (jsonrcs) {
  $(function () {
    var render = function (dict) {
      var TPL = [
        '<% _.each(dict, function (val, key) { %>',
          '<dt><%= key %></dt>',
          '<dd><%= val %></dd>',
        '<% }); %>'
      ].join('');
      $('dl').html(_.template(TPL)(dict));
    };

    jsonrcs.pull('/json/dict.json', function (err, last) {
      render({dict: last});
    });

    // jsonrcs.pull('/json/dict.json').accept('json').end(function(res) {
    //   render({dict: res.body});
    // });
  });
});
