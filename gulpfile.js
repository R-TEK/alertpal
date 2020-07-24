/**
 * Gulp File
 */

// Defining require dependencies
const gulp = require('gulp');
const concatJS = require('gulp-concat');
const uglifyJS = require('gulp-uglify-es').default;
const uglifyCSS = require('gulp-uglifycss');
const fileInclude = require('gulp-file-include');

// Include the HTML version of the README markdown in the getting started html file
gulp.task('productionMarkdowns', async function () {
	gulp.src('src/html/get-started.html', { allowEmpty: true })
		.pipe(
			fileInclude({
				prefix: '@@',
				basepath: '@file'
			})
		)
		.pipe(gulp.dest('./'));
});

// Include the JSDoc HTML in the documentation documentation file
gulp.task('productionDocs', async function () {
	gulp.src('src/html/documentation.html', { allowEmpty: true })
		.pipe(
			fileInclude({
				prefix: '@@',
				basepath: '@file'
			})
		)
		.pipe(gulp.dest('./'));
});

// Moving HTML files to build
gulp.task('productionMarkups', async function () {
	gulp.src('src/html/index.html').pipe(gulp.dest('./'));
});

// Moving, concatenating and minifying library styles (.css) files
gulp.task('productionLibrariesCSS', async function () {
	gulp.src('src/lib/*.css').pipe(concatJS('lib.css')).pipe(uglifyCSS()).pipe(gulp.dest('dist'));
});

// Moving, concatenating and minifying markdown styles (.css) files
gulp.task('productionMarkdownsCSS', async function () {
	gulp.src('src/markdown/*.css')
		.pipe(concatJS('markdown.css'))
		.pipe(uglifyCSS())
		.pipe(gulp.dest('dist'));
});

// Moving, concatenating and minifying docs styles (.css) files
gulp.task('productionDocsCSS', async function () {
	gulp.src('src/docs/*.css').pipe(concatJS('docs.css')).pipe(uglifyCSS()).pipe(gulp.dest('dist'));
});

// Moving, concatenating and minifying my own styles (.css) files
gulp.task('productionStyles', async function () {
	gulp.src('src/css/*.css').pipe(uglifyCSS()).pipe(gulp.dest('dist'));
});

// Moving, concatenating and minifying library scripts (.js) files
gulp.task('productionLibrariesJS', async function () {
	gulp.src(['src/lib/jquery.js', 'src/lib/*.js'])
		.pipe(concatJS('lib.js'))
		.pipe(uglifyJS())
		.pipe(gulp.dest('dist'));
});

// Moving, concatenating and minifying markdown scripts (.js) files
gulp.task('productionMarkdownsJS', async function () {
	gulp.src('src/markdown/*.js')
		.pipe(concatJS('markdown.js'))
		.pipe(uglifyJS())
		.pipe(gulp.dest('dist'));
});

// Moving, concatenating and minifying docs scripts (.js) files
gulp.task('productionDocsJS', async function () {
	gulp.src('src/docs/*.js').pipe(concatJS('docs.js')).pipe(uglifyJS()).pipe(gulp.dest('dist'));
});

// Moving, concatenating and minifying my own scripts (.js) files
gulp.task('productionScripts', async function () {
	gulp.src('src/js/*.js').pipe(uglifyJS()).pipe(gulp.dest('dist'));
});

// Watch edited files to update the website
gulp.task('watch', function () {
	gulp.watch('src/html/*.html', gulp.series('productionMarkdowns'));
	gulp.watch('src/html/*.html', gulp.series('productionDocs'));
	gulp.watch('src/html/*.html', gulp.series('productionMarkups'));
	gulp.watch('src/lib/*.css', gulp.series('productionLibrariesCSS'));
	gulp.watch('src/markdown/*.css', gulp.series('productionMarkdownsCSS'));
	gulp.watch('src/docs/*.css', gulp.series('productionDocsCSS'));
	gulp.watch('src/css/*.css', gulp.series('productionStyles'));
	gulp.watch('src/lib/*.js', gulp.series('productionLibrariesJS'));
	gulp.watch('src/markdown/*.js', gulp.series('productionMarkdownsJS'));
	gulp.watch('src/docs/*.js', gulp.series('productionDocsJS'));
	gulp.watch('src/js/*.js', gulp.series('productionScripts'));
});

// Combining multiple tasks into one
gulp.task(
	'productionSite',
	gulp.series(
		'productionMarkdowns',
		'productionDocs',
		'productionMarkups',
		'productionLibrariesCSS',
		'productionMarkdownsCSS',
		'productionDocsCSS',
		'productionStyles',
		'productionLibrariesJS',
		'productionMarkdownsJS',
		'productionDocsJS',
		'productionScripts'
	)
);
