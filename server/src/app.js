
var express = require('express')
var routes = require('./routes/index')

function startServer(config, callback) {
    var app = express.createServer();
    var server = app.listen(config.server.port, function () {
    });
    app.configure(function () {
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
    app.configure('development', function () {
        app.use(express.errorHandler());
    });
    app.get('/', routes.index(config));
    callback(server);
}
exports.startServer = startServer;
