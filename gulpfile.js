var gulp = require('gulp');
var gutil = require("gulp-util");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack');

var loadPaths = require('mojular/sass-paths')([
  require('mojular-govuk-elements/package.json'),
  require('mojular-moj-elements/package.json')
]);

var paths = {
  src: 'static-src/',
  dest: 'static/',
  styles: 'static-src/sass/**/*.scss',
  images: 'node_modules/mojular-govuk-elements/images/*'
};

gulp.task('sass', function() {
  gulp.src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(sass({ includePaths: loadPaths }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest + 'css/'));
});

gulp.task('scripts', function(callback) {
  webpack(require('./webpack.config.js')).run(function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      modules: false,
      chunkModules: false
    }));
    callback();
  });
});

gulp.task('images', function() {
  gulp.src(paths.images)
    .pipe(gulp.dest(paths.dest + 'images/'));
});

gulp.task('build', ['sass', 'images', 'scripts']);
gulp.task('default', ['build']);
