var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sas', function()
{
gulp.src('./**/*.scss')
.pipe(sass()
.on('error', sass.logError)
)
.pipe(gulp.dest('./Styles/'))
}); 

gulp.task('default',['sas'],function(){
gulp.watch('*scss',['sas']);
})