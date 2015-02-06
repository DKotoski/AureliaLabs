var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-6to5');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../6to5-options');
var assign = Object.assign || require('object.assign');
var ts = require('gulp-typescript');

gulp.task('build-system', function () {
    return gulp.src(paths.source)
        .pipe(plumber())
        .pipe(changed(paths.output, { extension: '.js' }))
        .pipe(sourcemaps.init())
        .pipe(ts({ module: "amd", target : "ES5" }))
        //.pipe(to5(assign({}, compilerOptions, {modules:'amd'})))
        .pipe(sourcemaps.write({ includeContent: false, sourceRoot: '/' + paths.root }))
        .pipe(gulp.dest(paths.output));
});

gulp.task('build-html', function () {
    return gulp.src(paths.html)
      .pipe(changed(paths.output, { extension: '.html' }))
      .pipe(gulp.dest(paths.output));
});

gulp.task('build', function (callback) {
    return runSequence(
      'clean',
      ['build-system', 'build-html'],
      callback
    );
});
