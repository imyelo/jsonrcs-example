require(['superagent'], function (superagent) {
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

    superagent.get('/json/dict.json').accept('json').end(function(res) {
      render({dict: res.body});
    });
  });
});
