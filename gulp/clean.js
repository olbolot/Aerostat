'use strict'

var gulp = require('gulp'),
	del = require('del'),
	config = require('./config');

gulp.task('clean', function(){
	del('./dist/*');
});