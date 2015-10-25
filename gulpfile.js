var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var changed = require('gulp-changed');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var reload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// copy task
gulp.task('copy', function() {
    return gulp.src([
        'src/*',
        'src/app/**/*',
        'src/assets/**/*',
        'src/attributes/**/*',
        'src/components/**/*',
        'src/config/**/*',
        'src/converters/**/*',
        'src/lib/**/*'], {base: './src'})
        .pipe(changed('dist'))
        .pipe(gulp.dest('dist'));
});

gulp.task('vendor', function() {
    return gulp.src(['src/vendor/**/*'], {base: './src'})
        .pipe(changed('dist'))
        .pipe(gulp.dest('dist'));
});

var tsFiles = [
  'dist/**/*.ts',
  '!dist/vendor/**'
];
gulp.task('ts', ['copy'], function() {
    var tsResult = gulp.src(tsFiles)
        .pipe(sourcemaps.init())
        .pipe(ts({
            emitError: false,
            module: 'commonjs',
            target:'ES5',
            sortOutput: true,
            experimentalDecorators: true
        }));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['ts', 'styles'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        logLevel: 'silent'
    });
    gulp.watch(['dist/**/*.html', 'dist/**/*.css']).on('change', browserSync.reload);
});

gulp.task('styles', function() {
    gulp.src('src/assets/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('watch', function() {
    gulp.watch(['src/**/*.html'], ['copy']);
    gulp.watch(['src/**/*.scss'], ['styles']);
    gulp.watch(['src/**/*.ts'], ['ts']);
});

gulp.task('default', ['vendor','serve', 'watch']);