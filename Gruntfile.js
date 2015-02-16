module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          optimization: 2
        },
        files: {
          "css/button-groups.css": "less/button-groups.less",
          "css/button-groups.movistar.css": "less/movistar.less",
          "css/button-groups.o2.css": "less/o2.less",
          "css/button-groups.vivo.css": "less/vivo.less"
        }
      },
      production: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/button-groups.min.css": "less/button-groups.less",
          "css/button-groups.movistar.min.css": "less/movistar.less",
          "css/button-groups.o2.min.css": "less/o2.less",
          "css/button-groups.vivo.min.css": "less/vivo.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
