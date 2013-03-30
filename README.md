MimosaCompileServer
===================

An example setup for compiling node server code in addition to client code.

* Open two terminal windows
* Try to build server side first with 'tsc -c server.ts'
* In first, navigate to `server` directory and run `mimosa watch`
* In second, navigate to `client` directory and run `mimosa watch -s`
* Browse to http://localhost:3000