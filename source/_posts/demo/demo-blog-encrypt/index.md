---
title: hexo-blog-encrypt加密测试Demo
categories: demo
tags:
  - 示例
  - demo
  - Hexo
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
## hexo-blog-encrypt插件

插件地址：[hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt)
中文文档：[https://github.com/D0n9X1n/hexo-blog-encrypt/blob/master/ReadMe.zh.md](https://github.com/D0n9X1n/hexo-blog-encrypt/blob/master/ReadMe.zh.md)

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
# 
theme: xray
wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
```

> 在·_config.yml·中配置使用

```yml
# hexo-blog-encrypt 文章加密插件
# Security
encrypt: # hexo-blog-encrypt
  abstract: 有东西被加密了, 请输入密码查看.
  message: 您好, 这里需要密码[提示：demo].
  # 加密指定tag 只要文章包含了该tag都会被加密，
  #如果特定一篇不需要加密可以在文章头部front-matter中添加[password: '']
  tags:
    - {name: encrypt, password: 1234}
    - {name: demo, password: demo}
  # default blink shrink flip up surge wave xray
  theme: shrink
  wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
  wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
```

> `theme`配置参数预览可以参考

你可以在线挑选你喜欢的主题,并应用到你的博客中:

+ [default](https://mhexo.github.io/2020/12/23/Theme-Test-Default/)
+ [blink](https://mhexo.github.io/2020/12/23/Theme-Test-Blink/)
+ [shrink](https://mhexo.github.io/2020/12/23/Theme-Test-Shrink/)
+ [flip](https://mhexo.github.io/2020/12/23/Theme-Test-Flip/)
+ [up](https://mhexo.github.io/2020/12/23/Theme-Test-Up/)
+ [surge](https://mhexo.github.io/2020/12/23/Theme-Test-Surge/)
+ [wave](https://mhexo.github.io/2020/12/23/Theme-Test-Wave/)
+ [xray](https://mhexo.github.io/2020/12/23/Theme-Test-Xray/)
