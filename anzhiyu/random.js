var posts=["posts/3eeb.html","posts/1b99.html","posts/61d5.html","posts/f18e.html","posts/43b8.html","posts/43c0.html","posts/66f3.html","posts/7c79.html","posts/b191.html","posts/56b8.html","posts/9667.html","posts/3071.html","posts/526.html","posts/3e38.html","posts/9efb.html","posts/973c.html","posts/103c.html","posts/3a28.html","posts/9269.html","posts/8c33.html","posts/5cb.html","posts/7ce5.html","posts/e71d.html","posts/524f.html","posts/c6e7.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}var friend_link_list=[{name:"毕少侠-主页",link:"https://home.geekswg.top/",avatar:"/imgs/avatar.webp",descr:"毕少侠的主页By Vue。",siteshot:"/imgs/default-cover.webp",tag:"Home"},{name:"毕少侠-Hugo",link:"https://geekswg.js.cool/",avatar:"/imgs/avatar.webp",descr:"毕少侠也在江湖，毕少侠的主站，由Hugo驱动，Fiixt主题。GitHub-Pages托管",siteshot:"/imgs/default-cover.webp",color:"vip",tag:"Hugo"},{name:"毕少侠-Hexo",link:"https://hexo.geekswg.top/",avatar:"/imgs/t1.webp",descr:"毕少侠也在江湖，毕少侠的主站，由Hexo驱动，Anzhiyu主题。",siteshot:"/imgs/default-cover.webp",color:"speed",tag:"Hexo"},{name:"毕少侠-导航",link:"https://nav.geekswg.top/",avatar:"/imgs/t1.webp",descr:"毕少侠也导航 Powered By Hugo。",siteshot:"/imgs/default-cover.webp",color:"vip",tag:"Hugo"},{name:"毕少侠-监控",link:"https://status.geekswg.top/",avatar:"/imgs/t1.webp",descr:"毕少侠也监控 Powered By Vue",siteshot:"/imgs/default-cover.webp",color:"vip",tag:"Vue"},{name:"Fomalhaut🥝",link:"https://www.fomal.cc/",avatar:"https://www.fomal.cc/assets/avatar.webp",descr:"Future is now 🍭🍭🍭",siteshot:"https://source.fomal.cc/siteshot/www.fomal.cn.jpg"},{name:"小孙同学",link:"https://blog.sunguoqi.com",avatar:"https://blog.sunguoqi.com/upload/avatar.png",descr:"路虽远行则将至，事虽难做则必成！",siteshot:"/imgs/default-cover.webp"},{name:"Tianli",link:"https://tianli-blog.club",avatar:"https://q2.qlogo.cn/headimg_dl?dst_uin=507249007&spec=640",descr:"惟其不可能，所以才相信。"},{name:"张洪Heo",link:"https://blog.zhheo.com/",avatar:"https://bu.dusays.com/2022/12/28/63ac2812183aa.png",descr:"分享设计与科技生活",siteshot:"/imgs/default-cover.webp"},{name:"Eurkon",link:"https://blog.eurkon.com",avatar:"https://blog.eurkon.com/images/user/avatar.jpg",descr:"及时当勉励，岁月不待人。",siteshot:"/imgs/default-cover.webp"},{name:"Leonus",link:"https://blog.leonus.cn/",avatar:"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5",descr:"进一寸有进一寸的欢喜。",siteshot:"/imgs/default-cover.webp"},{name:"杜老师说",link:"https://dusays.com",avatar:"https://cdn.dusays.com/avatar.png",descr:"杜老师说",siteshot:"/imgs/default-cover.webp"},{name:"轻笑Chuckle",link:"https://www.qcqx.cn",avatar:"https://www.qcqx.cn/img/head.webp",descr:"漫天倾尘,风中轻笑",siteshot:"https://www.qcqx.cn/img/chuckle.webp"},{name:"Cartafi",link:"https://www.startly.cn",avatar:"https://startly.s3.bitiful.net/links/avatar/avatar.webp",descr:"互联网中的寂静之地",siteshot:"https://startly.s3.bitiful.net/links/avatar/siteshot.webp"},{name:"raxcl",link:"https://raxcl.cn",avatar:"https://raxcl.cn/img/avatar.jpg",descr:"剑未佩妥，出门已是江湖。",siteshot:"/imgs/default-cover.webp"},{name:"张洪Heo",link:"https://blog.zhheo.com/",avatar:"https://bu.dusays.com/2022/12/28/63ac2812183aa.png",descr:"生活明朗，万物可爱",siteshot:"/imgs/default-cover.webp"},{name:"Eurkon",link:"https://blog.eurkon.com",avatar:"https://blog.eurkon.com/images/user/avatar.jpg",descr:"及时当勉励，岁月不待人。",siteshot:"/imgs/default-cover.webp"},{name:"Fomalhaut🥝",link:"https://www.fomal.cc/",avatar:"https://www.fomal.cc/assets/avatar.webp",descr:"Future is now 🍭🍭🍭",siteshot:"https://source.fomal.cc/siteshot/www.fomal.cn.jpg"},{name:"raxcl",link:"https://raxcl.cn",avatar:"https://raxcl.cn/img/avatar.jpg",descr:"剑未佩妥，出门已是江湖。"},{name:"慕斯",link:"https://blog.dd.ac.cn/",avatar:"https://img1.imgtp.com/2023/06/01/wb77MkMU.png",descr:"风在迷茫中吹来夏天，少年借微光成长",siteshot:"https://img02.dd.ac.cn//article/siteshot.png"},{name:"神经蛙",link:"https://hexo.sjava.cn/",avatar:"https://hexo.sjava.cn/img/pic.png",descr:"种一棵树最好的时间是十年前，其次是现在。",siteshot:"https://hexo.sjava.cn/img/sjw.png"},{name:"海底捞里没有鱼",link:"https://smileszh.cn",avatar:"https://bu.dusays.com/2023/06/10/648499e1299d0.jpg",descr:"平安喜乐，万事胜意"},{name:"程序员小航",link:"https://liuzhihang.com/",avatar:"https://liuzhihang.com/upload/logo.png",descr:"前端开发工程师、后端开发工程师、全干工程师",siteshot:"/imgs/default-cover.webp"}],refreshNum=1;function friendChainRandomTransmission(){const t=Math.floor(Math.random()*friend_link_list.length),{name:s,link:a}=friend_link_list.splice(t,1)[0];Snackbar.show({text:"点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「"+s+"」",duration:8e3,pos:"top-center",actionText:"前往",onActionClick:function(t){t.style.opacity=0,window.open(a,"_blank")}})}function addFriendLinksInFooter(){var t=document.getElementById("footer-random-friends-btn");if(!t)return;t.style.opacity="0.2",t.style.transitionDuration="0.3s",t.style.transform="rotate("+360*refreshNum+++"deg)";const s=[];let a=0;for(;friend_link_list.length&&a<3;){const t=Math.floor(Math.random()*friend_link_list.length),{name:e,link:o,avatar:n}=friend_link_list.splice(t,1)[0];s.push({name:e,link:o,avatar:n}),a++}let e=s.map((({name:t,link:s})=>"<a class='footer-item' href='"+s+"' target='_blank' rel='noopener nofollow'>"+t+"</a>")).join("");e+="<a class='footer-item' href='/link/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=e,setTimeout((()=>{t.style.opacity="1"}),300)}