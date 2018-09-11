const gulp = require("gulp");
const sass = require('gulp-sass');

gulp.task("message", () => {
    console.log("gulp is running");
})

gulp.task("sass", () => {
    gulp.src("./src/sass/App.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest('src'));
})

gulp.task("default", ["sass"]);

gulp.task("watch", () => {
    gulp.watch('./src/sass/*.scss', ["sass"])
})