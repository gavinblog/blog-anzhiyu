---
title: Hexo-theme-Anzhiyu Tag-Plugins Demo
categories: demo
tags:
  - 示例
  - demo
  - Hexo-Theme-Anzhiyu
  - Hexo
  - Tag-Plugins
ai:
  - >-
    Hexo-theme-Anzhiyu标签外挂Demo，Tag-Plugins 是 Hexo 独有的功能，并不是标准的 Markdown 格式。 以下的写法，只适用于
    AnZhiYu 主题，用在其它主题上不会有效果，甚至可能会报错。使用前请留意
  - >-
    Hexo-theme-Anzhiyu标签外挂Demo，标签外挂是 Hexo 独有的功能，并不是标准的 Markdown 格式。 以下的写法，只适用于
    AnZhiYu 主题，用在其它主题上不会有效果，甚至可能会报错。使用前请留意[本文摘要由Geek-人工-ChatGPT智能生成。]
abbrlink: '3071'
date: 2023-05-30 13:04:05
---

[anzhiyu-icon](https://www.iconfont.cn/collections/detail?cid=44481)

> 标签外挂是 Hexo 独有的功能，并不是标准的 Markdown 格式。 以下的写法，只适用于 AnZhiYu 主题，用在其它主题上不会有效果，甚至可能会报错。使用前请留意

## Note (Bootstrap Callout)

{% tabs tab-note %}

<!-- tab 代码@far fa-paper-plane fa-fw fa-sm -->

```html
{% note simple %}默认 提示块标签{% endnote %}
{% note default simple %}default 提示块标签{% endnote %}
{% note primary simple %}primary 提示块标签{% endnote %}
{% note success simple %}success 提示块标签{% endnote %}
{% note info simple %}info 提示块标签{% endnote %}
{% note warning simple %}warning 提示块标签{% endnote %}
{% note danger simple %}danger 提示块标签{% endnote %}
```

<!-- endtab -->

<!-- tab 参数@fa-solid fa-book -->

**This is Tab 2.**

样式 : `simple` `modern` `flat` `disabled` `no-icon`

<!-- endtab -->

<!-- tab 预览@fa-solid fa-book -->

> `simple`样式

{% note simple %}默认 提示块标签{% endnote %}
{% note default simple %}default 提示块标签{% endnote %}
{% note primary simple %}primary 提示块标签{% endnote %}
{% note success simple %}success 提示块标签{% endnote %}
{% note info simple %}info 提示块标签{% endnote %}
{% note warning simple %}warning 提示块标签{% endnote %}
{% note danger simple %}danger 提示块标签{% endnote %}

> `modern`样式
{% note modern %}默认 提示块标签{% endnote %}
{% note default modern %}default 提示块标签{% endnote %}
{% note primary modern %}primary 提示块标签{% endnote %}
{% note success modern %}success 提示块标签{% endnote %}
{% note info modern %}info 提示块标签{% endnote %}
{% note warning modern %}warning 提示块标签{% endnote %}
{% note danger modern %}danger 提示块标签{% endnote %}

<!-- endtab -->

{% endtabs %}

## Gallery 相册图库

{% tabs tab-Gallery %}

<!-- tab 代码@far fa-paper-plane fa-fw fa-sm -->
```html
{% note simple %}默认 提示块标签{% endnote %}
```
<!-- endtab -->

<!-- tab 参数@fa-solid fa-book -->
样式 : `simple` `modern` `flat` `disabled` `no-icon`
<!-- endtab -->

<!-- tab 预览@fa-solid fa-book -->
<!-- endtab -->
{% endtabs %}

## HideToggle

{% tabs tab-hideToggle,3 %}

<!-- tab 代码@far fa-paper-plane fa-fw fa-sm -->
```bash
{% hideToggle Butterfly安装方法 %}
在你的博客根目录里
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
如果想要安装比较新的dev分支，可以
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
{% endhideToggle %}
```
<!-- endtab -->

<!-- tab 参数@fa-solid fa-book -->
样式 : `simple` `modern` `flat` `disabled` `no-icon`
<!-- endtab -->

<!-- tab 预览@fa-solid fa-book -->
{% hideToggle Butterfly安装方法 %}
在你的博客根目录里
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
如果想要安装比较新的dev分支，可以
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
{% endhideToggle %}
<!-- endtab -->
{% endtabs %}

## 分栏 Tabs

{% tabs tab-Tabs,3 %}

<!-- tab 代码@far fa-paper-plane fa-fw fa-sm -->
```html
{% tabs test2, 3 %}

<!-- tab t1@far fa-paper-plane -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->

{% endtabs %}
```
<!-- endtab -->

<!-- tab 参数@fa-solid fa-book -->
样式 : `simple` `modern` `flat` `disabled` `no-icon`
<!-- endtab -->

<!-- tab 预览@fa-solid fa-book -->
{% tabs test2, 3 %}

<!-- tab t1@far fa-paper-plane fa-fw fa-sm -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->

{% endtabs %}
<!-- endtab -->
{% endtabs %}

## demo

{% tabs tab-note %}

<!-- tab 代码@far fa-paper-plane fa-fw fa-sm -->
```html
{% note simple %}默认 提示块标签{% endnote %}
```
<!-- endtab -->

<!-- tab 参数@fa-solid fa-book -->
样式 : `simple` `modern` `flat` `disabled` `no-icon`
<!-- endtab -->

<!-- tab 预览@fa-solid fa-book -->
<!-- endtab -->
{% endtabs %}

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
hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
hexo deploy
```

More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)
