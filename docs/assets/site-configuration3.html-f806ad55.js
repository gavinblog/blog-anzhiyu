import{_ as t,M as p,p as l,q as c,R as n,t as a,N as e,a1 as i}from"./framework-2fd1fcd7.js";const o={},u={class:"hint-container warning"},d=n("p",{class:"hint-container-title"},"警告",-1),r={href:"https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases/tag/1.2.1",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"ai-摘要",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ai-摘要","aria-hidden":"true"},"#"),a(" ai 摘要")],-1),m=n("p",null,[a("需主题版本大于 "),n("code",null,"1.1.6 版本")],-1),v=n("code",null,"key",-1),b=n("code",null,"Referer",-1),y=n("code",null,"tianli gpt",-1),h=n("code",null,"key",-1),g=n("code",null,"Referer",-1),f={href:"https://afdian.net/item/886a79d4db6711eda42a52540025c377",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"2102916311",-1),_=i(`<p>机器人中回复：/chat 你的 key 你的博客地址注意保留最后的斜杠(即为 Referer)</p><p>例如：/chat tN2jLmG7fX9zHk5dVbQr https://anzhiy.cn/</p><p>格式发送，返回的 token 即你的剩余字数</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 文章顶部ai摘要</span>
<span class="token key atrule">post_head_ai_description</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">gptName</span><span class="token punctuation">:</span> AnZhiYu
  <span class="token key atrule">mode</span><span class="token punctuation">:</span> local <span class="token comment"># 默认模式 可选值: tianli/local</span>
  <span class="token key atrule">switchBtn</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 可以配置是否显示切换按钮 以切换tianli/local</span>
  <span class="token key atrule">btnLink</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//afdian.net/item/886a79d4db6711eda42a52540025c377
  <span class="token key atrule">randomNum</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 按钮最大的随机次数，也就是一篇文章最大随机出来几种</span>
  <span class="token key atrule">basicWordCount</span><span class="token punctuation">:</span> <span class="token number">1000</span> <span class="token comment"># 最低获取字符数, 最小1000, 最大1999</span>
  <span class="token key atrule">key</span><span class="token punctuation">:</span> xxxx
  <span class="token key atrule">Referer</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xx.xx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成以后在文章的<code>Front-matter</code>配置<code>ai: true</code>, 使用 <code>tianli gpt</code> 需将 mode 改为<code>tianli</code> 然后在需要 ai 摘要的文章的<code>Front-matter</code>配置<code>ai: true</code></p><p>如果使用<code>local</code>,需要按照以下方式配置</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> AnZhiYu主题快速开始
<span class="token key atrule">ai</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 本教程介绍了如何在博客中安装基于Hexo主题的安知鱼主题，并提供了安装、应用主题、修改配置文件、本地启动等详细步骤及技术支持方式。教程的内容针对最新的主题版本进行更新，如果你是旧版本教程会有出入。
  <span class="token punctuation">-</span> 本文真不错</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>mode</th><th>对比</th></tr></thead><tbody><tr><td>tianli</td><td>具有完备的训练后端功能，可优秀的完成文章的摘要</td></tr><tr><td>local</td><td>本地，需自行在文章顶部添加 ai 摘要，内容自行决定，书写较为麻烦。</td></tr></tbody></table><h2 id="控制台信息" tabindex="-1"><a class="header-anchor" href="#控制台信息" aria-hidden="true">#</a> 控制台信息</h2><p>关于控制台信息，主题不提供修改配置，但是可以在主题配置文件中进行关闭。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 控制台打印信息</span>
<span class="token key atrule">console</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台打印相关信息可以配置页脚内容来修改。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">footer</span><span class="token punctuation">:</span>
  <span class="token key atrule">owner</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">since</span><span class="token punctuation">:</span> <span class="token number">2020</span>
  <span class="token key atrule">custom_text</span><span class="token punctuation">:</span>
  <span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># Copyright of theme and framework</span>
  <span class="token key atrule">runtime</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">launch_time</span><span class="token punctuation">:</span> 04/01/2021 00<span class="token punctuation">:</span><span class="token datetime number">00:00</span> <span class="token comment"># 网站上线时间</span>
    <span class="token key atrule">work_img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@2.0.4/img/badge/安知鱼<span class="token punctuation">-</span>上班摸鱼中.svg
    <span class="token key atrule">work_description</span><span class="token punctuation">:</span> 距离月入25k也就还差一个大佬带我~
    <span class="token key atrule">offduty_img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@2.0.4/img/badge/安知鱼<span class="token punctuation">-</span>下班啦.svg
    <span class="token key atrule">offduty_description</span><span class="token punctuation">:</span> 下班了就该开开心心的玩耍，嘿嘿~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果实在有强迫症也可以自行修改内容<code>themes/anzhiyu/layout/includes/anzhiyu/log-js.pug</code>。</p><h2 id="如何配置首页顶部右侧不使用轮播图" tabindex="-1"><a class="header-anchor" href="#如何配置首页顶部右侧不使用轮播图" aria-hidden="true">#</a> 如何配置首页顶部右侧不使用轮播图</h2><figure><img src="https://img02.anzhiy.cn/adminuploads/1/2023/03/27/642172c889a45.png" alt="效果预览" tabindex="0" loading="lazy"><figcaption>效果预览</figcaption></figure><p>将主题配置文件中<code>home_top.swiper.enable</code> 修改为 <code>false</code> 即可.</p><h2 id="设置-标签卖萌" tabindex="-1"><a class="header-anchor" href="#设置-标签卖萌" aria-hidden="true">#</a> 设置 标签卖萌</h2><p>主题配置文件中</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 标签卖萌</span>
<span class="token key atrule">diytitle</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">leaveTitle</span><span class="token punctuation">:</span> w(ﾟДﾟ)w 不要走！再看看嘛！
  <span class="token key atrule">backTitle</span><span class="token punctuation">:</span> ♪(^∇^<span class="token important">*)欢迎肥来！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何配置页脚" tabindex="-1"><a class="header-anchor" href="#如何配置页脚" aria-hidden="true">#</a> 如何配置页脚</h2><p>在主题配置文件中<code>footer</code>配置，其中<code>runtime</code>可以配置网站运行时间，工作时间上午 9 点到下午 6 点到图片，描述，下班时间的图片，描述。</p><h2 id="配置关于页与文章页底部打赏二维码" tabindex="-1"><a class="header-anchor" href="#配置关于页与文章页底部打赏二维码" aria-hidden="true">#</a> 配置关于页与文章页底部打赏二维码</h2><p>在主题配置文件中</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Sponsor/reward</span>
<span class="token key atrule">reward</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">coinAudio</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/akilar<span class="token punctuation">-</span>candyassets@1.0.36/audio/aowu.m4a
  <span class="token key atrule">QR_code</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@1.1.6/img/post/common/qrcode<span class="token punctuation">-</span>weichat.png
      <span class="token key atrule">link</span><span class="token punctuation">:</span>
      <span class="token key atrule">text</span><span class="token punctuation">:</span> wechat
    <span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@1.1.6/img/post/common/qrcode<span class="token punctuation">-</span>alipay.png
      <span class="token key atrule">link</span><span class="token punctuation">:</span>
      <span class="token key atrule">text</span><span class="token punctuation">:</span> alipay
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主题如何获取文章主色调" tabindex="-1"><a class="header-anchor" href="#主题如何获取文章主色调" aria-hidden="true">#</a> 主题如何获取文章主色调</h2><blockquote><p>两种方法，因为我觉得 js 获取到的图片主色调不准确且消耗资源，所以可以使用以下两种方式。</p></blockquote><ol><li><p>使用腾讯云的数据万象能力，前提是图片存储在腾讯云的 cos 上。</p></li><li><p>使用多吉云的云存储+免费 cdn，云存储必须是付费版本的，1000 张图片 1G 以内大概在 1 块钱 1 年。cdn 免费每月 20G</p></li></ol><h2 id="双栏" tabindex="-1"><a class="header-anchor" href="#双栏" aria-hidden="true">#</a> 双栏</h2><p>如果你需要像我一样首页双栏，修改主题配置文件<code>_config.anzhiyu.yml</code>（主题版本需要 1.1.1 以及以上）</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 双栏文章</span>
<span class="token key atrule">article_double_row</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="首页顶部-3-大分类配置" tabindex="-1"><a class="header-anchor" href="#首页顶部-3-大分类配置" aria-hidden="true">#</a> 首页顶部 3 大分类配置</h2><p>首页技能点轮播下的分类，可通过配置主题配置文件<code>home_top</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hexo new page categories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Hello World
<span class="token key atrule">categories</span><span class="token punctuation">:</span> 前端开发</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要在创建分类以后在对应的文章中添加上对应的分类，配置 path 即可，注意一定要对应。</p><h2 id="左下角歌单" tabindex="-1"><a class="header-anchor" href="#左下角歌单" aria-hidden="true">#</a> 左下角歌单</h2><p>歌单配置很简单，只需要修改主题配置文件中<code>nav_music</code>即可.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 左下角音乐配置项</span>
<span class="token key atrule">nav_music</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">8152976493</span>
  <span class="token key atrule">server</span><span class="token punctuation">:</span> netease
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="首页技能点配置" tabindex="-1"><a class="header-anchor" href="#首页技能点配置" aria-hidden="true">#</a> 首页技能点配置</h2><p>[blog]代表你的博客根目录。示例数据中的图片链接为本人图床，请自行上传至您自己的图床，（不保证永久可用性）。</p><p>创建<code>[blog]/source/_data/creativity.yml</code>，输入以下内容</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">class_name</span><span class="token punctuation">:</span> 开启创造力
  <span class="token key atrule">creativity_list</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Java
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#fff&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//bu.dusays.com/2023/04/09/643293b1184e9.jpg
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Docker
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#57b6e6&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//bu.dusays.com/2023/04/09/643293b0f0abe.png
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Photoshop
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#4082c3&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//bu.dusays.com/2022/12/15/639aa3a5c240e.png
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Node
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#333&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@2.1.1/img/svg/node<span class="token punctuation">-</span>logo.svg
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Webpack
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#2e3a41&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//bu.dusays.com/2023/04/09/643293b68026c.png
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Pinia
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#fff&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@2.0.8/img/svg/pinia<span class="token punctuation">-</span>logo.svg
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Python
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#fff&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//bu.dusays.com/2023/04/09/643293b1230f7.png
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Vite
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#937df7&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@2.0.8/img/svg/vite<span class="token punctuation">-</span>logo.svg
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Flutter
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#4499e4&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//bu.dusays.com/2023/04/09/643293b1055c2.png
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Vue
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#b8f0ae&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//bu.dusays.com/2023/04/09/643293b6788bd.png
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> React
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#222&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> data<span class="token punctuation">:</span>image/svg+xml;base64<span class="token punctuation">,</span>PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> CSS3
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#2c51db&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//bu.dusays.com/2022/12/15/639aa3a5c251e.png
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> JS
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#f7cb4f&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//bu.dusays.com/2023/04/09/643293b121f02.png
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> HTML
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#e9572b&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//bu.dusays.com/2022/12/15/639aa3a5c241c.png
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Git
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#df5b40&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//bu.dusays.com/2023/04/09/643293b10ccdd.webp
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Apifox
      <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#e65164&quot;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//bu.dusays.com/2022/11/19/6378d6458c6b6.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时可以看到首页顶部已经有技能点的轮播了。</p><figure><img src="https://img02.anzhiy.cn/adminuploads/1/2023/03/26/641fe7b5c77c3.webp" alt="技能点轮播" tabindex="0" loading="lazy"><figcaption>技能点轮播</figcaption></figure><p>文字部分在主题配置文件中<code>home_top</code>配置项修改</p><h2 id="配置-nav-顶栏左侧应用列表" tabindex="-1"><a class="header-anchor" href="#配置-nav-顶栏左侧应用列表" aria-hidden="true">#</a> 配置 nav 顶栏左侧应用列表</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># nav左侧菜单</span>
<span class="token key atrule">nav</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">menu</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 网页
      <span class="token key atrule">item</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 个人主页
          <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//index.anzhiy.cn/
          <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//index.anzhiy.cn/assets/home.svg
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 博客
          <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//anzhiy.cn/
          <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//img02.anzhiy.cn/adminuploads/1/2022/09/05/6315ec9737ac4.png
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 云盘主页
          <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.cloud.anzhiy.cn/
          <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安知鱼图床
          <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//image.anzhiy.cn/
          <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//image.anzhiy.cn/favicon.ico
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> alist文件管理
          <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//pan.anzhiy.cn/
          <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cloud.anzhiy.cn/static/img/c192.png
    <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 项目
      <span class="token key atrule">item</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安知鱼云盘
          <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cloud.anzhiy.cn/
          <span class="token key atrule">icon</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//img02.anzhiy.cn/adminuploads/1/2022/04/27/6268e7d9de532.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字数统计" tabindex="-1"><a class="header-anchor" href="#字数统计" aria-hidden="true">#</a> 字数统计</h2><p>要为 AnZhiYu 配上字数统计特性, 你需要如下几个步骤:</p><p>打开 hexo 工作目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> hexo-wordcount <span class="token parameter variable">--save</span> or <span class="token function">yarn</span> <span class="token function">add</span> hexo-wordcount
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 主题配置文件:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">wordcount</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">post_wordcount</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">min2read</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">total_wordcount</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网站验证" tabindex="-1"><a class="header-anchor" href="#网站验证" aria-hidden="true">#</a> 网站验证</h2><p>如果需要搜索引擎收录网站，可能需要登录对应搜索引擎的管理平台进行提交。 各自的验证码可从各自管理平台拿到</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">site_verification</span><span class="token punctuation">:</span>
  <span class="token comment"># - name: google_site_verification</span>
  <span class="token comment">#   content: xxxxxx</span>
  <span class="token comment"># - name: baidu_site_verification</span>
  <span class="token comment">#   content: xxxxxxx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function z(q,I){const s=p("ExternalLinkIcon");return l(),c("div",null,[n("div",u,[d,n("p",null,[a("本教程更新于 2023 年 5 月 22 日，教程的内容针对最新的 anzhiyu 主题(如果你是旧版本，教程会有出入，请留意) 🐟 安知鱼 已经更新到 "),n("a",r,[a("1.2.1"),e(s)])])]),k,m,n("p",null,[a("修改主题配置文件，其中"),v,a("和"),b,a(" 为 "),y,a(" 的"),h,a("和"),g,a("，可在 "),n("a",f,[a("爱发电"),e(s)]),a(" 购买 key，购买完成后添加机器人 QQ："),x]),_])}const C=t(o,[["render",z],["__file","site-configuration3.html.vue"]]);export{C as default};
