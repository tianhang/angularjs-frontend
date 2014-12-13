var gulp = require('gulp');
var karma = require('karma').server;
var karmaConf = process.cwd() + '/karma.conf.js';
var spawn = require('child_process').spawn;

gulp.task('test:single', function () {
    karma.start({
        singleRun: true,
        configFile: karmaConf
    });
});

gulp.task('test', function () {
    karma.start({
        configFile: karmaConf
    });
});
