exports.config =
  minMimosaVersion: '0.11.1'
  server:
    path: '../server/lib/server.js'
    views:
      path: '../views'
  liveReload:
    additionalDirs:['../server/views']