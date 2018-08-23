var gulp = require('gulp');
var uglify=require("gulp-uglify");//创建js混淆压缩 模块
var minify_css =require("gulp-minify-css");　//创建 css混淆压缩模块
var gulp_concat = require('gulp-concat');  //创建 文件合并模块
// gulp.task('default', function() {
//   // 将你的默认的任务代码放在这
// });
gulp.task('task1',function(){
  console.log("task1 done");
});
gulp.task('task2',['task1'],function(){
  console.log("task2 done");
});
gulp.task('task3',function(){
  console.log("task3 done");
});
gulp.task('build',['task1','task2','task3'],function(){
  console.log("build done");
});
