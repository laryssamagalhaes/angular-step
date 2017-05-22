var gulp = require('gulp');

gulp.task('copyapi', function () {
  return gulp.src('./app/fakeApi/*.*')
    .pipe(gulp.dest('./build/fakeApi'));
});
