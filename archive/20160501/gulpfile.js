
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var server = require('gulp-server-livereload');

var styleFiles = [
        'css/less/main.less'
    ];
var jsFiles = [
		'bower_components/jquery/dist/jquery.min.js',
        'js/src/main.js'
	];



gulp.task('styles', function() {
    gulp.src(styleFiles)
        .pipe(concat('main.css'))
        .pipe(sass())
        .pipe(gulp.dest('css/'))
        .on('error', gutil.log);
});

gulp.task('scripts', function(){
	gulp.src(jsFiles)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js/'))
		.on('error', gutil.log);
});

// gulp.task('webserver', function(){
//     gulp.src('/')
//         .pipe(server({
//             livereload: true
//         }))
//         .on('error', gutil.log);
// });

gulp.task('watch', function(){
    gulp.watch(['css/less/*.less'], ['styles']);
    gulp.watch(['js/src/*.js'], ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);