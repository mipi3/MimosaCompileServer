///<reference path='./express.d.ts' />
///<reference path='./mimosa.d.ts' />

import http = module('http');
import express = module('express');
import routes = module('./routes/index');
import mimosa = module('mimosa');

export function startServer(config: mimosa.IConfig, callback: (server: http.Server) => void) {
	var app = express.createServer();

	var server = app.listen(config.server.port, () => {});

	app.configure(() => {
		app.set('port', config.server.port);

		app.set('views', config.server.views.path);
	    //app.engine(config.server.views.extension, engines[config.server.views.compileWith]
	    app.set('view engine', config.server.views.extension);
	    app.use(express.favicon());
	    app.use(express.bodyParser());
	    app.use(express.methodOverride());
	    app.use(express.compress());
	    app.use(config.server.base, app.router);
	    app.use(express.static(config.watch.compiledDir));
	});

	app.configure('development', () => {
		app.use(express.errorHandler());
	});

	app.get('/', routes.index(config));

	callback(server);
}