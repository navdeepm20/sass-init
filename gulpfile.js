const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
var concat = require("gulp-concat");

function buildStyles() {
  return src("./Sass/Zui/**/*.scss")
    .pipe(sass())
    .pipe(concat("style.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./Sass/css/"));
}

function watchTask() {
  watch(["./Sass/Zui/**/*.scss"], buildStyles);
}
exports.default = series(buildStyles, watchTask);
