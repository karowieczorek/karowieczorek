const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

gulp.task('html', function() {
    return gulp.src('src/pages/**/*').pipe(nunjucksRender({
        path: ['src/templates'],
    })
    )
    .pipe(gulp.dest('site'));
});

   gulp.task('styles', function() {
    return gulp.src('src/styles/*.css').pipe(nunjucksRender({
        path: ['src/templates'],
        ext: ".css",
    })
    )
    .pipe(gulp.dest('site/assets/styles/'));
});

gulp.task('js', function() {
    return gulp.src('src/*.js').pipe(nunjucksRender({
        ext: ".js",
    })
    )
    .pipe(gulp.dest('site/'));
});


gulp.task('default', gulp.parallel('html', 'styles', 'js'));