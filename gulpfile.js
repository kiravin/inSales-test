'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
 
gulp.task('sass', function () {
  gulp.src('./app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/style/'));
});

gulp.task('useref', function(){
  return gulp.src('./app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Сжимаем, только если это CSS-файл
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('images', function(){
  return gulp.src('./app/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Кэширование изображений, которые проходили через imagemin
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('./dist/img'))
});
