var gulp = require('gulp');
var sass = require('gulp-saas');

gulp.task('saas', function()
{
gulp.src('*.scss')
.pipe(sass())
.pipe(gulp.dest(function (f)
{

    return f.base;
}))
}); 

gulp.task('default',['sass'],function(){
gulp.watch('*scss',['sass']);
})