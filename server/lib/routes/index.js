var index;

index = function(config) {
  var name, options, _ref;

  options = {
    reload: config.liveReload.enabled,
    optimize: (_ref = config.isOptimize) != null ? _ref : false,
    cachebust: process.env.NODE_ENV !== "production" ? "?b=" + ((new Date()).getTime()) : ''
  };
  name = config.isOptimize && config.server.views.html ? "index-optimize" : "index";
  return function(req, res) {
    return res.render(name, options);
  };
};

exports.index = index;
