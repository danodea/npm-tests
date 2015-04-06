module.exports = function(grunt) {

	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),  // Must target the npm package file

		// Creat each grunt task (uglify, cssmin, etc)
		uglify: { // Minify JS files
			options: {},
			build: {
				src: 'views/js/dev/main.js',
				dest: 'views/js/build/main.js'
			}
		},	
		cssmin: {  // Minify CSS files
			target: {
				files: [{
					expand: true,  //Enable dynamic expansion
					cwd: 'css',  // Matches src files relative to this path
					src: ['*.css', '!*.min.css'],  // Match all .css files but NOT .min.css files 
					dest: 'css',  // Destination folder, NOT RELATIVE to cwd
					ext: '.min.css' // change extension of css files to .min.css
				}]
			}
		},
		htmlmin: {  // Minify HTML files
			target1: {  // A target.  Can add as many as you want with different options and shit
				options: { // https://github.com/kangax/html-minifier#options-quick-reference
					removeComments: true,
					collapseWhitespace: true,
					minifyCSS: true
				},
				files: {  // Dictionary of files
					'index-min-test.html': 'index.html'  // 'destination: 'source'
				}
			}
		},
		compress: {
			css: {
				options: {
					mode: 'gzip'
				},
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.min.css'],
					dest: 'css/',
					ext: '.min.css.gz'
				}]
			}
		}
	});

	// Load the plugins that provide each task
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-compress');

	// Default task that is performed when you just type 'grunt'
	// They are run in this order, and not the order in the config object
	// Presumably you could make other combined tasks using this same syntax
	grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'compress']);

};