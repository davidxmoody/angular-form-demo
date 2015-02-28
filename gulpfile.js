var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('default', ['html', 'css', 'js', 'watch', 'connect']);

gulp.task('connect', function() {
  connect.server({
    root: 'build'
  });
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/css/**/*.scss', ['css']);
});

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
