

let ls = [];
let Num = 0;
let barrageTimer = null;


function openBarrage(twikooEnVid){
    if( barrageTimer != null ){
        alert('弹幕已开启');
        // 弹幕已开启
        return;
    }
    twikooEnVid = twikooEnVid || 'https://twikoo.geekswg.top/';
    //alert('window.onload');
    // 手机端显示效果不好，所以直接不让其显示
    if (1 && document.body.clientWidth > 100) {
        // 加载动画，将 /img/loading.svg 换成你的加载图片即可
        document.getElementById('loading').innerHTML = '<div  data-fancybox="gallery" data-caption="弹幕加载中..." data-thumb="/img/loading.svg"><img src="/imgs/gif/yinyang.gif" data-lazy-src="/img/loading.svg" alt="弹幕加载中..." data-ll-status="loaded" class="entered loaded"></div><div class="img-alt is-center">弹幕加载中...</div>';
        let barrageTime = ''
        // 使用twikoo 自带api请求全站数据
        twikoo.getRecentComments({
            envId: 'https://twikoo.geekswg.top/', // 环境 ID
            // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
            pageSize: 64, // 获取多少条，默认：10，最大：100
            includeReply: true // 是否包括最新回复，默认：false
        }).then((data) => {
            data.forEach(i => {
                if (i.avatar == undefined) i.avatar = 'https://cravatar.cn/avatar/d615d5793929e8c7d70eab5f00f7f5f1?d=mp'
                ls.push({
                    img: i.avatar, //图片 
                    info: i.nick + '：' + formatDanmaku(i.comment), //文字 
                    href: i.url + '#' + i.id, //链接 
                    close: true, //显示关闭按钮 
                    speed: 16, //延迟,单位秒,默认6 
                    //bottom: 70, //距离底部高度,单位px,默认随机 
                    color: '#fff', //颜色,默认白色 
                    old_ie_color: '#000000', //ie低版兼容色,不能与网页背景相同,默认黑色 
                })
            });
            setTimeout(() => { document.getElementById('loading').innerHTML = ''; }, 2000);
            barrageTimer  = setInterval(() => {
                if (Num >= ls.length) Num = 0
                $('body').barrager(ls[Num]);
                Num++;
            }, 1000); // 弹幕间隔时长
        }).catch(function (err) { console.error(err); });
    } else {
        document.getElementById('loading').innerHTML = '<div class="note danger flat"><p>已关闭弹幕功能，请在电脑上查看。</p></div>' // 如果是手机则提醒
    }
}
function closeBarrage(){
    if( barrageTimer != null ){
        $.fn.barrager.removeAll();
        clearInterval(barrageTimer);
        barrageTimer = null;
    }
    
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