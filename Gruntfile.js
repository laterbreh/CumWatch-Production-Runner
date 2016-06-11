module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
    	           src: [
    	                 'css/*'
    	                ],
    	            dest: 'combined.css'
    	        },
    	        js : {
    	            src : [
    	                'js/**/*.js',
                        '!js/Whatever' //Replace this
    	            ],
    	            dest : 'combined.js'
	        }
    	},
        uglify: {
            js: {
                files: {
                    'combined.js': ['combined.js']
                }
            }
        },
       watch: {
          files: ['css/*', 'js/**/*'],
          tasks: ['concat', 'uglify']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks("grunt-remove-logging");
    grunt.registerTask('default', [ 'concat:css', 'concat:js', 'uglify:js' ]);
    
};