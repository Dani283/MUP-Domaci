var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer'); 
var plumber = require('gulp-plumber'); 
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var open = require('gulp-open');

gulp.task('default', ['compileSass', 'watch','open']);

gulp.task('compileSass', function () {
    return gulp.src('./styles/main.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['> 0%']}))
        .pipe(gulp.dest('./dist/'))
        .pipe(cleanCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch('./styles/**/*.scss', ['compileSass']);
});

gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open());
});