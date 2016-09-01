var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('sass', function () {
  var processors = [
    autoprefixer,
    cssnano
  ];
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});


gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("src/scss/*.scss", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
})

gulp.task('default', ['serve']);
