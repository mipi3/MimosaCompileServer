MimosaCompileServer
===================

An example setup for compiling node server code in addition to client code.

* Open two terminal windows
* In first, navigate to `server` directory and run `mimosa watch`
* In second, navigate to `client` directory and run `mimosa watch -s`

Note: Until Mimosa `0.11.1` is published with fix to pathing for the `mimosa-server` module, the `client/mimosa-config.coffee` will need to be edited so that the `server.views.path` will need to be an absolute path to function correctly.  As of `0.11.0` a relative path for `server.views.path` is relative to the root of the project containing the setting.  But it should be relative to the path of the actual server, or `server.path`.