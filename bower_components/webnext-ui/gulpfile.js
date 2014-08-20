var gulp = require('gulp');

var rename = require("gulp-rename");

var sass = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css');
var csslint = require('gulp-csslint');

var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');

gulp.task('build', function() {

	// compile export.scss
	gulp.src('./build/export.scss')
		.pipe(sass({
			style: 'expanded'
		}))
		.pipe(rename('webnext-ui.css'))
		.pipe(gulp.dest('./dist/'))
		.pipe(minifyCSS())
		.pipe(rename('webnext-ui.min.css'))
		.pipe(gulp.dest('./dist/'));

	// compile export.test.scss for csslint
	gulp.src('./build/export.test.scss')
		.pipe(sass({
			style: 'expanded'
		}))
		.pipe(rename('webnext-ui.test.css'))
		.pipe(gulp.dest('./dist/'))

	// minify webnext-ui.css
	// gulp.src('./dist/webnext-ui.css')
	// 	.pipe(minifyCSS())
	// 	.pipe(rename('webnext-ui.min.css'))
	// 	.pipe(gulp.dest('./dist/'));
});

gulp.task('test', function() {

	// run csslint on webnext-ui.css
	gulp.src('./dist/webnext-ui.test.css')
		.pipe(csslint('csslintrc.json'))
		.pipe(csslint.reporter());

	// run jshint
	//gulp.src('./build/main.js')
	//	.pipe(jshint())
	//	.pipe(jshint.reporter(jshintStylish));
});

gulp.task('default', ['build', 'test'], function() {
});