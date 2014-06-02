var gulp = require('gulp');
var stylus = require('gulp-stylus');

var styl = 'stylus/**/*.styl';

gulp.task('default', function () {
    gulp.src(styl)
        .pipe(stylus())
        .pipe(gulp.dest('dist'));
});
