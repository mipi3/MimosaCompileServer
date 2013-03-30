exports.config =
  modules: ["lint"]
  watch:
    sourceDir: "src"
    compiledDir: "lib"
    javascriptDir: "" # Note self, possible TODO: fix the need to do this?
  coffeescript:
    sourceMap:false
  typescript:
    module: "commonjs"
