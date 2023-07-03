---
title: Hexo-留言板全屏弹幕滚动-Twikoo
categories: hexo
tags:
  - Hexo
  - Twikoo
keywords:
  - geekswg
  - 毕少侠
  - hexo
ai:
  - Hexo博客中的留言板添加全屏弹幕滚动教程，直接在需要展示全屏弹幕的md页面中添加代码。
abbrlink: 973c
date: 2023-06-13 11:51:44
description:
---

## 实现代码

直接在需要显示的全屏弹幕页面的`md文件`中直接添加如下代码
只需要修改openBarrage(your-twikoo-server-url)地址。
js全部本地化保存到`source/custom/barrage/`下
> 本博客完全开源：[仓库源码地址](https://github.com/gavinblog/blog-anzhiyu)
```md
<script src="/custom/barrage/jquery_3.6.0_jquery.min.js"></script>
<script src="/custom/barrage/jquery.barrager-1.1.min.js"></script>
<script src="/custom/barrage/barrage-twikoo.js"></script>

<style>
/* 评论弹幕 */
.barrage {
    position: fixed;
    right: -500px;
    display: inline-block;
    width: fit-content;
    z-index: 9999
}
.barrage_box {
    display: flex;
    background-color: rgba(0, 0, 0, .5);
    padding-right: 8px;
    height: 40px;
    border-radius: 25px;
}
.barrage_box .portrait {
    display: inline-block;
    margin-top: 4px;
    margin-left: 4px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
}
.barrage_box .portrait img {
    width: 100%;
    height: 100%;
}
.barrage_box div.p a {
    display: inline-block;
    white-space: nowrap;
    max-width: 25rem;
    margin-right: 2px;
    font-size: 14px;
    line-height: 40px;
    margin-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
}
.barrage_box div.p a:hover {
    text-decoration: underline;
}
</style>

> 欢迎留言

<div class="btn-center">
{% btn 'javascript:openBarrage();',"开启弹幕",anzhiyufont anzhiyu-icon-circle-arrow-right,outline green larger %}
{% btn 'javascript:closeBarrage();',关闭弹幕,anzhiyufont anzhiyu-icon-circle-arrow-right,outline red larger %}
</div>

<div id="loading"></div>

<script>
//location.reload();
let lastUrl = window.location.href || 'xx';
//alert('lastUrl ='+ lastUrl);
if ( lastUrl.indexOf('/guestbook')< 0 ){
    //alert('reload')
    setTimeout(function(){location.reload();},100);
}

window.addEventListener('load', (event) => {
    // twikooEnVid twikoo服务地址获取所有弹幕
    openBarrage('https://twikoo.geekswg.top/');
});
</script>

```

## 预览效果

[我的留言板-全屏弹幕](/guestbook/)

> 已经完善,添加开启和关闭弹幕功能按钮。

> ~~目前已知问题，无法关闭弹幕，别的页面也会一直显示全屏滚动的弹幕。~~


本文参考：
* [弹幕升级版——全屏弹幕](https://blog.leonus.cn/2022/barrage.html)
