module.exports = function(grunt) {

	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {},
			build: {
				src: 'views/js/dev/main.js',
				dest: 'views/js/build/main.js'
			}
		}
	});

	// Load the plugin that provides the "uglify" task
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task
	grunt.registerTask('default', ['uglify']);

};