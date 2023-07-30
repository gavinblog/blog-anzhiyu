---
title: Hexo主题及Anzhiyu常见问题处理
categories: hexo
tags:
  - Hexo
  - Hexo-Theme-Anzhiyu
ai:
  - 记录使用Hexo主题中遇到的常见问题，以及解决方法。【本文摘要由人工-ChatGPT生成】
  - 记录使用Hexo-theme-Anzhiyu中遇到的问题及解决方法。【本文摘要由人工-ChatGPT生成】
abbrlink: 3a28
date: 2023-06-06 16:07:18
updated: 2023-07-07 19:10:10

# 首页轮播图配置: swiper_index, 数字越小越靠前
# 首页卡片配置: top_group_index, 数字越小越靠前
swiper_index: 1
top_group_index: 1

# 文章置顶 数字越大越靠前
sticky: 100
---

<!-- more -->

## 前言

记录使用Hexo-theme-Anzhiyu中遇到的问题及解决方法。
> 遇到问题请先查阅 [Anzhiyu主题文档](https://gavinblog.github.io/anzhiyu-docs/),这里是最快的解决方法，其次搜索``
本站基于 [Hexo-theme-Anzhiyu](https://github.com/anzhiyu-c/hexo-theme-anzhiyu) 主题，未改动主题源码，只增加了自定义css和js。
本博客完全开源仓库地址：[https://github.com/gavinblog/blog-anzhiyu](https://github.com/gavinblog/blog-anzhiyu)

## 音乐馆无法正常播放

### 原因

由于`MetingJs`自带官方api无法正常访问.

### 解决

更换API接口,搜索可用接口或者自建api接口。
在配置文件中`_config.anzhiyu.yml`,修改`meting_api`自定义meting_api

* 自建API: `https://api-meting.geekswg.top/api`,来自[开源仓库](https://github.com/geekswg/vercel-meting-api/)。
* 其他API: `https://api.injahow.cn/meting/`

> Anzhiyu主题使用下面的方法即可：

```yml
    #自定义 meting_api
    # https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r
    meting_api: 'https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r'
```

**注意**：改完后一定要重新`编译`生成静态页面,命令如下。

```bash
hexo cl | hexo g | hexo s
```

> 其他通用解决方法,适用于所有html中引入的，官方文档有说明自定义 [meting_api](https://github.com/metowolf/MetingJS#readme)。

```js
<script>
  // 自定义 meting_api
  var meting_api='https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r';
</script>
```

## 文章加密功能实现

### 插件安装

> 安装命令

```bash
npm install --save hexo-blog-encrypt
```

### 使用方法

> 在文章中的Front matter配置方法

```yml
password: 1234
theme: xray
abstract: 有东西被加密了, 请输入密码查看.
message: 您好, 这里需要密码.
wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
```

## Github-Action自动部署

> 该action实现功能，提交源码到github自动部署生成hexo静态博客到gh-pages分支。
> 可根据自己需求改造aciton，步骤通用

### 实现源码

```yml
# 部署名称随意
name: 自动发布-auto-deploay-hexo
# 触发条件：在 push 到 master 分支后触发
on:
  push:
    branches: 
      - master  # 可以添加多个分支
# 设置时区
env:
  TZ: Asia/Shanghai

# 任务
jobs:
  blog-deploy:
  
    name: Hexo blog build & deploy

    runs-on: ubuntu-latest # 使用最新的 Ubuntu 系统作为编译部署的环境
    
    steps:
      - name: Checkout codes
        uses: actions/checkout@v3
        with:
          submodules: true # 加载子模块，避免初始化过程中的额外加载。

      - name: Setup node
        # 设置 node.js 环境
        uses: actions/setup-node@v1
        with:
          node-version: '16.x'

      # 下载网站源码
      - name: Cache node modules
        # 设置包缓存目录，避免每次下载
        uses: actions/cache@v1
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}

      # 安装依赖
      - name: Install hexo dependencies
        # 下载 hexo-cli 脚手架及相关安装包
        # hexo-offline pwa 依赖
        # hexo-abbrlink 文章短链接
        # hexo-blog-encrypt 文章加密插件
        run: |
          npm install -g hexo-cli
          npm install --no-fund
          npm install hexo-renderer-pug hexo-renderer-stylus --save
          npm install hexo-generator-search --save
          npm install hexo-abbrlink --save
          npm install hexo-offline --save
          npm install --save hexo-blog-encrypt
          npm ls --depth 0

      # hexo 编译生成网站
      - name: Generate files
        # 编译 markdown 文件
        run: |
          hexo clean
          hexo generate

      # 自动发布到当前仓库的gh-pages分支，如需部署到其它仓库的，参考下面文档修改配置即可
      # 更多高级用法查看文档，https://github.com/peaceiris/actions-gh-pages
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          # 1.如何生成 github_token，github主页,Settings / Developer settings / Personal access tokens (classic)
          # 2.github_token 在 仓库 Settings,Actions secrets and variables,设置
          # github_token: ${{ secrets.ACCESS_TOKEN }} 无需自定义 
          # GITHUB_TOKEN secret to authenticate in your workflow. So, you can start to deploy immediately without any configuration.
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public

          # Deploy to external repository external_repository
          # 发布到其他仓库的配置，注意必须使用deploy_key，获取和设置方法同上。
          #deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          #external_repository: username/external-repository
          #publish_branch: your-branch  # default: gh-pages
          #publish_dir: ./public

          # 以下配置可忽略，测试功能，设置提交信息相关配置
          user_name: 'github-actions[bot]'
          user_email: 'github-actions[bot]@users.noreply.github.com'
          commit_message: ${{ github.event.head_commit.message }}
          #full_commit_message: ${{ github.event.head_commit.message }}
          tag_name: ${{ steps.prepare_tag.outputs.DEPLOY_TAG_NAME }}
          tag_message: 'Deployment ${{ github.ref_name }}'


```

## 转载文章配置

> 在文章的头部Front-matter中配置以下信息

```yml
# 文章版权 Front-matter配置
#copyright: true
#copyright_author: Cusor
#copyright_author_href: https://www.cursor.so/ 
#copyright_url: https://www.cursor.so/
#copyright_info: 文章转载于[Cusor](https://www.cursor.so/)
```

## 持续更新中~~~

> 遇到常见问题记录更新中。
