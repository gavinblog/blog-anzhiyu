---
title: Git常用命令
subtitle: "记录经常使用到git命令，以便查用"
date: 2023-04-17T14:45:50+08:00
author: geekswg
# weight: 0
description: "记录经常使用到git命令，以便查用"
keywords: [""] #关键词

tags: ["git","笔记"]
categories: ["notes"]
# 转载文章设置
# repost:
#   enable: true
#   url: ""
featuredImage: "/images/posts/featured-image-preview.jpg"

ai:
  - Git 是一个分布式版本控制系统，用于跟踪文件和代码的更改。经常用来管理代码，方便查阅，版本控制，合作开发，代码审阅。记录经常使用到git命令，以便查用.
  - 由人工Geek ChatGPT生成摘要内容。
---
Git 是一个分布式版本控制系统，用于跟踪文件和代码的更改。经常用来管理代码，方便查阅，版本控制，合作开发，代码审阅。
记录经常使用到git命令，以便查用.
<!--more-->

## 配置相关

```bash
# 设置默认主分支名称 为main
git config --global init.defaultBranch main 

#配置 http.sslVerify 为 false, 如下：
git config --global http.sslVerify false

```

## 快速上手

``` bash
# 快速开始命令
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/geekswg/test.git
git push -u origin main
```

## 子模块相关

> Git 子模块是 Git 仓库中嵌套的另一个 Git 仓库，它允许你将一个 Git 仓库作为另一个 Git 仓库的一个子目录，方便管理多个子项目的代码。

```bash
# 初始化git ，使用git子模块 添加主题
git init
# 添加子模块
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
# 更新同步子模块
git submodule update --remote --merge

# 自动克隆子模块 在执行 git clone 时加上 --recursive 参数
git clone --recursive https://github.com/example/example.git
# 如果克隆的项目包含子模块，使用下面方法更新下载子模块
git submodule update --init

# Git 子模块相关的命令：
git submodule add <repository> <path>：将一个 Git 仓库添加为子模块。

git submodule init：初始化子模块，将 .gitmodules 配置文件中列出的子模块拉取到本地。

git submodule update：更新子模块，将子模块更新到最新的 commit。

git submodule foreach <command>：对每个子模块执行命令。

git submodule status：查看子模块的状态，包括子模块的 commit ID 和是否有未提交的修改。

git submodule sync：同步子模块的 URL 和路径。

git submodule update --remote：更新子模块到最新的远程分支。

git submodule deinit <submodule>：从父仓库中删除子模块。
```
> 注意，对于子模块的操作需要在父仓库中进行。在进行子模块的操作时，需要切换到子模块所在的目录中进行。

## 由ChatGPT生成
以下是一些常用的 Git 命令：
初始化仓库：创建一个新的 Git 仓库或将现有项目初始化为 Git 仓库。
```bash
git init
```

克隆仓库：将远程仓库克隆到本地。
```
git clone <repository_url>
```

添加文件：将文件添加到暂存区。
```
git add <file_name>
git add .  # 将所有文件添加到暂存区
```

提交更改：将暂存区中的更改提交到本地仓库。
```
git commit -m "Commit message"
```

查看状态：查看文件的更改状态。
```
git status
```

查看日志：查看提交历史。
```
git log
```

检出分支：切换到指定分支。
```
git checkout <branch_name>
```

创建分支：创建一个新的分支。
```
git branch <new_branch_name>
```

合并分支：将指定分支的更改合并到当前分支。
```
git merge <source_branch>
```
