const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
var concat = require("gulp-concat");
const purgecss = require("gulp-purgecss");
function buildStyles() {
  return src("./Sass/sass/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["./Sass/*.html"] }))
    .pipe(concat("style.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./Sass/css/"));
}

function watchTask() {
  watch(["./Sass/sass/**/*.scss", "./Sass/*.html"], buildStyles);
}
exports.default = series(buildStyles, watchTask);
