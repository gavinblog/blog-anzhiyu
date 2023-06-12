---
title: 留言板
date: 2023-05-20 22:06:17

comments: true
---

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/yaseng/jquery.barrager.js/dist/js/jquery.barrager.min.js"></script>
<style>
/* 评论弹幕 */
.barrage {
    position: fixed;
    right: -500px;
    display: inline-block;
    width: fit-content;
    z-index: 99999
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

书写markdown区域

<div id="loading"></div>

<script>
let ls = []
let Num = 0;

// 以下注释为twikoo api的返回格式
// 返回 Array，包含最新评论的
//   * id:           评论 ID
//   * url:          评论地址
//   * nick:         昵称
//   * mailMd5:      邮箱的 MD5 值，可用于展示头像
//   * link:         网址
//   * comment:      HTML 格式的评论内容
//   * commentText:  纯文本格式的评论内容
//   * created:      评论时间，格式为毫秒级时间戳
//   * avatar:       头像地址（0.2.9 新增）
//   * relativeTime: 相对评论时间，如 “1 小时前”（0.2.9 新增）
// 返回示例: [ // 从新到旧顺序
//   { id: '', url: '', nick: '', mailMd5: '', link: '', comment: '', commentText: '', created: 0 },
//   { id: '', url: '', nick: '', mailMd5: '', link: '', comment: '', commentText: '', created: 0 },
//   { id: '', url: '', nick: '', mailMd5: '', link: '', comment: '', commentText: '', created: 0 }
// ]
window.onload = () => {
    // 手机端显示效果不好，所以直接不让其显示
    if (1&&document.body.clientWidth > 100) {
        // 加载动画，将 /img/loading.svg 换成你的加载图片即可
        document.getElementById('loading').innerHTML = '<a href="/img/loading.svg" data-fancybox="gallery" data-caption="弹幕加载中..." data-thumb="/img/loading.svg"><img src="/img/loading.svg" data-lazy-src="/img/loading.svg" alt="弹幕加载中..." data-ll-status="loaded" class="entered loaded"></a><div class="img-alt is-center">弹幕加载中...</div>';
        let barrageTime = ''
        // 使用twikoo 自带api请求全站数据
        twikoo.getRecentComments({
            envId: 'https://twikoo.geekswg.top/', // 环境 ID
            // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
            pageSize: 50, // 获取多少条，默认：10，最大：100
            includeReply: true // 是否包括最新回复，默认：false
        }).then((data) => {
            data.forEach(i => {
                if (i.avatar == undefined) i.avatar = 'https://cravatar.cn/avatar/d615d5793929e8c7d70eab5f00f7f5f1?d=mp'
                 console.info('获取留言===>' + i.nick + '\n' + i.comment + '\n' + i.url);
                ls.push({
                    img: i.avatar, //图片 
                    info: i.nick + '：' + formatDanmaku(i.comment), //文字 
                    href: i.url, //链接 
                    close: false, //显示关闭按钮 
                    speed: 15, //延迟,单位秒,默认6 
                    // bottom: 70, //距离底部高度,单位px,默认随机 
                    color: '#fff', //颜色,默认白色 
                    old_ie_color: '#000000', //ie低版兼容色,不能与网页背景相同,默认黑色 
                })
            });
            setTimeout(() => { document.getElementById('loading').innerHTML = ''; }, 2000);
            setInterval(() => {
                if (Num >= ls.length) Num = 0
                $('body').barrager(ls[Num]);
                Num++;
            }, 1000); // 弹幕间隔时长
        }).catch(function(err) { console.error(err); });
    }else document.getElementById('loading').innerHTML = '<div class="note danger flat"><p>已关闭弹幕功能，请在电脑上查看。</p></div>' // 如果是手机则提醒
}

// 格式化评论
function formatDanmaku(str) {
    str = str.replace(/<\/*br>|[\s\uFEFF\xA0]+/g, '');
    str = str.replace(/<img.*?>/g, '[图片]');
    str = str.replace(/<a.*?>.*?<\/a>/g, '[链接]');
    str = str.replace(/<pre.*?>.*?<\/pre>/g, '[代码块]');
    str = str.replace(/<.*?>/g, '');
    return str
}
</script>


