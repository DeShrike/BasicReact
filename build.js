import fs from "fs";
import browserify from "browserify";
import babelify from "babelify";

//import babel from "@babel/cli";



browserify({ debug: false, extensions: [".jsx", "*.svg"] })
  .transform(babelify, { compact: true, global: true, comments: false, extensions: [".jsx", "*.svg"] })
  .require("./App.jsx", { entry: true })
  .bundle()
  //.on("error", function (err) { console.log("Error: " + err.message); })
  .pipe(fs.createWriteStream("dist/bundle.js"));
