if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let a={};const b=e=>s(e,n),o={module:{uri:n},exports:a,require:b};i[n]=Promise.all(c.map((e=>o[e]||b(e)))).then((e=>(r(...e),a)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/hbe.style.css",revision:"ce0a458b6876707a8b522b290e540409"},{url:"css/index.css",revision:"38cebbea018cf61818e0e219da1e216a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"c744ac4eb7dfc143af9eacc91b72946b"},{url:"js/anzhiyu/ai_abstract.js",revision:"bd7d0416a912651499efa1a2089a9fa0"},{url:"js/anzhiyu/comment_barrage.js",revision:"d27c413b80b8b250eb1493281299a4e3"},{url:"js/anzhiyu/people.js",revision:"19feb32bba8ba6faf0ec882112eb749b"},{url:"js/anzhiyu/random_friends_post.js",revision:"41796840c1aeb32f3407b426744953f5"},{url:"js/anzhiyu/right_click_menu.js",revision:"97b668396daaae5e05b11c7bfd612519"},{url:"js/main.js",revision:"736c8b13deaf2883426039e2897c8c08"},{url:"js/search/algolia.js",revision:"d6e42f82f4a683ff9ed2796b2839e5db"},{url:"js/search/local-search.js",revision:"408666da48024f36cdc803686fb19da9"},{url:"js/tw_cn.js",revision:"1ab93057e66c00a59bd33c93abd48932"},{url:"js/utils.js",revision:"aafa3f1580537c6784fc5290e9aa51a3"},{url:"anzhiyu/random.js",revision:"9e0469bc4b7396cde8485ec68b6a070b"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"40cf069621301968c3cc7dbb90b4cd56"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"manifest.json",revision:"417b3fca2649b1e37740026a112825a7"},{url:"/",revision:"index-20241007081751083"},{url:"music/",revision:"music-20241007081751083"},{url:"about/",revision:"about-20241007081751083"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
