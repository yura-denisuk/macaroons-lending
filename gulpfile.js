let gulp = require('gulp');
let less = require('gulp-less');
let path = require('path');
let cssmin = require('gulp-cssmin');
let rename = require('gulp-rename');

exports.less = function () {
    return gulp.src('css/styles.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
};

exports.watch = function () {
    gulp.watch('css/*.less', gulp.series('less'));
};
