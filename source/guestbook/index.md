---
title: 留言板
date: 2023-05-20 22:06:17

comments: true
aside: false
top_img: false
---

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
