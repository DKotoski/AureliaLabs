var gulp = require("gulp");
var runSequence = require("run-sequence");
var changed = require("gulp-changed");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var paths = require("../paths");
var assign = Object.assign || require("object.assign");
var ts = require("gulp-typescript");

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents "pipe breaking" caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task("build-system", function () {
    return gulp.src([paths.typings, paths.source])
      .pipe(plumber())
      .pipe(changed(paths.output, { extension: ".js" }))
      //.pipe(sourcemaps.init({loadMaps: true}))
      //.pipe(to5(assign({}, compilerOptions, {modules:"system"})))
        .pipe(ts({
            typescript: require("typescript"),
            declarationFiles: false,
            noExternalResolve: true,
            target: "es5",
            module: "amd",
            emitDecoratorMetadata: true
        }))
      //.pipe(sourcemaps.write({includeContent: false, sourceRoot: paths.sourceMapRelativePath }))
      .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task("build-html", function () {
    return gulp.src(paths.html)
      .pipe(changed(paths.output, { extension: ".html" }))
      .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task("build", function (callback) {
    return runSequence(
      "clean",
      ["build-system", "build-html"],
      callback
    );
});
