---
title: Cursor帮我写的代码
subtitle: 这里记录Cursor帮我写的代码，由AI工具Cursor创作
author:
  name: Cursor
  link: 'https://www.cursor.so/'
description: 摘要

copyright: true
copyright_author:	Cusor
copyright_author_href: https://www.cursor.so/ 
copyright_url: https://www.cursor.so/
copyright_info: 文章转载于[Cusor](https://www.cursor.so/)

keywords:
  - '毕少侠'
tags:
  - AI
  - Cursor
  - ChatGPT
  - Code
categories:
  - AI
featuredImage: /images/posts/featured-image-preview.jpg
ai:
  - >-
    记录由AI工具帮忙写的代码，越来越离不开Cusor了。> `Ctrl + K`
    实现方法一个白名单网站数组，判断当前的文字是否在白名单内，如果在则放行跳转。
  - 由人工Geek ChatGPT生成摘要内容。
abbrlink: 43b8
date: 2023-03-26 10:30:40
---
> 记录由AI工具帮忙写的代码，越来越离不开Cusor了。
作者: [Cursor](https://www.cursor.so/)
<!--more-->

## 白名单功能

### 指令1

> `Ctrl + K` ：重写a标签的点击事件，实现跳转链接如果在白名单内则放行跳转，如果不在则提示风险。

输出结果如下：

```js
// JavaScript code to rewrite the click event of an "a" tag
// If the link is in the whitelist, allow the navigation
// If not, display a warning message

// Whitelist of allowed URLs
const whitelist = [
  "https://www.example1.com",
  "https://www.example2.com",
  "https://www.example3.com",
];

// Function to handle the click event
function handleClick(event) {
  const targetUrl = event.target.href;

  // Check if the URL is in the whitelist
  if (whitelist.includes(targetUrl)) {
    // Allow the navigation
    return true;
  } else {
    // Prevent the navigation and display a warning message
    event.preventDefault();
    alert("Warning: The link you clicked is not in the whitelist and may be risky.");
    return false;
  }
}

// Attach the event listener to all "a" tags
const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", handleClick);
}

```

> 写的挺好，满足要求，稍微修改下自己就能用了

### 指令 2

> `Ctrl + K` 实现方法一个白名单网站数组，判断当前的网址是否在白名单内，如果在则放行跳转。

```js
let whitelist = ['example.com', 'google.com', 'facebook.com'];

function checkWhitelist(url) {
  let hostname = new URL(url).hostname;
  return whitelist.includes(hostname);
}

if (checkWhitelist(window.location.href)) {
  window.location.href = window.location.href;
}
```

写的不错满足我的要求，比我自己想的实现方法简单不少。

### 指令 数组遍历

> `Ctrl + K` js数组遍历写法

```js
// ES5 forEach
var arr = [1, 2, 3];
arr.forEach(function(item, index, array) {
  console.log(item, index);
});

// ES6 for...of
var arr = [1, 2, 3];
for (let item of arr) {
  console.log(item);
}

// ES6 entries() + destructuring
var arr = [1, 2, 3];
for (let [index, item] of arr.entries()) {
  console.log(index, item);
}

// ES6 entries() + forEach()
var arr = [1, 2, 3];
arr.entries().forEach(function(item) {
  console.log(item[0], item[1]);
});

// ES6 map()
var arr = [1, 2, 3];
arr.map(function(item, index) {
  console.log(item, index);
});

// ES6 reduce()
var arr = [1, 2, 3];
arr.reduce(function(prev, curr, index) {
  console.log(prev, curr, index);
});

// ES6 filter()
var arr = [1, 2, 3];
arr.filter(function(item, index) {
  console.log(item, index);
});

// ES6 find()
var arr = [1, 2, 3];
arr.find(function(item, index) {
  console.log(item, index);
});

// ES6 findIndex()
var arr = [1, 2, 3];
arr.findIndex(function(item, index) {
  console.log(item, index);
});

// ES6 some()
var arr = [1, 2, 3];
arr.some(function(item, index) {
  console.log(item, index);
});

// ES6 every()
var arr = [1, 2, 3];
arr.every(function(item, index) {
  console.log(item, index);
});

// for loop
var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for loop with cached length
var arr = [1, 2, 3];
for (var i = 0, len = arr.length; i < len; i++) {
  console.log(arr[i]);
}

// while loop
var arr = [1, 2, 3];
var i = 0;
while (i < arr.length)
```
