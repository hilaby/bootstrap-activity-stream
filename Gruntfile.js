module.exports = function(grunt) {
	grunt.initConfig({
		haml: {
			dev: {
				options: {
					'style': 'expanded',
					'double-quote-attributes': true,
					'escape-html': true
				},
				files: {
					'index.html': 'src/haml/index.haml'
				}
			}
		},
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}
			}
		},
		watch: {
			hamls: {
				files: '**/*.haml',
				tasks: ['haml'],
				options: {
					event: ['changed'],
					livereload: true
				},
			},
			css: {
				files: '**/*.scss',
				tasks: ['compass'],
				options: {
					event: ['changed'],
					livereload: true
				},
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-haml');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['haml','compass','watch']);
};
