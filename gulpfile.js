var gulp = require('gulp');
var tsc = require('gulp-tsc');
var watch = require('gulp-watch');
var newer = require('gulp-newer');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var reload = require('gulp-livereload');

var tsFiles = [
  'src/**/*.ts', 
  '!src/vendor/**'
];

var liveReloadPort = 12345;

gulp.task('default', ['copy', 'styles'], function(){
  gulp
      .src(tsFiles)
        .pipe(newer('dist'))
        .pipe(tsc({ 
            emitError: false,
            module: 'commonjs',
            target:'ES5',
            experimentalDecorators: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
    gulp.src('src/assets/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(reload());
});

gulp.task('watch', ['default'], function () {
    reload.listen({
        port: liveReloadPort
    });
    gulp.watch([
        'src/**/*.ts',
        '!src/vendor/**',
        'src/app/**/*.html',
        'src/components/**/*.html',
        'src/modules/**/views/**/*.html',
        'src/index.html'
      ], ['default']);
    gulp.watch(['src/**/*.scss'], ['styles']);
});

gulp.task('copy', function () {
    gulp
        .src([
            'src/index.html',
            'src/components/**/*.html',
            'src/app/**/*.html',
            'src/vendor/**/*',
            'src/config.js',
            'src/assets/images/**/*',
            'src/assets/fonts/**/*',
            '!src/app.d.ts'
        ], {base: './src'})
        .pipe(newer('dist'))
        .pipe(gulp.dest('dist'))
        .pipe(reload());
});