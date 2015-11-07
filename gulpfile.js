var gulp = require('gulp');
var mocha = require('gulp-mocha');
var angularProtractor = require('gulp-angular-protractor');

gulp.task('test', function () {
    return gulp.src('test/**/*.js')
        .pipe(mocha({
            "reporter": "mocha-jenkins-reporter",
            "reporterOptions": {
                "junit_report_name": "Tests",
                "junit_report_path": "test-reports/mocha/report.xml",
                "junit_report_stack": 1
            }
        }));
});

gulp.task('protractor', function (callback) {
    gulp
        .src(['e2e/**/*-spec.js'])
        .pipe(angularProtractor({
            'configFile': 'protractor-conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function (e) {
            console.log(e);
        })
        .on('end', callback);
});

gulp.task('default', ['test', 'protractor']);

