var gulp = require('gulp'), // require gulp (duh)
	argv = require('yargs').argv, // yargs is used to take arguments on tasks
	browserSync = require('browser-sync'), // like livereload but better
	gulpLoadPlugins = require('gulp-load-plugins'), // load all gulp plugins in npm_modules
	plg = gulpLoadPlugins(); // plugins are now useable via the plg object (e.g. plg.concat)

// Build
	// gulp.task('styles:hintcss', function() {
	// 	// move hint.css from bower_components & rename
	// 	return gulp.src(['./bower_components/hint.css/hint.min.css'])
	// 		.pipe(plg.plumber())
	// 		.pipe(plg.concat('hint.css'))
	// 		.pipe(gulp.dest('./styles/e/'));
	// });

	gulp.task('styles:lib', function() {
		// Libraries
		var source = ['./styles/bootstrap-sass.scss']; // put your SCSS library files here
		if (argv.production) { // run if --production flag is present
			return gulp.src(source)
				.pipe(plg.plumber())
				.pipe(plg.sass({
					outputStyle: 'compressed'
				}))
				.pipe(plg.concat('lib.css'))
				.pipe(gulp.dest('./styles/e/'));
		} else { // run if --production is not present
			return gulp.src(source)
				.pipe(plg.plumber())
				.pipe(plg.sourcemaps.init())
				.pipe(plg.sass({
					outputStyle: 'compressed'
				}))
				.pipe(plg.sourcemaps.write())
				.pipe(plg.concat('lib.css'))
				.pipe(gulp.dest('./styles/e/'));
		}
	});

	gulp.task('styles:main', function() {
		// Your CSS
		var source = ['./styles/main.scss']; // these SCSS files will be concatnated into main.css
		if (argv.production) { // run if --production flag is present
			return gulp.src(source)
				.pipe(plg.plumber())
				.pipe(plg.sass({
					outputStyle: 'compressed'
				}))
				.pipe(plg.concat('main.css'))
				.pipe(gulp.dest('./styles/e/'));
		} else { // run if --production flag is not present
			return gulp.src(source)
				.pipe(plg.plumber())
				.pipe(plg.sourcemaps.init())
				.pipe(plg.sass({
					outputStyle: 'compressed'
				}))
				.pipe(plg.sourcemaps.write())
				.pipe(plg.concat('main.css'))
				.pipe(gulp.dest('./styles/e/'))
				.pipe(browserSync.reload({stream: true}));
		}
	});

	gulp.task('styles', ['styles:main']); // build styles without libraries

	gulp.task('scripts:html5shiv', function() {
		// move html5shiv from bower_components & rename
		return gulp.src(['./bower_components/html5shiv/dist/html5shiv-printshiv.min.js'])
			.pipe(plg.plumber())
			.pipe(plg.concat('html5shiv.js'))
			.pipe(gulp.dest('./scripts/e/'));
	});

	gulp.task('scripts:lib', function() {
		// Libraries
		var source = ['./bower_components/']; // put your JS library files here
		if (argv.production) { // run if --production flag is present
			return gulp.src(source)
				.pipe(plg.plumber())
				.pipe(plg.concat('lib.js'))
				.pipe(plg.uglify({
					mangle: false,
					output: {
						comments: true
					}
				}))
				.pipe(gulp.dest('./scripts/e/'));
		} else { // run if --production flag is not present
			return gulp.src(source)
				.pipe(plg.plumber())
				.pipe(plg.sourcemaps.init())
				.pipe(plg.concat('lib.js'))
				.pipe(plg.sourcemaps.write())
				.pipe(gulp.dest('./scripts/e/'));
		}
	});

	gulp.task('scripts:main', function() {
		// Your JS
		var source = ['./scripts/main.js']; // these JS files will be concatnated into main.js
		if (argv.production) { // run if --production flag is present
			return gulp.src(['./scripts/main.js'])
				.pipe(plg.plumber())
				.pipe(plg.babel())
				.pipe(plg.concat('main.js'))
				.pipe(plg.uglify())
				.pipe(gulp.dest('./scripts/e/'));
		} else { // run if --production flag is not present
			return gulp.src(['./scripts/main.js'])
				.pipe(plg.plumber())
				.pipe(plg.sourcemaps.init())
				.pipe(plg.babel())
				.pipe(plg.concat('main.js'))
				.pipe(plg.uglify())
				.pipe(plg.sourcemaps.write())
				.pipe(gulp.dest('./scripts/e/'))
				.pipe(browserSync.reload({stream: true}));
		}
	});

	gulp.task('scripts', ['scripts:main']); // build scripts without libraries

// browserSync
	gulp.task('serve', function() {
		gulp.watch(['./**/*.html'], browserSync.reload);
		gulp.watch(['./styles/**.scss', '!./styles/e/**'], ['styles']);
		gulp.watch(['./scripts/**.js', '!./scripts/e/**'], ['scripts']);

		return browserSync({
			server: {
				baseDir: './',
				directory: true
			},
			logPrefix: 'BrowserSync',
			reloadDelay: 2000,
			tunnel: false,
			open: false
		});
	});

// Watch
	gulp.task('watch', function() {
		gulp.watch(['./styles/**.scss', '!./styles/e/**'], ['styles']);
		gulp.watch(['./scripts/**.js', '!./scripts/e/**'], ['scripts']);
	});

// run all tasks minus watch & serve
	gulp.task('full', [ 'styles:lib', 'styles', 'scripts:html5shiv', 'scripts:lib', 'scripts']);
// alias of 'full'
	gulp.task('init', ['full']);

// Default (build styles & scripts minus the Libraries)
	gulp.task('default', ['styles', 'scripts']);
