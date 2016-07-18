var gulp = require('gulp');
var browserSync = require('browser-sync');
var plug = require('gulp-load-plugins')();

var log = plug.util.log;
var port = 3010;

gulp.task('help', plug.taskListing);

/**
 * serve the dev environment
 */
gulp.task('serve-dev', function() {
  serve();
});

function serve() {
  var options = {
    script: 'server/server.js',
    delayTime: 1,
    ext: 'html js',
    env: {'PORT': port},
    watch: ['./server/']
  };

  return plug.nodemon(options)
    .on('start', function() {
      startBrowserSync();
    })
    .on('restart', function() {
      log('restarted browser-sync!');
      setTimeout(function () {
        browserSync.reload({stream: false});
      }, 1000);
    });
}

/**
 * Start BrowserSync
 */
function startBrowserSync() {
  if (browserSync.active) {
    return;
  }

  log('Starting BrowserSync');
  browserSync({
    proxy: 'localhost:' + port,
    port: 3000,
    files: ['./client/app/**/*.*'],
    ghostMode: {
      clicks: true,
      location: false,
      forms: true,
      scroll: true
    },
    logLevel: 'debug',
    logPrefix: 'demo',
    notify: true,
    reloadDelay: 1000
  });
}