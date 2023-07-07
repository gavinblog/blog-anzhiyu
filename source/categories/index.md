---
title: 非学无以广才，非志无以成学
date: 2023-04-13 13:21:48

aside: true

# 是否显示顶部图片
top_img: "/imgs/default-cover.webp"
---

## 分类统计

<div id="categories-chart" data-parent="true" style="height: 300px; padding: 10px;"></div>

***

<div class="gallery-group-main">
 {% galleryGroup Hexo Hexo学习、教程、魔改 '/categories/Hexo/' /imgs/avatar.webp %}
 {% galleryGroup 笔记 记录一些常用的想法和学习过程 '/categories/notes/' /imgs/default-cover.webp %}
 {% galleryGroup AI AI,人工智能数据大模型相关内容 '/categories/ai/' /imgs/default-cover.webp %}
 {% galleryGroup 文章 所有文章 '/archives/' /imgs/avatar.webp %}
</div>

***

<style>
  #libCategories .card-wrap:hover .card-info:after {
    width: 300%;
  }
</style>

<link rel="stylesheet" type="text/css" href="https://npm.elemecdn.com/js-heo@1.0.11/3dCard/no3d.css" >

<div id='libCategories'>
<div id="lib-cards" class="container">

<a href='javascript:void(0);' onClick='pjax.loadUrl("/categories/notes/")' >
<card data-image="/imgs/t1.webp">
<h1 slot="header">笔记</h1>
<p slot="content">日常笔记，好记性不如烂笔头</p>
</card>
</a>

<a href='javascript:void(0);' onClick='pjax.loadUrl("/categories/share/")' >
  <card data-image="/imgs/t2.webp">
    <h1 slot="header">分享</h1>
    <p slot="content">这里分享我用过的软件，资源，和好用的插件。</p>
  </card>
</a>

<a href='javascript:void(0);' onClick='pjax.loadUrl("/categories/ai/")' >
  <card data-image="/imgs/t2.webp">
    <h1 slot="header">AI</h1>
    <p slot="content">AI人工智能相关都在这里。</p>
  </card>
</a>

<a href='javascript:void(0);' onClick='pjax.loadUrl("/archives/")' >
  <card data-image="/imgs/t1.webp">
    <h1 slot="header">All</h1>
    <p slot="content">所有文章</p>
  </card>
</a>

</div>
</div>

<script src='https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/2.6.14/vue.min.js' data-pjax></script>
<script type="text/javascript" src="https://cdn1.tianli0.top/npm/js-heo@1.0.11/3dCard/no3d.js" data-pjax></script>

