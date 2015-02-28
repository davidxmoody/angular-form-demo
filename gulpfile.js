var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function() {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('css', function() {
  gulp.src('src/css/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', function() {
  gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('build/js'));
});
