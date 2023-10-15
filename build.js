import fs from "fs";
import browserify from "browserify";
import babelify from "babelify";

browserify({ debug: false, extensions: [".js"] })
  .transform(babelify, {"compact": true, "global": "true" })
  .require("./App.js", { entry: true })
  .bundle()
  .on("error", function (err) { console.log("Error: " + err.message); })
  .pipe(fs.createWriteStream("bundle.js"));
