---
title: Hexo博客使用gulp插件压缩网站资源
categories: hexo
tags:
  - Hexo
  - 教程
keywords:
  - geekswg
  - 毕少侠
  - hexo
ai:
  - "Hexo博客使用gulp插件压缩网站资源（html、css、js、font）"
abbrlink: 103c
date: 2023-06-30 21:36:59
description:
---

`gulp`能够帮助用户自动压缩静态资源，配合各类下属插件，能够压缩包括css、js、html乃至各类格式的图片文件。（图片文件的压缩往往只能节省几十KB，效果远远不如imagine、tinypng等压缩方式，所以此处不再写使用gulp压缩图片的内容）。

## 安装插件

```bash
#gulp
npm install --global gulp-cli #全局安装gulp指令集
npm install gulp --save #安装gulp插件

# 用gulp-html-minifier-terser可以压缩HTML中的ES6语法
npm install gulp-htmlclean --save-dev
npm install gulp-html-minifier-terser --save-dev

# 压缩css
npm install gulp-clean-css --save-dev
          
# 压缩js
npm install gulp-terser --save-dev
          
# 压缩字体
npm install gulp-fontmin --save-dev
```

## 新建`gulpfile.js`文件

gulp-terser只会直接压缩js代码，所以不存在因为语法变动导致的错误 。事实上，当我们使用jsdelivr的CDN服务时，只需要在css或者js的后缀前添加.min,例如example.js->example.min.js,JsDelivr就会自动使用terser帮我们压缩好代码
在博客根目录下新建`gulpfile.js`文件,内容如下

```js
//用到的各个插件
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-html-minifier-terser');
var htmlclean = require('gulp-htmlclean');
var fontmin = require('gulp-fontmin');
// gulp-tester
var terser = require('gulp-terser');
// 压缩js
gulp.task('compress', async() =>{
  gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
    .pipe(terser())
    .pipe(gulp.dest('./public'))
});
//压缩css
gulp.task('minify-css', () => {
    return gulp.src(['./public/**/*.css'])
        .pipe(cleanCSS({
            compatibility: 'ie11'
        }))
        .pipe(gulp.dest('./public'));
});
//压缩html
gulp.task('minify-html', () => {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true, //清除html注释
            collapseWhitespace: true, //压缩html
            collapseBooleanAttributes: true,
            //省略布尔属性的值，例如：<input checked="true"/> ==> <input />
            removeEmptyAttributes: true,
            //删除所有空格作属性值，例如：<input id="" /> ==> <input />
            removeScriptTypeAttributes: true,
            //删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,
            //删除<style>和<link>的 type="text/css"
            minifyJS: true, //压缩页面 JS
            minifyCSS: true, //压缩页面 CSS
            minifyURLs: true  //压缩页面URL
        }))
        .pipe(gulp.dest('./public'))
});
//压缩字体
function minifyFont(text, cb) {
  gulp
    .src('./public/fonts/*.ttf') //原字体所在目录
    .pipe(fontmin({
      text: text
    }))
    .pipe(gulp.dest('./public/fontsdest/')) //压缩后的输出目录
    .on('end', cb);
}

gulp.task('mini-font', (cb) => {
  var buffers = [];
  gulp
    .src(['./public/**/*.html']) //HTML文件所在目录请根据自身情况修改
    .on('data', function(file) {
      buffers.push(file.contents);
    })
    .on('end', function() {
      var text = Buffer.concat(buffers).toString('utf-8');
      minifyFont(text, cb);
    });
});
// 运行gulp命令时依次执行以下任务
gulp.task('default', gulp.parallel(
  'compress', 'minify-css', 'minify-html','mini-font'
))

```

## 编译预览

```bash
 hexo cl | hexo g | gulp | hexo s
```

> 本文参考：
[使用gulp压缩博客静态资源](https://akilar.top/posts/49b73b87/)
