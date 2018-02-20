var gulp = require('gulp');
var callback = require('util');
var npmDist = require('gulp-npm-dist');
var ghpages = require('gh-pages');
var gulpSequence = require('gulp-sequence')

// Deploy changes to test-gul-gh-pages
gulp.task('dev', function() {
  return ghpages.publish('dist', {
    branch: 'master',
    repo: 'git@github.com:celine-y/test-gulp-gh-pages.git',
    dotfiles: true,
    message: 'Testing updates to website'
  }, callback);
});

// Deploy changes to celine-y.github.io (prod)
gulp.task('prod', function() {
  return ghpages.publish('dist', {
    branch: 'master',
    repo: 'git@github.com:celine-y/celine-y.github.io.git',
    dotfiles: true,
    message: 'Peach-sunset Updates'
  }, callback);
});

// TODO: fix
// Copy vendor scrolloverflow.min.js
gulp.task('scrollOverFlow',function(){
  return gulp.src([
      './node_modules/fullpage.js/vendors/scrolloverflow.min.js'
  ],  {base: './node_modules'}) 
  .pipe(gulp.dest('./dist/node_modules'));
});
 
// Copy dependencies to ./dist/node_modules/
gulp.task('copy:libs', function() {
  gulp.src(npmDist(), {base:'./node_modules'})
    .pipe(gulp.dest('./dist/node_modules'));
});

// Deploying to dev
gulp.task('deploy:dev',
  gulpSequence('copy:libs', 'scrollOverFlow', 'dev')
);

// Deploying to prod
gulp.task('deploy:prod',
  gulpSequence('copy:libs', 'scrollOverFlow', 'prod')
);