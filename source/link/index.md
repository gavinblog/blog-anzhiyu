---
title: 莫愁前路无知己，天下谁人不识君
date: 2023-04-13 13:34:33

type: link # 友链页面
---

## 我的友链

{% tabs test4 %}

<!-- tab Hexo博客 @fa-solid fa-blog -->
```yml
- name: 毕少侠-Hexo-Anzhiyu
  link: https://hexo.geekswg.top/
  avatar: https://hexo.geekswg.top/imgs/avatar.webp
  descr: 毕少侠也在江湖。
  siteshot: https://image.thum.io/get/width/400/crop/800/allowJPG/wait/20/noanimate/https://hexo.geekswg.top/
```
<!-- endtab -->

<!-- tab Hugo博客@fa-solid fa-yin-yang fa-spin -->
```yml
- nickname: 毕少侠
  avatar: https://geekswg.js.cool/images/avatar.jpg
  url: https://geekswg.js.cool
  description: 毕少侠也在江湖。
```
<!-- endtab -->

<!-- tab Demo@fa-brands fa-github -->
**名字@icon**
<!-- endtab -->

{% endtabs %}

## 友情链接申请

* 博客名称: `毕少侠`
* 博客地址: `https://hexo.geekswg.top/`
* 博客描述: `毕少侠也在江湖`
* 博客头像: `https://hexo.geekswg.top/imgs/avatar.webp`

请**勾选**你符合的条件：

<div id="friendlink_checkboxs" style="padding:0 0 0 1.6rem">

<p><label class="checkbox">
<input type="checkbox" id="checkbox1" onclick="checkForm()">我已添加 <b>本站</b> 博客的友情链接</label></p>

<p><label class="checkbox">
<input type="checkbox" id="checkbox2" onclick="checkForm()">
我的链接主体为 <b>个人</b>，网站类型为<b>博客,</b>
网站内容符合<b>中国大陆法律法规</b>。
</label></p>

<p><label class="checkbox">
<input type="checkbox" id="checkbox3" onclick="checkForm()">
我的网站现在可以在<b>中国大陆</b>区域正常访问，网站可以在<b>1分钟</b>内加载完成首屏。
</label></p>

</div>

> `注意`: 勾选并确认满足以上条件后出现评论框，请留下贵站信息！

<style>.tk-comments>.tk-submit{opacity:0;height:0;transition:opacity .5s,height .5s;overflow:hidden}</style>

<script>
    var twikooSubmit = document.getElementsByClassName("tk-submit")[0];
    if(twikooSubmit) {
      twikooSubmit.style.opacity = "0";
    }
    function checkForm() {
        var checkbox1 = document.getElementById("checkbox1");
        var checkbox2 = document.getElementById("checkbox2");
        var checkbox3 = document.getElementById("checkbox3");

        var twikooSubmit = document.getElementsByClassName("tk-submit")[0];
        if (checkbox1.checked && checkbox2.checked && checkbox3.checked ) {
            twikooSubmit.style.opacity = "1";
            twikooSubmit.style.height = "auto";
            twikooSubmit.style.overflow = "auto";
            var input = document.getElementsByClassName('el-textarea__inner')[0];
            let evt = document.createEvent('HTMLEvents');
            evt.initEvent('input', true, true);
            input.value = '> 我已所有满足条件，已添加**本站友链**，申请友链信息如下：\n```yml\n- name: \n  link: \n  avatar: \n  descr: \n  siteshot: \n```';
            input.dispatchEvent(evt);
            input.focus();
            input.setSelectionRange(-1, -1);
        } else {
            var input = document.getElementsByClassName('el-textarea__inner')[0];
            let evt = document.createEvent('HTMLEvents');
            evt.initEvent('input', true, true);
            input.value = '';
            input.dispatchEvent(evt);
            twikooSubmit.style.opacity = "0";
            twikooSubmit.style.height = "0";
            twikooSubmit.style.overflow = "hidden";
        }
    }
</script>
