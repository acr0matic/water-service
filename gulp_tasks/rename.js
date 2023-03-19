const gulp = require('gulp');
const rename = require("gulp-rename");
const paths = require('../gulpfile');

const { src, dest } = require('gulp');

/*
- Изменение путей ассетов внутри CSS файла в зависимости от среды разработки
*/

gulp.task('rename', () => src(
  [
    paths.layout.all,
  ])
  .pipe(rename({
    extname: ".php"
  }))
  .pipe(dest(paths.html.dist)));
