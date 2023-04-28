---
title: 我的第一个域名
subtitle: "geekswg.top"
date: 2023-04-13T17:05:47+08:00
author: geekswg
# weight: 0
description: "摘要"
keywords: [""] #关键词

tags: ["笔记","建站"]
categories: ["notes"]
# 转载文章设置
# repost:
#   enable: true
#   url: ""
featuredImage: "/images/posts/featured-image-preview.jpg"

ai:
  - 终于买了我的人生中第一个域名。 [geekswg.top](https://geekswg.top/),用于个人博客使用，花费 $1.88美元，支付宝支付，折合人民币 ￥13.01
  - 由人工Geek ChatGPT生成摘要内容。
---
> 终于买了我的人生中第一个域名。 [geekswg.top](https://geekswg.top/)
> 用于个人博客使用，花费 $1.88美元，支付宝支付，折合人民币 ￥13.01
<!--more-->

前端时间苦于，github自带的[Github Pages](https://geekswg.github.io/) 提供二级域名，经常访问不了，而且速度比较慢。就下决心买了个域名。

## 域名购买

域名购买商 ：[Namesilo](https://www.namesilo.com/)
> Bing搜索了好长时间，选择他的原因。
1. 便宜，相对稳定靠谱，
2. 国外域名，不用备案。
3. 支持支付宝支付方式。

## 域名使用

使用[CloudFlare-DNS域名解析](https://dash.cloudflare.com/b942112d61495edf9c0b0c4d790c4448/add-site)
添加网站，安装指引一步步操作即可。
登录 Namesilo，添加dns记录，绑定成功后，即可使用。

### 子域名管理

Namesilo供应商可支持50个子域名。
使用CloudFlare管理子域名。
在CloudFlare的控制主页，`网站` 选择自己已经绑定的域名，点击 `DNS` ,然后 `添加记录`。
常用的两种类型：
* A     : 用于绑定IP的。
* CNAME : 用于绑定名称的。不过，名称可以是任意大写字母或空格字符的完整子串
绑定步骤主要两个步骤
1. 在CloudFlare DNS中添加CNAME类型记录（这个最常用）
2. 在你需要自定义域名的地方，输入第一给步骤中你生成的子域名，然后按照提示一步步绑定即可成功
3. 成功后需要几分钟更新DNS记录，大概十分钟后，即可正常访问你的子域名了。

如我的子域名：
[hexo.geekswg.top](https://hexo.geekswg.top/) 
[blog.geekswg.top](https://blog.geekswg.top/)

## CloudFlare加速

CloudFlare控制台的pages页面操作简单
传送地址： https://dash.cloudflare.com/b942112d61495edf9c0b0c4d790c4448/pages

## Netlify加速

Netlify加速Github-Pags 操作简单，目前国内可直接访问
传送地址： https://www.netlify.com/

## 图床使用

[Pixc](https://picx.xpoet.cn/)超级好用的免费图床，Github仓库作为存储，CDN加速。
传送地址： https://picx.xpoet.cn/