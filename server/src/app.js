///<reference path='./express.d.ts' />
///<reference path='./mimosa.d.ts' />
///<reference path='./consolidate.d.ts' />
var engines = require('consolidate')
var express = require('express')


var routes = require('./routes/index')
function startServer(config, callback) {
    var app = express.createServer();
    var server = app.listen(config.server.port, function () {
        console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
    });
    app.configure(function () {
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
    app.configure('development', function () {
        app.use(express.errorHandler());
    });
    app.get('/', routes.index(config));
    callback(server);
}
exports.startServer = startServer;
