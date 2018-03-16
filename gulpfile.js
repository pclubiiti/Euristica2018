var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var minifyJs = require('gulp-minify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function () {
  return gulp.src('assets/css/main.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('js', function () {
  return gulp.src('assets/js/indexData.js')
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', ['css', 'js']);

gulp.task("watch", ['default'], () => {
  gulp.watch(["assets/**"], ['default']);
})