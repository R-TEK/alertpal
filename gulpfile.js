/*
 * Gulp File
 */

// Importing required dependencies
const gulp = require('gulp');
const clean = require('gulp-rimraf');
const concatJS = require('gulp-concat');
const uglifyJS = require('gulp-uglify-es').default;
const concatCSS = require('gulp-concat-css');
const uglifyCSS = require('gulp-uglifycss');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

/**
 * DEV BUILD
 */

// Moving, concatenating and minifying my own script (.js) files - DEV BUILD
gulp.task('devScripts', async function () {
	gulp.src(['src/js/setup.js', 'src/js/*.js'])
		.pipe(concatJS('alertpal.js'))
		.pipe(gulp.dest('build'));
});

// Compiling SASS and minifying files - DEV BUILD
gulp.task('devSass', async function () {
	gulp.src('src/scss/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('build'));
});

/**
 * PRODUCTION BUILD
 */

// Clearing all files in the ./build directory before making the build - PRODUCTION BUILD
gulp.task('productionClean', async function () {
	gulp.src('./build', { read: false }).pipe(clean());
});

// Moving, concatenating and minifying my own script (.js) files - PRODUCTION BUILD
gulp.task('productionScripts', async function () {
	gulp.src(['src/js/setup.js', 'src/js/*.js'])
		.pipe(concatJS('alertpal.min.js'))
		.pipe(uglifyJS())
		.pipe(gulp.dest('build'));
});

// Compiling SASS and minifying for the light css style file - PRODUCTION BUILD
gulp.task('productionSassLight', async function () {
	gulp.src('src/scss/alertpal_light.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concatCSS('alertpal_light.min.css'))
		.pipe(uglifyCSS())
		.pipe(gulp.dest('build'));
});

// Compiling SASS and minifying for the dark css style file - PRODUCTION BUILD
gulp.task('productionSassDark', async function () {
	gulp.src('src/scss/alertpal_dark.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concatCSS('alertpal_dark.min.css'))
		.pipe(uglifyCSS())
		.pipe(gulp.dest('build'));
});

// Watch the edited file and run gulp script on save
gulp.task('watch', function () {
	gulp.watch('src/js/*.js', gulp.series('devScripts'));
	gulp.watch('src/scss/*.scss', gulp.series('devSass'));
});

// Combining multiple tasks into one build - DEV BUILD
gulp.task('devBuild', gulp.series('devScripts', 'devSass'));

// Combining multiple tasks into one build - PRODUCTION BUILD
gulp.task(
	'productionBuild',
	gulp.series('productionClean', 'productionScripts', 'productionSassLight', 'productionSassDark')
);
