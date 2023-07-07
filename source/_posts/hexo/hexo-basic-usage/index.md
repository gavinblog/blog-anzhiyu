---
title: Hexo常用命令
categories: hexo
tags:
  - Hexo
  - demo
ai:
  - Hexo是一款基于Node.js的静态博客生成器，它可以帮助我们快速搭建自己的博客网站。本文将介绍一些常用的Hexo命令，帮助你更好地使用Hexo。
  - >-
    Hexo是一款基于Node.js的静态博客生成器，它可以帮助我们快速搭建自己的博客网站。本文将介绍一些常用的Hexo命令，帮助你更好地使用Hexo。本文摘要由ChatGPT智能生成。
abbrlink: '3e38'
date: 2023-06-04 10:05:09
updated: 2023-07-07 19:10:10
# 首页轮播图配置: swiper_index, 数字越小越靠前
# 首页卡片配置: top_group_index, 数字越小越靠前
swiper_index: 3
top_group_index: 3
---

Hexo 常用命令

Hexo是一款基于Node.js的静态博客生成器，它可以帮助我们快速搭建自己的博客网站。本文将介绍一些常用的Hexo命令，帮助你更好地使用Hexo。

## demo

```bash
# 安装 hexo脚手架
npm install -g hexo-cli

# 初始化站点
hexo init my_blog

# 清楚 clean 生成 generate 运行 server
hexo cl | hexo g | hexo s

## new post 指定目录和标题
hexo new post -p notes/hexo-basic-usage/index "Hexo常用命令"

# 安装与卸载
npm install hexo-blog-encrypt --save
npm uninstall hexo-blog-encrypt --save
```

## 安装Hexo

首先需要安装Node.js和npm,然后通过npm安装Hexo:

```bash
npm install -g hexo-cli
```

## 创建博客网站

使用Hexo创建博客网站非常简单，只需要执行以下命令：

```bash
hexo init my_blog
```

其中，my_blog是你想要创建的博客主题名称。执行完该命令后，Hexo会自动下载主题包并进行安装。

## 写作文章

在Hexo中，可以使用Markdown语法编写文章。首先，在博客根目录下创建一个 _posts 文件夹，然后在该文件夹下创建一个新文件，例如article.md,内容如下：

```markdown
# 标题
正文内容
```

然后执行以下命令即可生成文章：

```bash
hexo g -d _posts/article.md > article.html

## new post 指定目录和标题
hexo new post -p notes/hexo-basic-usage/index "Hexo常用命令"
```

其中，g表示生成整个页面，-d参数指定了生成的文章路径为_posts/article.md。生成完成后，会在当前目录下生成一个名为article.html的文件。

## 发布文章

在完成文章编写后，可以使用以下命令将文章发布到本地：

```bash
hexo server --quiet # 静默模式发布文章
hexo server # 启动默认的发布模式，会弹出浏览器窗口显示发布结果
```

其中，server命令用于启动Hexo服务器，--quiet参数表示静默模式发布文章，不会弹出任何提示信息；而启动默认的发布模式则会弹出浏览器窗口显示发布结果。

## 其他常用命令

除了以上提到的常用命令外，Hexo还有很多其他实用的命令。例如：

- hexo clean:清除博客生成的所有缓存文件；
- hexo generate:重新生成所有页面；
- hexo deploy:将博客部署到远程服务器上。

## 总结

Hexo是一款非常强大的静态博客生成器，通过掌握其常用命令，可以轻松地搭建自己的博客网站。希望本文能够帮助你更好地使用Hexo。
