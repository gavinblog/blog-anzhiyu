if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const b=e=>s(e,n),a={module:{uri:n},exports:o,require:b};i[n]=Promise.all(c.map((e=>a[e]||b(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/hbe.style.css",revision:"ce0a458b6876707a8b522b290e540409"},{url:"css/index.css",revision:"64f7eb2d981c2d1a4d11911f5585bea9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"c6001270c274a10967b38198da34ef58"},{url:"js/main.js",revision:"530dca8c0b468b712dfae89be43c3150"},{url:"js/search/algolia.js",revision:"47731f6afdeed8c8668495cef3abc2d8"},{url:"js/search/local-search.js",revision:"408666da48024f36cdc803686fb19da9"},{url:"js/tw_cn.js",revision:"673cebd4385b636ff9a2099401a1cb11"},{url:"js/utils.js",revision:"de183ab32a17c5103712b2080edfaa61"},{url:"anzhiyu/random.js",revision:"9178c103041cdcba87bee255a9eb30e8"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"40cf069621301968c3cc7dbb90b4cd56"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"manifest.json",revision:"417b3fca2649b1e37740026a112825a7"},{url:"/",revision:"index-20230731115846908"},{url:"music/",revision:"music-20230731115846908"},{url:"about/",revision:"about-20230731115846908"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
