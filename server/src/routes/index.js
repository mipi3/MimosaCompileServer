
function index(config) {
    // In the event plain html pages are being used, need to
    // switch to different page for optimized view
    var name = config.isOptimize && config.server.views.html ? 'index-optimize' : 'index';
    var options = {
        reload: config.liveReload.enabled,
        optimize: config.isOptimize != null ? config.isOptimize : false,
        cachebust: process.env.NODE_ENV !== 'production' ? '?b=' + ((new Date()).getTime()) : ''
    };
    return function (req, res) {
        res.render(name, options);
    };
}
exports.index = index;
