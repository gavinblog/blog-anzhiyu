---
title: 留言板
date: 2023-05-20 22:06:17

comments: true
aside: false
top_img: false
---

<!-- 
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
-->
<link rel="stylesheet" type="text/css" href="/custom/easy-danmaku/danmu.css">
<script src="/custom/easy-danmaku/easy-Danmaku.js"></script>

{% note success  flat %}
如果有什么 **想说的**、**想问的** 或者 **发现了本站的BUG**，欢迎留言告知😊。
{% endnote %}

{% note pink 'fa-solid fa-link'  flat %}
若想 **添加友链** 请前往 [友情链接](/link/) 页面进行友链申请😄1111
{% endnote %}

<div id="danmuBtn"></div>
<div id="danmu"></div>



<script src="/custom/easy-danmaku/danmu.js"></script>


<!-- 
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
-->

{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}

<!-- =================================诗词================================= 
<style>
/*诗*/
.poem-wrap {
    position: relative;
    width: 730px;
    max-width: 80%;
    border: 2px solid #797979;
    border-top: none;
    text-align: center;
    margin: 80px auto;
}
 
.poem-wrap h {
    font-size: 40px;
    font-style:oblique;
    position: relative;
    margin-top: -40px;
    display: inline-block;
    letter-spacing: 4px;
    color: #797979
}
 
.poem-wrap p {
    width: 70%;
    margin: auto;
    line-height: 30px;
    color: #797979;
}
 
.poem-wrap p#poem {
    font-size: 22px;
    margin: 15px auto;
}
 
.poem-wrap p#info {
    font-size: 15px;
    margin: 15px auto;
}
 
.poem-border {
    position: absolute;
    height: 2px;
    width: 27%;
    background-color: #797979;
}
 
.poem-right {
    right: 0;
}
 
.poem-left {
    left: 0;
}
 
@media (max-width: 685px) {
    .poem-border {
        width: 18%;
    }
}
 
@media (max-width: 500px) {
    .poem-wrap {
        margin-top: 60px;
        margin-bottom: 20px;
        border-top: 2px solid #797979;
    }
 
    .poem-wrap h {
        margin: 20px 6px;
    }
 
    .poem-border {
        display: none;
    }
}
</style>
<div class="poem-wrap">
  <div class="poem-border poem-left"></div>
  <div class="poem-border poem-right"></div>
    <h>今日诗词</h>
    <p id="poem">挑选中...</p>
    <p id="info">
  <script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
  <script type="text/javascript">
    jinrishici.load(function(result) {
      poem.innerHTML = result.data.content
      info.innerHTML = '【' + result.data.origin.dynasty + '】' + result.data.origin.author + '《' + result.data.origin.title + '》'
      document.getElementById("poem").value(poem);
      document.getElementById("info").value(info);  
  });
  </script>
</div> -->
<!-- =================================诗词================================= -->
