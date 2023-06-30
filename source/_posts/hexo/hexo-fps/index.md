---
title: 博客网站添加FPS显示
categories: hexo
tags:
  - Hexo
  - 教程
keywords:
  - geekswg
  - 毕少侠
  - hexo
ai:
  - 博客网站添加FPS显示教程，本文摘要由ChatGPT智能生成。
abbrlink: 9efb
date: 2023-06-30 21:33:22
description:
---

## 创建自定义文件JS,CSS

在hexo博客根目录新建 `source/custom/fps/fps.js`和`source/custom/fps/fps.css`
文件内容分别如下
> fps.js
```js
if (window.localStorage.getItem("fpson") == undefined || window.localStorage.getItem("fpson") == "1") {
    var rAF = function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    }();
    var frame = 0;
    var allFrameCount = 0;
    var lastTime = Date.now();
    var lastFameTime = Date.now();
    var loop = function () {
        var now = Date.now();
        var fs = (now - lastFameTime);
        var fps = Math.round(1000 / fs);

        lastFameTime = now;
        // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
        allFrameCount++;
        frame++;

        if (now > 1000 + lastTime) {
            var fps = Math.round((frame * 1000) / (now - lastTime));
            if (fps <= 5) {
                var kd = `<span style="color:#bd0000">卡成ppt🤢</span>`
            } else if (fps <= 15) {
                var kd = `<span style="color:red">电竞级帧率😖</span>`
            } else if (fps <= 25) {
                var kd = `<span style="color:orange">有点难受😨</span>`
            } else if (fps < 35) {
                var kd = `<span style="color:#9338e6">不太流畅🙄</span>`
            } else if (fps <= 45) {
                var kd = `<span style="color:#08b7e4">还不错哦😁</span>`
            } else {
                var kd = `<span style="color:#39c5bb">十分流畅🤣</span>`
            }
            document.getElementById("fps").innerHTML = `FPS:${fps} ${kd}`;
            frame = 0;
            lastTime = now;
        };

        rAF(loop);
    }

    loop();
} else {
    document.getElementById("fps").style = "display:none!important"
}
```

> fps.css
```css
/* 帧率检测 */
#fps {
    position: fixed;
    /* 指定位置 */
    left: 10px;
    bottom: 88px;
    z-index: 1919810;
  }
  [data-theme="light"] #fps {
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: var(--backdrop-filter);
    padding: 4px;
    border-radius: 4px;
  }
  [data-theme="dark"] #fps {
    background-color: rgba(0, 0, 0, 0.72);
    backdrop-filter: var(--backdrop-filter);
    padding: 4px;
    border-radius: 4px;
  }
```

## 引入自定义资源文件

在`hexo`主题的配置文件中引入上面新建的`fps.js`和`fps.css`文件即可。

```yml
# Inject
# Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
inject:
  head:
    # 自定义css

  bottom:

    # FPS显示
    - <span id="fps"></span> 
    - <link rel="stylesheet" href="/custom/fps/fps.css" media="defer" onload="this.media='all'">
    - <script src="/custom/fps/fps.js"></script>
```

## 编译运行预览效果

```bash
hexo cl | hexo g | hexo s
```

> 本文参考：
[https://www.fomal.cc/posts/d739261b.html](https://www.fomal.cc/posts/d739261b.html)