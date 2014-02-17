module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.initConfig ({
		uglify: {
			my_target: {
				files: {
					'_/js/script.js': ['_/components/js/script.js']
					// '_/js/script.js': ['_/components/js/*.js'] <<this would uglify all js files
				} //files
			} //my_target
		} //uglify
	}) // initConfig
} //exports
