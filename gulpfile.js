const gulp = require('gulp');
const sass = require('gulp-sass');
const bulkSass = require('gulp-sass-bulk-import');

gulp.task('sass', function(){
  return gulp.src('src/styles/index.scss')
    .pipe(bulkSass())
    .pipe(sass({
        includePaths: ['src/styles/sass']
    }))
    .pipe(sass())
    .pipe(gulp.dest('src/styles/dist/'))
});

gulp.task('watch', function() {
  gulp.watch('src/styles/_partials/**/**/*.scss', gulp.series('sass'));
});
