'use strict'

export default function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      standard: {
        options: {
          fix: true
        },
        app: {
          src: [
            '{,lib/,tasks/}*.js'
          ]
        }
      },
      build: {
        src: 'src/factorial.js',
        dest: 'build/factorial.min.js'
      }
    }
  })

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-standard')

  // Default task(s).
  grunt.registerTask('default', ['standard', 'uglify'])
}
