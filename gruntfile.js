/*

	//TODO[X]: How much time every individual task required to execute?

	//TODO[X]: Load grunt module.

	//TODO[X]: Register custom grunt task.

*/

module.exports = function (grunt) {

	'use strict';

	require('time-grunt')(grunt);

	require('load-grunt-tasks')(grunt);

	require('load-grunt-config')(grunt);

};