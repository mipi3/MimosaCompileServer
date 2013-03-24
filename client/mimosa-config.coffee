exports.config =
  server:
    path: '../server/lib/server.js'
    views:
      path: '../views' # relative to server.path, not root of client project, make absolute path until Mimosa 0.11.1 is released
  liveReload:
    additionalDirs:['../server/views']