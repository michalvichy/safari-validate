var gulp = require('gulp');

// Include plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint']);
});

// Default task
gulp.task('default', ['lint', 'watch']);
