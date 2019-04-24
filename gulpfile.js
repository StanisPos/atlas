'use strict';

const gulp = require('gulp');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');

gulp.task('webp', () => {
  return gulp.src('src/assets/img/**/*.{jpg,png}')
    .pipe(webp({
      quality: 80
    }))
    .pipe(gulp.dest('src/assets/image_produciton'))
});

gulp.task('images', () => {
  return gulp.src('src/assets/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('src/assets/image_produciton'))
});

gulp.task('default', gulp.series(
  'webp',
  'images'
))