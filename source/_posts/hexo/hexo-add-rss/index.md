---
title: Hexo添加RSS订阅
categories: hexo
tags:
  - Hexo
  - demo
keywords:
  - geekswg
  - 毕少侠
  - hexo
ai:
  - Hexo中添加RSS订阅教程,【本文摘要由ChatGPT智能生成】
  - 【本文摘要由ChatGPT智能生成】
abbrlink: '526'
date: 2023-06-13 11:36:14
description:
---

## 插件安装

```bash
npm install --save hexo-generator-feed
```

## 配置文件修改

`_config.yml`文件中添加如下配置：

```yml
plugins:
  - hexo-generator-feed
# npm install --save hexo-generator-feed
feed:
  enable: true
  type: rss
  path: rss.xml
  limit: 12
  #content_limit: 1024
  order_by: -date
  icon: /imgs/avatar.webp
```

## 编译测试

如本站 [RSS订阅](/rss.xml)

> `注意` : 本地预览时，可用rss.xml里面的内容可能会出现乱码，但是推送到Github-Pages后不会乱码，本地乱码原因暂时未知。
