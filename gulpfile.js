// includes
var gulp = require('gulp');
var zip = require('gulp-zip');
var connect = require ('gulp-connect');



// the base webserver
gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: false
    });
});


// small zip task tp prepare the game zip for upload to Ludei/Coccoon.js
gulp.task('preparezip-completed', function () {
    return gulp.src(['./completed-project/**/*'], { base: __dirname + "/completed-project" })
        .pipe(zip('game.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('preparezip-working', function () {
    return gulp.src(['./working-project/**/*'], { base: __dirname + "/working-project" })
        .pipe(zip('game.zip'))
        .pipe(gulp.dest('./'));
});


// by default gulp, run the connect server
gulp.task('default', ['connect']);