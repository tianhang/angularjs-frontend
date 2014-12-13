var connect = require('connect');
var gulp = require('gulp');
var http = require('http');
var livereload = require('connect-livereload');
var prism = require('connect-prism');
var refresh = require('gulp-livereload');
var serveStatic = require('serve-static');

gulp.task('server', function () {
    var app = connect();

    app.use(livereload());
    app.use(prism.middleware);
    app.use(serveStatic('app'));

    http
        .createServer(app)
        .listen(8000)
        .on('listening', function () {
            console.log('Connect server listening on http://localhost:8000');
        });

    refresh.listen();

    gulp.watch(['app/index.html', 'app/src/**/*']).on('change', refresh.changed);
});
