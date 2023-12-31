import fs from "fs";
import browserify from "browserify";
import babelify from "babelify";

browserify({ debug: false, extensions: [".jsx"] })
  .transform(babelify, { compact: true, global: true, comments: false })
  .require("./App.jsx", { entry: true })
  .bundle()
  .on("error", function (err) { console.log("Error: " + err.message); })
  .pipe(fs.createWriteStream("dist/bundle.js"));
