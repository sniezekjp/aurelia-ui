var gulp = require('gulp');
var tsc = require('gulp-tsc');
var watch = require('gulp-watch');
var newer = require('gulp-newer');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var reload = require('gulp-livereload');
var browserSync = require('browser-sync').create();

// copy task
gulp.task('copy', function() {
    gulp.src([
            'src/**/*'
        ], {base: './src'})
        .pipe(newer('dist'))
        .pipe(gulp.dest('dist'));
});

var tsFiles = [
  'dist/**/*.ts',
  '!dist/vendor/**'
];
gulp.task('ts', function() {
    gulp.src(tsFiles, { base: 'dist' })
        .pipe(tsc({
            emitError: false,
            module: 'commonjs',
            target:'ES5',
            sourceMap: true,
            mapRoot: '../',
            sourceRoot: '',
            experimentalDecorators: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['ts', 'styles'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch(['dist/**/*.html', 'dist/**/*.css']).on('change', browserSync.reload);
});

gulp.task('js-watch', ['copy','ts'], browserSync.reload);

gulp.task('styles', function() {
    gulp.src('src/assets/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('watch', function() {
    gulp.watch(['src/**/*.html'], ['copy']);
    gulp.watch(['src/**/*.scss'], ['copy', 'styles']);
    gulp.watch(['src/**/*.ts'], ['js-watch']);
});

gulp.task('default', ['serve', 'watch']);