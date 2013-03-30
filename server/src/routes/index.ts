///<reference path='../d/express.d.ts' />
///<reference path='../d/mimosa.d.ts' />

import express = module('express');

export function index(config: any): 
  (req: express.ExpressServerRequest, res: express.ExpressServerResponse) => void {

  // In the event plain html pages are being used, need to
  // switch to different page for optimized view
  var name = config.isOptimize && config.server.views.html ? 'index-optimize' : 'index';

  var options = {
    reload:    config.liveReload.enabled,
    optimize:  config.isOptimize != null ? config.isOptimize : false,
    cachebust: process.env.NODE_ENV !== 'production' ? '?b=' + ((new Date()).getTime()) : ''
  };

  return (req: express.ExpressServerRequest, res: express.ExpressServerResponse) => {
    res.render(name, options);
  }
}