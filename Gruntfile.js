module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist']
  });

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('remove', ['clean']);
};
