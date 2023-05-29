---
title: 莫愁前路无知己，天下谁人不识君
date: 2023-04-13 13:34:33

type: link # 友链页面
---

## 我的友链

{% tabs test4 %}
<!-- tab Hugo博客 -->
```yml
- nickname: 毕少侠
  avatar: https://geekswg.js.cool/images/avatar.jpg
  url: https://geekswg.js.cool
  description: 毕少侠也在江湖。
```
<!-- endtab -->

<!-- tab Hexo博客 @fab fa-apple-pay -->
```yml
    - name: 毕少侠-Hexo-Anzhiyu
      link: https://hexo.geekswg.top/
      avatar: https://hexo.geekswg.top/imgs/avatar.webp
      descr: 毕少侠也在江湖。
      siteshot: 
```
<!-- endtab -->

<!-- tab Demo@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}


作者: Jerry
連結: https://butterfly.js.org/posts/4aa8abbe/#Tabs
來源: Butterfly
著作權歸作者所有。商業轉載請聯絡作者獲得授權，非商業轉載請註明出處。


## 友情链接申请

* 我的名称: `毕少侠`
* 网站地址: `https://hexo.geekswg.top/`
* 描述: `毕少侠也在江湖`
* 头像: `https://hexo.geekswg.top/imgs/avatar.webp`

请勾选你符合的条件：

<div id="friendlink_checkboxs" style="padding:0 0 0 1.6rem">

<p><label class="checkbox">
<input type="checkbox" id="checkbox1" onclick="checkForm()">我已添加 <b>本站</b> 博客的友情链接</label></p>

<p><label class="checkbox">
<input type="checkbox" id="checkbox2" onclick="checkForm()">我的链接主体为 <b>个人</b>，网站类型为<b>博客</b></label></p>

<p><label class="checkbox">
<input type="checkbox" id="checkbox3" onclick="checkForm()">我的网站现在可以在中国大陆区域正常访问</label></p>

<p><label class="checkbox">
<input type="checkbox" id="checkbox4" onclick="checkForm()">网站内容符合中国大陆法律法规</label></p>

<p><label class="checkbox">
<input type="checkbox" id="checkbox5" onclick="checkForm()">我的网站可以在1分钟内加载完成首屏</label></p>

</div>

<style>.tk-comments>.tk-submit{opacity:0;height:0;transition:opacity .5s,height .5s;overflow:hidden}</style>

<script>var twikooSubmit = document.getElementsByClassName("tk-submit")[0];
    if(twikooSubmit) {
      twikooSubmit.style.opacity = "0";
    }
    function checkForm() {
        var checkbox1 = document.getElementById("checkbox1");
        var checkbox2 = document.getElementById("checkbox2");
        var checkbox3 = document.getElementById("checkbox3");
        var checkbox4 = document.getElementById("checkbox4");
        var checkbox5 = document.getElementById("checkbox5");
        var twikooSubmit = document.getElementsByClassName("tk-submit")[0];
        if (checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
            twikooSubmit.style.opacity = "1";
            twikooSubmit.style.height = "auto";
            twikooSubmit.style.overflow = "auto";
            var input = document.getElementsByClassName('el-textarea__inner')[0];
            let evt = document.createEvent('HTMLEvents');
            evt.initEvent('input', true, true);
            input.value = '昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n';
            input.dispatchEvent(evt);
            input.focus();
            input.setSelectionRange(-1, -1);
        } else {
            twikooSubmit.style.opacity = "0";
            twikooSubmit.style.height = "0";
            twikooSubmit.style.overflow = "hidden";
        }
    }</script>