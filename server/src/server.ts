///<reference path='./d/express.d.ts' />
///<reference path='./d/mimosa.d.ts' />
///<reference path='./d/consolidate.d.ts' />

import engines = module('consolidate');
import express = module('express');
import http    = module('http');
import mimosa  = module('mimosa');
import routes  = module('./routes/index');

export function startServer(config: mimosa.IConfig, callback: (server: http.Server) => void) {
  var app = express.createServer();

  var server = app.listen(config.server.port, () => {
      console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
    });

  app.configure(() => {
    app.engine(config.server.views.extension, engines[config.server.views.compileWith]);
    app.set('port', config.server.port);
    app.set('view engine', config.server.views.extension);
    app.set('views', config.server.views.path);

    app.use(config.server.base, app.router);
    app.use(express.bodyParser());
    app.use(express.compress());
    app.use(express.favicon());
    app.use(express.methodOverride());
    app.use(express.static(config.watch.compiledDir));
  });

  app.configure('development', () => {
    app.use(express.errorHandler());
  });

  app.get('/', routes.index(config));

  callback(server);
}