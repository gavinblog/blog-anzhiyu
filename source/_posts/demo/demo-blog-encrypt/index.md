---
title: hexo-blog-encrypt加密测试Demo
categories: demo
tags:
  - 示例
  - demo
  - hexo
  - encrypt
ai:
  - hexo-blog-encrypt demo测试
  - 本文摘要由ChatGPT智能生成。
password: 1234
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.密码提示：1234'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.密码提示：1234'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: '9667'
date: 2023-05-30 03:04:05
---

## 加密插件安装

> 安装命令

```bash
npm install --save hexo-blog-encrypt
```

## 加密使用

> Front matter配置方法

```MD
password: 1234
abstract: 有东西被加密了, 请输入密码查看.
message: 您好, 这里需要密码.
theme: xray
wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.

```

Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)
