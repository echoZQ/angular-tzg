var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var minifycss = require('gulp-minify-css');
var jade = require('gulp-jade');
var htmlmin = require('gulp-htmlmin');
var less = require('gulp-less');
var watch = require('gulp-watch');

var debug = false;

var paths = {
  less: {
  	src: 'app/less/*.less',
  	dest: 'app/css'
  },
  jade: {
  	src: ['app/jade/**/*.jade', '!app/jade/common/*.jade'],
  	dest: 'app/partials'
  }
};

gulp.task('css', function() {
    var source = paths.less.src;
    var stream = gulp.src(source);
    if (debug) {
        stream = stream.pipe(watch(source));
    }
    return stream
        .pipe(less())
	    .pipe(minifycss())
        .pipe(gulp.dest(paths.less.dest));
});

gulp.task('html', function() {
    var source = paths.jade.src;
    var stream = gulp.src(source);
    if (debug) {
        stream = stream.pipe(watch(source));
    }
    return stream
        .pipe(jade({ pretty: true }))
        .pipe(htmlmin())
        .pipe(gulp.dest(paths.jade.dest));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['css', 'html']);
// Watch the files
gulp.task('debug', function () {
    debug = true;
    gulp.start('default');
    console.log("start watch");
});