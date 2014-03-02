//  Type `npm install` from this directory

module.exports = function(grunt) {
  'strict';

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          // sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'css/styles.css.map',
        },
        files: {
          'css/styles.css': 'less/styles.less',
        },
      },
      minify: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          'css/styles.min.css': 'css/styles.css',
        },
      },
    },

    jshint: {
      src: ['js/*.js'],
    },

    watch: {
      options: {
        livereload: true,
      },
      js: {
        files: ['js/*.js'],
        tasks: ['jshint', 'notify:js'],
      },
      less: {
        files: ['less/*.less'],
        tasks: ['less', 'notify:less'],
      },
      css: {
        files: ['css/*.css'],
      },
    },

    notify: {
      js: {
        options: {
          message: 'JSHint finished, no errors!',
        },
      },
      less: {
        options: {
          message: 'less finished compiling!',
        },
      },
    }

  }); // end json

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  // Default task(s)
  grunt.registerTask('default', ['less', 'watch']);

};