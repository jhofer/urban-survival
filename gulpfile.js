var gulp = require('gulp');
var ts = require('gulp-typescript');
var server = require('gulp-express');

gulp.task('scripts', function() {
    return gulp.src('application/**/*.ts')
                       .pipe(ts({
                           declarationFiles: true,
                           noExternalResolve: true
                       })).pipe(gulp.dest('build'));
});


gulp.task('resources', function() {
    return gulp.src('application/**/*.html')
                       .pipe(gulp.dest('build'));
});



gulp.task('default', ['scripts', 'resources']);


gulp.task('server',['scripts', 'resources'],  function() {
    server.run(['build/server.js']);

    gulp.watch('application/**/*.ts', ['scripts','resources', server.run]);
    gulp.watch('build/assets/**/*', [server.notify]);
});