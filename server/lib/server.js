var engines, express, routes;

express = require('express');

engines = require('consolidate');

routes = require('./routes');

exports.startServer = function(config, callback) {
  var app, server;

  app = express();
  server = app.listen(config.server.port, function() {
    return console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
  });
  app.configure(function() {
    app.set('port', config.server.port);
    app.set('views', config.server.views.path);
    app.engine(config.server.views.extension, engines[config.server.views.compileWith]);
    app.set('view engine', config.server.views.extension);
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.compress());
    app.use(config.server.base, app.router);
    return app.use(express["static"](config.watch.compiledDir));
  });
  app.configure('development', function() {
    return app.use(express.errorHandler());
  });
  app.get('/', routes.index(config));
  return callback(server);
};
