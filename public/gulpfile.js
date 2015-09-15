'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function () {
  // place code for your default task here
  return gulp.src("*.js").pipe(babel()).pipe(gulp.dest("public"));
});