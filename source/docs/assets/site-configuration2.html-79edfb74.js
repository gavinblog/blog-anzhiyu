import{_ as r,M as d,p,q as m,R as n,t as s,N as i,V as e,a1 as u}from"./framework-2fd1fcd7.js";const b={},k={class:"hint-container warning"},v=n("p",{class:"hint-container-title"},"警告",-1),g={href:"https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases/tag/1.2.1",target:"_blank",rel:"noopener noreferrer"},h=u(`<h2 id="footer-设置" tabindex="-1"><a class="header-anchor" href="#footer-设置" aria-hidden="true">#</a> Footer 设置</h2><p><code>since</code> 是一个来展示你站点起始时间的选项。它位于页面的最底部。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Footer Settings</span>
<span class="token comment"># --------------------------------------</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span>
  <span class="token key atrule">owner</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">since</span><span class="token punctuation">:</span> <span class="token number">2020</span>
  <span class="token key atrule">custom_text</span><span class="token punctuation">:</span>
  <span class="token key atrule">runtime</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">launch_time</span><span class="token punctuation">:</span> 04/01/2021 00<span class="token punctuation">:</span><span class="token datetime number">00:00</span> <span class="token comment"># 网站上线时间</span>
    <span class="token key atrule">work_img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@2.0.4/img/badge/安知鱼<span class="token punctuation">-</span>上班摸鱼中.svg
    <span class="token key atrule">work_description</span><span class="token punctuation">:</span> 距离月入25k也就还差一个大佬带我~
    <span class="token key atrule">offduty_img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@2.0.4/img/badge/安知鱼<span class="token punctuation">-</span>下班啦.svg
    <span class="token key atrule">offduty_description</span><span class="token punctuation">:</span> 下班了就该开开心心的玩耍，嘿嘿~
  <span class="token comment"># 徽标部分配置项 https://shields.io/</span>
  <span class="token comment"># https://img.shields.io/badge/CDN-jsDelivr-orange?style=flat&amp;logo=jsDelivr</span>
  <span class="token key atrule">bdageitem</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//hexo.io/ <span class="token comment">#徽标指向网站链接</span>
      <span class="token key atrule">shields</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@2.1.5/img/badge/Frame<span class="token punctuation">-</span>Hexo.svg <span class="token comment">#徽标API</span>
      <span class="token key atrule">message</span><span class="token punctuation">:</span> 博客框架为Hexo_v5.4.0 <span class="token comment">#徽标提示语</span>
    <span class="token punctuation">-</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//anzhiy.cn/
      <span class="token key atrule">shields</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//pan.anzhiy.cn/d/anzhiyu/svg/Theme<span class="token punctuation">-</span>AnZhiYu<span class="token punctuation">-</span>2E67D3.svg
      <span class="token key atrule">message</span><span class="token punctuation">:</span> 本站使用AnZhiYu主题
    <span class="token punctuation">-</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.dogecloud.com/
      <span class="token key atrule">shields</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@2.2.0/img/badge/CDN<span class="token punctuation">-</span>多吉云<span class="token punctuation">-</span>3693F3.svg
      <span class="token key atrule">message</span><span class="token punctuation">:</span> 本站使用多吉云为静态资源提供CDN加速
    <span class="token punctuation">-</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/
      <span class="token key atrule">shields</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@2.1.5/img/badge/Source<span class="token punctuation">-</span>Github.svg
      <span class="token key atrule">message</span><span class="token punctuation">:</span> 本站项目由Github托管
    <span class="token punctuation">-</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//creativecommons.org/licenses/by<span class="token punctuation">-</span>nc<span class="token punctuation">-</span>sa/4.0/
      <span class="token key atrule">shields</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>blog@2.2.0/img/badge/Copyright<span class="token punctuation">-</span>BY<span class="token punctuation">-</span>NC<span class="token punctuation">-</span>SA.svg
      <span class="token key atrule">message</span><span class="token punctuation">:</span> 本站采用知识共享署名<span class="token punctuation">-</span>非商业性使用<span class="token punctuation">-</span>相同方式共享4.0国际许可协议进行许可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>解释</th></tr></thead><tbody><tr><td>owner</td><td>页脚网站所有者@2020-当前年份</td></tr><tr><td>owner.enable</td><td>页脚网站所有者是否启用</td></tr><tr><td>owner.since</td><td>页脚年份，控制台中打印的运行时间也来自这里</td></tr><tr><td>runtime</td><td>运行时间</td></tr><tr><td>runtime.enable</td><td>运行时间是否启用</td></tr><tr><td>runtime.launch_time</td><td>网站上线时间</td></tr><tr><td>runtime.work_img</td><td>页脚上班时间的徽标</td></tr><tr><td>runtime.work_description</td><td>页脚上班时间的 title 描述</td></tr><tr><td>runtime.offduty_img</td><td>页脚下班时间的徽标</td></tr><tr><td>runtime.offduty_description</td><td>页脚下班时间的 title 描述</td></tr><tr><td>bdageitem</td><td>徽标配置项</td></tr><tr><td>bdageitem.link</td><td>徽标配置链接</td></tr><tr><td>bdageitem.shields</td><td>徽标配置徽标</td></tr><tr><td>bdageitem.message</td><td>徽标配置徽标 title</td></tr></tbody></table><figure><img src="https://img02.anzhiy.cn/adminuploads/1/2023/04/20/64412c4c08266.png!blogimg" alt="页脚" tabindex="0" loading="lazy"><figcaption>页脚</figcaption></figure><figure><img src="https://img02.anzhiy.cn/adminuploads/1/2023/04/20/64412cb6bbbf5.png!blogimg" alt="页脚你好自动定义文字" tabindex="0" loading="lazy"><figcaption>页脚你好自动定义文字</figcaption></figure><h2 id="侧边栏设置-aside" tabindex="-1"><a class="header-anchor" href="#侧边栏设置-aside" aria-hidden="true">#</a> 侧边栏设置 (aside)</h2><p>可自行决定哪个项目需要显示，可决定位置，也可以设置不显示侧边栏。</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># aside (侧边栏)</span>
<span class="token comment"># --------------------------------------</span>

<span class="token key atrule">aside</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">hide</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">button</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">mobile</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># display on mobile</span>
  <span class="token key atrule">position</span><span class="token punctuation">:</span> right <span class="token comment"># left or right</span>
  <span class="token key atrule">display</span><span class="token punctuation">:</span>
    <span class="token key atrule">archive</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">category</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">card_author</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token comment"># 1为使用头像card 2为不使用头像card</span>
    <span class="token key atrule">description</span><span class="token punctuation">:</span> &lt;div style=&quot;line<span class="token punctuation">-</span>height<span class="token punctuation">:</span>1.38;margin<span class="token punctuation">:</span>0.6rem 0;text<span class="token punctuation">-</span>align<span class="token punctuation">:</span>justify;color<span class="token punctuation">:</span>rgba(255<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> 0.8);&quot;<span class="token punctuation">&gt;</span>这有关于&lt;b style=&quot;color<span class="token punctuation">:</span><span class="token comment">#fff&quot;&gt;产品、设计、开发&lt;/b&gt;相关的问题和看法，还有&lt;b style=&quot;color:#fff&quot;&gt;文章翻译&lt;/b&gt;和&lt;b style=&quot;color:#fff&quot;&gt;分享&lt;/b&gt;。&lt;/div&gt;&lt;div style=&quot;line-height:1.38;margin:0.6rem 0;text-align:justify;color:rgba(255, 255, 255, 0.8);&quot;&gt;相信你可以在这里找到对你有用的&lt;b style=&quot;color:#fff&quot;&gt;知识&lt;/b&gt;和&lt;b style=&quot;color:#fff&quot;&gt;教程&lt;/b&gt;。&lt;/div&gt;</span>
    <span class="token key atrule">button</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> anzhiyu<span class="token punctuation">-</span>icon<span class="token punctuation">-</span>arrow<span class="token punctuation">-</span>circle<span class="token punctuation">-</span>right
      <span class="token key atrule">text</span><span class="token punctuation">:</span> 了解更多
      <span class="token key atrule">link</span><span class="token punctuation">:</span> /about/
  <span class="token key atrule">card_announcement</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">content</span><span class="token punctuation">:</span> 欢迎来看我的博客鸭~
  <span class="token key atrule">card_weixin</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">face</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//img02.anzhiy.cn/adminuploads/1/2022/09/11/631ddb7c9b250.png
    <span class="token key atrule">backFace</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//img02.anzhiy.cn/adminuploads/1/2022/09/11/631ddeb0900b7.png
  <span class="token key atrule">card_recent_post</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">limit</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># if set 0 will show all</span>
    <span class="token key atrule">sort</span><span class="token punctuation">:</span> date <span class="token comment"># date or updated</span>
    <span class="token key atrule">sort_order</span><span class="token punctuation">:</span> <span class="token comment"># Don&#39;t modify the setting unless you know how it works</span>
  <span class="token key atrule">card_categories</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">limit</span><span class="token punctuation">:</span> <span class="token number">8</span> <span class="token comment"># if set 0 will show all</span>
    <span class="token key atrule">expand</span><span class="token punctuation">:</span> none <span class="token comment"># none/true/false</span>
    <span class="token key atrule">sort_order</span><span class="token punctuation">:</span> <span class="token comment"># Don&#39;t modify the setting unless you know how it works</span>
  <span class="token key atrule">card_tags</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">limit</span><span class="token punctuation">:</span> <span class="token number">40</span> <span class="token comment"># if set 0 will show all</span>
    <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">sort_order</span><span class="token punctuation">:</span> <span class="token comment"># Don&#39;t modify the setting unless you know how it works</span>
  <span class="token key atrule">card_archives</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> monthly <span class="token comment"># yearly or monthly</span>
    <span class="token key atrule">format</span><span class="token punctuation">:</span> MMMM YYYY <span class="token comment"># eg: YYYY年MM月</span>
    <span class="token key atrule">order</span><span class="token punctuation">:</span> <span class="token number">-1</span> <span class="token comment"># Sort of order. 1, asc for ascending; -1, desc for descending</span>
    <span class="token key atrule">limit</span><span class="token punctuation">:</span> <span class="token number">8</span> <span class="token comment"># if set 0 will show all</span>
    <span class="token key atrule">sort_order</span><span class="token punctuation">:</span> <span class="token comment"># Don&#39;t modify the setting unless you know how it works</span>
  <span class="token key atrule">card_webinfo</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">post_count</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">last_push_date</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">sort_order</span><span class="token punctuation">:</span> <span class="token comment"># Don&#39;t modify the setting unless you know how it works</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问人数-busuanzi-uv-和-pv" tabindex="-1"><a class="header-anchor" href="#访问人数-busuanzi-uv-和-pv" aria-hidden="true">#</a> 访问人数 busuanzi (UV 和 PV)</h2>`,11),y={href:"http://busuanzi.ibruce.info/",target:"_blank",rel:"noopener noreferrer"},f=u(`<p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">busuanzi</span><span class="token punctuation">:</span>
  <span class="token key atrule">site_uv</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">site_pv</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">page_pv</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果需要修改 busuanzi 的 CDN 链接，可通过 主题配置文件 的 CDN 中的 option 进行修改</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">CDN</span><span class="token punctuation">:</span>
  <span class="token key atrule">option</span><span class="token punctuation">:</span>
  	<span class="token key atrule">busuanzi</span><span class="token punctuation">:</span> xxxxxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img02.anzhiy.cn/adminuploads/1/2023/04/20/6441312192cba.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://img02.anzhiy.cn/adminuploads/1/2023/04/20/6441312d5e8d0.webp!blogimg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="运行时间" tabindex="-1"><a class="header-anchor" href="#运行时间" aria-hidden="true">#</a> 运行时间</h2><p>网页已运行时间</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Time difference between publish date and now (网页运行时间)</span>
<span class="token comment"># Formal: Month/Day/Year Time or Year/Month/Day Time</span>
<span class="token key atrule">runtimeshow</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">publish_date</span><span class="token punctuation">:</span> 4/1/2021 00<span class="token punctuation">:</span><span class="token datetime number">00:00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img02.anzhiy.cn/adminuploads/1/2023/04/20/6441319e80977.webp" alt="运行时间" tabindex="0" loading="lazy"><figcaption>运行时间</figcaption></figure><h2 id="最新评论" tabindex="-1"><a class="header-anchor" href="#最新评论" aria-hidden="true">#</a> 最新评论</h2><p>最新评论只会在刷新时才会去读取，并不会实时变化</p><p>由于 API 有 访问次数限制，为了避免调用太多，主题默认存取期限为 10 分钟。也就是説，调用后资料会存在 localStorage 里，10 分钟内刷新网站只会去 localStorage 读取资料。 10 分钟期限一过，刷新页面时才会去调取 API 读取新的数据。（ 配置 storage，可自行配置缓存时间）</p><p>在侧边栏显示最新评论板块</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Aside widget - Newest Comments</span>
<span class="token key atrule">newest_comments</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">sort_order</span><span class="token punctuation">:</span> <span class="token comment"># Don&#39;t modify the setting unless you know how it works</span>
  <span class="token key atrule">limit</span><span class="token punctuation">:</span> <span class="token number">6</span>
  <span class="token key atrule">storage</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment"># unit: mins, save data to localStorage</span>
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>配置</th><th>解释</th></tr></thead><tbody><tr><td>limit</td><td>显示的数量</td></tr><tr><td>storage</td><td>设置缓存时间，单位 分钟</td></tr><tr><td>avatar</td><td>是否显示头像</td></tr></tbody></table><figure><img src="https://img02.anzhiy.cn/adminuploads/1/2023/04/20/644132e885d91.webp!blogimg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="右下角按钮-bottom-right-button" tabindex="-1"><a class="header-anchor" href="#右下角按钮-bottom-right-button" aria-hidden="true">#</a> 右下角按钮 (Bottom right button)</h2><h3 id="简繁转换" tabindex="-1"><a class="header-anchor" href="#简繁转换" aria-hidden="true">#</a> 简繁转换</h3><p>简体繁体互换</p><p>右下角会有简繁转换按钮。</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">translate</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># 默认按钮显示文字(网站是简体，应设置为&#39;default: 繁&#39;)</span>
  <span class="token key atrule">default</span><span class="token punctuation">:</span> 简
  <span class="token comment">#网站默认语言，1: 繁体中文, 2: 简体中文</span>
  <span class="token key atrule">defaultEncoding</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token comment">#延迟时间,若不在前, 要设定延迟翻译时间, 如100表示100ms,默认为0</span>
  <span class="token key atrule">translateDelay</span><span class="token punctuation">:</span> <span class="token number">0</span>
  <span class="token comment">#当文字是简体时，按钮显示的文字</span>
  <span class="token key atrule">msgToTraditionalChinese</span><span class="token punctuation">:</span> <span class="token string">&quot;繁&quot;</span>
  <span class="token comment">#当文字是繁体时，按钮显示的文字</span>
  <span class="token key atrule">msgToSimplifiedChinese</span><span class="token punctuation">:</span> <span class="token string">&quot;简&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>简体</p></blockquote><figure><img src="https://img02.anzhiy.cn/adminuploads/1/2023/04/20/644133ef810f7.webp" alt="简体" tabindex="0" loading="lazy"><figcaption>简体</figcaption></figure><blockquote><p>繁体</p></blockquote><figure><img src="https://img02.anzhiy.cn/adminuploads/1/2023/04/20/644133ef85f42.webp" alt="繁体" tabindex="0" loading="lazy"><figcaption>繁体</figcaption></figure><h3 id="阅读模式" tabindex="-1"><a class="header-anchor" href="#阅读模式" aria-hidden="true">#</a> 阅读模式</h3><p>阅读模式下会去掉除文章外的内容，避免干扰阅读。</p><p>只会出现在文章页面，右下角会有阅读模式按钮。</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">readmode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img02.anzhiy.cn/adminuploads/1/2023/04/20/6441350b98041.webp" alt="阅读模式" tabindex="0" loading="lazy"><figcaption>阅读模式</figcaption></figure><h3 id="夜间模式" tabindex="-1"><a class="header-anchor" href="#夜间模式" aria-hidden="true">#</a> 夜间模式</h3><p>右下角会有夜间模式按钮</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># dark mode</span>
<span class="token key atrule">darkmode</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># Toggle Button to switch dark/light mode</span>
  <span class="token key atrule">button</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># Switch dark/light mode automatically (自动切换 dark mode和 light mode)</span>
  <span class="token comment"># autoChangeMode: 1  Following System Settings, if the system doesn&#39;t support dark mode, it will switch dark mode between 6 pm to 6 am</span>
  <span class="token comment"># autoChangeMode: 2  Switch dark mode between 6 pm to 6 am</span>
  <span class="token comment"># autoChangeMode: false</span>
  <span class="token key atrule">autoChangeMode</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token comment"># Set the light mode time. The value is between 0 and 24. If not set, the default value is 6 and 18</span>
  <span class="token key atrule">start</span><span class="token punctuation">:</span> <span class="token comment"># 8</span>
  <span class="token key atrule">end</span><span class="token punctuation">:</span> <span class="token comment"># 22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>解释</th></tr></thead><tbody><tr><td>button</td><td>是否在右下角显示日夜模式切换按钮</td></tr><tr><td>autoChangeMode</td><td>自动切换的模式</td></tr><tr><td>autoChangeMode</td><td>autoChangeMode: 1 跟随系统而变化，不支持的浏览器/系统将按照时间 start 到 end 之间切换为 light mode<br>autoChangeMode: 2 只按照时间 start 到 end 之间切换为 light mode ,其余时间为 dark mode<br>autoChangeMode: false 取消自动切换<br></td></tr><tr><td>start</td><td>light mode 的开始时间</td></tr><tr><td>end</td><td>light mode 的结束时间</td></tr></tbody></table><h2 id="按钮排序" tabindex="-1"><a class="header-anchor" href="#按钮排序" aria-hidden="true">#</a> 按钮排序</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Don&#39;t modify the following settings unless you know how they work (非必要请不要修改 )</span>
<span class="token comment"># Choose: readmode,translate,darkmode,hideAside,toc,chat,comment</span>
<span class="token comment"># Don&#39;t repeat 不要重复</span>
<span class="token key atrule">rightside_item_order</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">hide</span><span class="token punctuation">:</span> <span class="token comment"># readmode,translate,darkmode,hideAside</span>
  <span class="token key atrule">show</span><span class="token punctuation">:</span> <span class="token comment"># toc,chat,comment</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签外挂-tag-plugins" tabindex="-1"><a class="header-anchor" href="#标签外挂-tag-plugins" aria-hidden="true">#</a> 标签外挂（Tag Plugins）</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>标签外挂是 Hexo 独有的功能，并不是标准的 Markdown 格式。 以下的写法，只适用于 AnZhiYu 主题，用在其它主题上不会有效果，甚至可能会报错。使用前请留意</p></div><div class="hint-container warning"><p class="hint-container-title">警告</p><p>标签外挂虽然能为主题带来一些额外的功能和 UI 方面的强化，但是，标签外挂也有明显的限制，使用时请留意。</p></div><h3 id="note-bootstrap-callout" tabindex="-1"><a class="header-anchor" href="#note-bootstrap-callout" aria-hidden="true">#</a> Note (Bootstrap Callout)</h3>`,46),_=n("p",null,"修改主题配置文件",-1),w=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"note"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token comment"},"# Note tag style values:"),s(`
  `),n("span",{class:"token comment"},"#  - simple    bs-callout old alert style. Default."),s(`
  `),n("span",{class:"token comment"},"#  - modern    bs-callout new (v2-v3) alert style."),s(`
  `),n("span",{class:"token comment"},"#  - flat      flat callout style with background, like on Mozilla or StackOverflow."),s(`
  `),n("span",{class:"token comment"},"#  - disabled  disable all CSS styles import of note tag."),s(`
  `),n("span",{class:"token key atrule"},"style"),n("span",{class:"token punctuation"},":"),s(` simple
  `),n("span",{class:"token key atrule"},"icons"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
  `),n("span",{class:"token key atrule"},"border_radius"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"3"),s(`
  `),n("span",{class:"token comment"},"# Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6)."),s(`
  `),n("span",{class:"token comment"},"# Offset also applied to label tag variables. This option can work with disabled note tag."),s(`
  `),n("span",{class:"token key atrule"},"light_bg_offset"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"0"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("p",null,[n("code",null,"Note"),s("标签外挂有两种用法。"),n("code",null,"icons"),s("和"),n("code",null,"light_bg_offset"),s("只对方法一生效。")],-1),z=n("p",null,[n("code",null,"fontawesome"),s("图标需开启主题配置文件中"),n("code",null,"icons.fontawesome")],-1),T=n("p",null,[n("code",null,"方法一")],-1),A=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s("{% note "),n("span",{class:"token url"},[s("["),n("span",{class:"token content"},"class"),s("] ["),n("span",{class:"token variable"},"no-icon"),s("]")]),s(` [style] %}
Any content (support inline tags too.io).
{% endnote %}
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("p",null,[n("code",null,"方法二")],-1),D=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s("{% note "),n("span",{class:"token url"},[s("["),n("span",{class:"token content"},"color"),s("] ["),n("span",{class:"token variable"},"icon"),s("]")]),s(` [style] %}
Any content (support inline tags too.io).
{% endnote %}
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("p",null,[n("code",null,"方法一")],-1),N=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"参数"),n("th",{style:{"text-align":"left"}},"用法")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"class"),n("td",{style:{"text-align":"left"}},[s("【可选】标识，不同的标识有不同的配色"),n("br"),s("（ default / primary / success / info / warning / danger ）")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"no-icon"),n("td",{style:{"text-align":"left"}},"【可选】不显示 icon")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"style"),n("td",{style:{"text-align":"left"}},[s("【可选】可以覆盖配置中的 style"),n("br"),s("（simple/modern/flat/disabled）")])])])],-1),j=n("p",null,[n("code",null,"方法二")],-1),C=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"参数"),n("th",{style:{"text-align":"left"}},"用法")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"class"),n("td",{style:{"text-align":"left"}},[s("【可选】标识，不同的标识有不同的配色"),n("br"),s("（ default / blue / pink / red / purple / orange / green ）")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"no-icon"),n("td",{style:{"text-align":"left"}},[s("【可选】可配置自定义 icon (支持 fontawesome 图标和主题内置的阿里图标,"),n("code",null,"fontawesome"),s("图标需开启主题配置文件中"),n("code",null,"icons.fontawesome"),s(", 也可以配置 no-icon )")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"style"),n("td",{style:{"text-align":"left"}},[s("【可选】可以覆盖配置中的 style"),n("br"),s("（simple/modern/flat/disabled）")])])])],-1),V=n("p",null,[n("code",null,"方法一")],-1),P=n("ol",null,[n("li",null,[n("code",null,"simple"),s("样式")])],-1),U=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note simple %}默认 提示块标签{% endnote %}
{% note default simple %}default 提示块标签{% endnote %}
{% note primary simple %}primary 提示块标签{% endnote %}
{% note success simple %}success 提示块标签{% endnote %}
{% note info simple %}info 提示块标签{% endnote %}
{% note warning simple %}warning 提示块标签{% endnote %}
{% note danger simple %}danger 提示块标签{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("ol",{start:"2"},[n("li",null,[n("code",null,"modern"),s("样式")])],-1),G=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note modern %}默认 提示块标签{% endnote %}
{% note default modern %}default 提示块标签{% endnote %}
{% note primary modern %}primary 提示块标签{% endnote %}
{% note success modern %}success 提示块标签{% endnote %}
{% note info modern %}info 提示块标签{% endnote %}
{% note warning modern %}warning 提示块标签{% endnote %}
{% note danger modern %}danger 提示块标签{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("ol",{start:"3"},[n("li",null,[n("code",null,"flat"),s("样式")])],-1),R=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note flat %}默认 提示块标签{% endnote %}
{% note default flat %}default 提示块标签{% endnote %}
{% note primary flat %}primary 提示块标签{% endnote %}
{% note success flat %}success 提示块标签{% endnote %}
{% note info flat %}info 提示块标签{% endnote %}
{% note warning flat %}warning 提示块标签{% endnote %}
{% note danger flat %}danger 提示块标签{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("ol",{start:"4"},[n("li",null,[n("code",null,"disabled"),s("样式")])],-1),K=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note disabled %}默认 提示块标签{% endnote %}
{% note default disabled %}default 提示块标签{% endnote %}
{% note primary disabled %}primary 提示块标签{% endnote %}
{% note success disabled %}success 提示块标签{% endnote %}
{% note info disabled %}info 提示块标签{% endnote %}
{% note warning disabled %}warning 提示块标签{% endnote %}
{% note danger disabled %}danger 提示块标签{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("ol",{start:"5"},[n("li",null,[n("code",null,"no-icon"),s("样式")])],-1),W=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note no-icon %}默认 提示块标签{% endnote %}
{% note default no-icon %}default 提示块标签{% endnote %}
{% note primary no-icon %}primary 提示块标签{% endnote %}
{% note success no-icon %}success 提示块标签{% endnote %}
{% note info no-icon %}info 提示块标签{% endnote %}
{% note warning no-icon %}warning 提示块标签{% endnote %}
{% note danger no-icon %}danger 提示块标签{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("p",null,[n("code",null,"方法二")],-1),F=n("p",null,[s("图标支持 "),n("code",null,"fontawesome"),s(" 和 "),n("code",null,"主题内置的阿里图标"),s("，使用方法为加上对应的类名，"),n("code",null,"fontawesome"),s("图标需开启主题配置文件中"),n("code",null,"icons.fontawesome"),s("，默认未开启 fontawesome")],-1),H=n("ol",null,[n("li",null,[n("p",null,[s("simple 样式 "),n("code",null,"主题内置阿里图标")]),n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note 'anzhiyufont anzhiyu-icon-rocket' simple %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' simple %}2022 年快到了....{% endnote %}
{% note pink 'anzhiyufont anzhiyu-icon-instagram' simple %}小心开车 安全至上{% endnote %}
{% note red 'anzhiyufont anzhiyu-icon-fan' simple%}这是三片呢？还是四片？{% endnote %}
{% note orange 'anzhiyufont anzhiyu-icon-dengpao' simple %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'anzhiyufont anzhiyu-icon-sanmingzhi' simple %}剪刀石头布{% endnote %}
{% note green 'anzhiyufont anzhiyu-icon-ic_train' simple %}前端最讨厌的浏览器{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,[n("code",null,"fontawesome 图标"),s("，开启主题配置文件中的"),n("code",null,"icons.fontawesome"),s("为"),n("code",null,"true"),s("后可见")]),n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note 'fab fa-cc-visa' simple %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}2022 年快到了....{% endnote %}
{% note pink 'fas fa-car-crash' simple %}小心开车 安全至上{% endnote %}
{% note red 'icon-fan' simple%}这是三片呢？还是四片？{% endnote %}
{% note orange 'fas fa-battery-half' simple %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}剪刀石头布{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}前端最讨厌的浏览器{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("li",null,[n("p",null,[s("modern 样式 "),n("code",null,"主题内置阿里图标")]),n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note 'anzhiyufont anzhiyu-icon-rocket' modern %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' modern %}2022 年快到了....{% endnote %}
{% note pink 'anzhiyufont anzhiyu-icon-instagram' modern %}小心开车 安全至上{% endnote %}
{% note red 'anzhiyufont anzhiyu-icon-fan' modern%}这是三片呢？还是四片？{% endnote %}
{% note orange 'anzhiyufont anzhiyu-icon-dengpao' modern %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'anzhiyufont anzhiyu-icon-sanmingzhi' modern %}剪刀石头布{% endnote %}
{% note green 'anzhiyufont anzhiyu-icon-ic_train' modern %}前端最讨厌的浏览器{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,[n("code",null,"fontawesome 图标"),s("，开启主题配置文件中的"),n("code",null,"icons.fontawesome"),s("为"),n("code",null,"true"),s("后可见")]),n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note 'fab fa-cc-visa' modern %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}2021 年快到了....{% endnote %}
{% note pink 'fas fa-car-crash' modern %}小心开车 安全至上{% endnote %}
{% note red 'icon-fan' modern%}这是三片呢？还是四片？{% endnote %}
{% note orange 'fas fa-battery-half' modern %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}剪刀石头布{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}前端最讨厌的浏览器{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("li",null,[n("p",null,[s("flat 样式 "),n("code",null,"主题内置阿里图标")]),n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note 'anzhiyufont anzhiyu-icon-rocket' flat %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' flat %}2022 年快到了....{% endnote %}
{% note pink 'anzhiyufont anzhiyu-icon-instagram' flat %}小心开车 安全至上{% endnote %}
{% note red 'anzhiyufont anzhiyu-icon-fan' flat%}这是三片呢？还是四片？{% endnote %}
{% note orange 'anzhiyufont anzhiyu-icon-dengpao' flat %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'anzhiyufont anzhiyu-icon-sanmingzhi' flat %}剪刀石头布{% endnote %}
{% note green 'anzhiyufont anzhiyu-icon-ic_train' flat %}前端最讨厌的浏览器{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,[n("code",null,"fontawesome 图标"),s("，开启主题配置文件中的"),n("code",null,"icons.fontawesome"),s("为"),n("code",null,"true"),s("后可见")]),n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note 'fab fa-cc-visa' flat %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'fas fa-bullhorn' flat %}2021 年快到了....{% endnote %}
{% note pink 'fas fa-car-crash' flat %}小心开车 安全至上{% endnote %}
{% note red 'icon-fan' flat%}这是三片呢？还是四片？{% endnote %}
{% note orange 'fas fa-battery-half' flat %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}剪刀石头布{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}前端最讨厌的浏览器{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("li",null,[n("p",null,[s("disabled 样式 "),n("code",null,"主题内置阿里图标")]),n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note 'anzhiyufont anzhiyu-icon-rocket' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' disabled %}2022 年快到了....{% endnote %}
{% note pink 'anzhiyufont anzhiyu-icon-instagram' disabled %}小心开车 安全至上{% endnote %}
{% note red 'anzhiyufont anzhiyu-icon-fan' disabled%}这是三片呢？还是四片？{% endnote %}
{% note orange 'anzhiyufont anzhiyu-icon-dengpao' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'anzhiyufont anzhiyu-icon-sanmingzhi' disabled %}剪刀石头布{% endnote %}
{% note green 'anzhiyufont anzhiyu-icon-ic_train' disabled %}前端最讨厌的浏览器{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,[n("code",null,"fontawesome 图标"),s("，开启主题配置文件中的"),n("code",null,"icons.fontawesome"),s("为"),n("code",null,"true"),s("后可见")]),n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note 'fab fa-cc-visa' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}2021 年快到了....{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}小心开车 安全至上{% endnote %}
{% note red 'icon-fan' disabled %}这是三片呢？还是四片？{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}剪刀石头布{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}前端最讨厌的浏览器{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("li",null,[n("p",null,"no-icon 样式"),n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% note no-icon %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue no-icon %}2021 年快到了....{% endnote %}
{% note pink no-icon %}小心开车 安全至上{% endnote %}
{% note red no-icon %}这是三片呢？还是四片？{% endnote %}
{% note orange no-icon %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple no-icon %}剪刀石头布{% endnote %}
{% note green no-icon %}前端最讨厌的浏览器{% endnote %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])],-1),E=n("h3",{id:"gallery-相册图库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gallery-相册图库","aria-hidden":"true"},"#"),s(" Gallery 相册图库")],-1),J=n("p",null,"一个图库集合。",-1),Z=n("p",null,"gallerygroup 相册图库",-1),L=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gallery-group-main"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("ul",null,[n("li",null,[n("p",null,"gallerygroup 相册图库"),n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"参数名"),n("th",{style:{"text-align":"left"}},"释义")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"name"),n("td",{style:{"text-align":"left"}},"图库名字")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"description"),n("td",{style:{"text-align":"left"}},"图库描述")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"link"),n("td",{style:{"text-align":"left"}},"链接到对应相册的地址")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"img-url"),n("td",{style:{"text-align":"left"}},"图库封面")])])])]),n("li",null,[n("p",null,[s("gallery 相册 区别于旧版的 Gallery 相册,新的 Gallery 相册会自动根据图片长度进行排版，书写也更加方便，与 markdown 格式一样。可根据需要插入到相应的 md。无需再自己配置长宽。"),n("strong",null,"建议在粘贴时故意使用长短、大小、横竖不一的图片"),s("，会有更好的效果。（尺寸完全相同的图片只会平铺输出，效果很糟糕）")])])],-1),X=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"相关信息"),n("p",null,"思维拓展一下，相册图库的实质其实就是个快捷方式，可以自定义添加描述、封面、链接。那么我们未必要把它当做一个相册，完全可以作为一个链接卡片，链接到视频、QQ、友链都是不错的选择。")],-1),$=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% gallery %}
markdown 图片格式
{% endgallery %}

{% gallery true,220,10 %}
markdown 图片格式
{% endgallery %}

{% gallery true,,10 %}
markdown 图片格式
{% endgallery %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nn=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"参数名"),n("th",null,"释义")])]),n("tbody",null,[n("tr",null,[n("td",null,"lazyload"),n("td",null,[s("【可选】点击按钮加载更多图片，填写 true/false。默认为 "),n("code",null,"false"),s("。")])]),n("tr",null,[n("td",null,"rowHeight"),n("td",null,[s("【可选】图片显示的高度，如果需要一行显示更多的图片，可设置更小的数字。默认为 "),n("code",null,"220"),s("。")])]),n("tr",null,[n("td",null,"limit"),n("td",null,[s("【可选】每次加载多少张照片。默认为 "),n("code",null,"10"),s("。")])])])],-1),sn=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% gallery url,[link],[lazyload],[rowHeight],[limit] %}
{% endgallery %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),en=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"参数名"),n("th",null,"释义")])]),n("tbody",null,[n("tr",null,[n("td",null,"url"),n("td",null,"【必须】 识别词")]),n("tr",null,[n("td",null,"link"),n("td",null,"【必须】远程的 json 链接")]),n("tr",null,[n("td",null,"lazyload"),n("td",null,[s("【可选】点击按钮加载更多图片，填写 true/false。默认为 "),n("code",null,"false"),s("。")])]),n("tr",null,[n("td",null,"rowHeight"),n("td",null,[s("【可选】图片显示的高度，如果需要一行显示更多的图片，可设置更小的数字。默认为 "),n("code",null,"220"),s("。")])]),n("tr",null,[n("td",null,"limit"),n("td",null,[s("【可选】每次加载多少张照片。默认为 "),n("code",null,"10"),s("。")])])])],-1),an=n("blockquote",null,[n("p",null,"远程链接 Json 的例子")],-1),ln=n("p",null,[s("有三个参数，"),n("code",null,"url"),s("是必须存在的，"),n("code",null,"alt"),s(" 和 "),n("code",null,"title"),s(" 可有，也可没有。")],-1),tn=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0556.jpg"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"alt"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"IMG_0556.jpg"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"title"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"这是title"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0472.jpg"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"alt"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"IMG_0472.jpg"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0453.jpg"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"alt"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0931.jpg"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"alt"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),on=n("blockquote",null,[n("p",null,"示例")],-1),cn=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% gallery url,https://xxxx.com/sss.json %}
{% endgallery %}

{% gallery url,https://xxxx.com/sss.json,true,220,10 %}
{% endgallery %}

{% gallery url,https://xxxx.com/sss.json,true,,10 %}
{% endgallery %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dn=n("ol",null,[n("li",null,[n("p",null,"gallerygroup 相册图库"),n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gallery-group-main"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
{% galleryGroup MC 在Rikkaの六花服务器里留下的足迹 '/gallery/MC/' https://cdn.cbd.int/akilar-candyassets@1.0.36/image/1.jpg %}
{% galleryGroup Gundam 哦咧哇gundam哒！ '/gallery/Gundam/' https://cdn.cbd.int/akilar-candyassets@1.0.36/image/20200907110508327.png %}
{% galleryGroup I-am-Akilar 某种意义上也算自拍吧 '/gallery/I-am-Akilar/' https://cdn.cbd.int/akilar-candyassets@1.0.36/image/20200907113116651.png %}
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("li",null,[n("p",null,"gallery 相册"),n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`{% gallery true,,2 %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])],-1),un={class:"hint-container info"},rn=n("p",{class:"hint-container-title"},"相关信息",-1),pn=n("p",null,[s("对于很多同学提问的"),n("code",null,"gallerygroup"),s("和"),n("code",null,"gallery"),s("相册页的链接问题。这里说下我个人的使用习惯。 一般使用相册图库的话，可以在导航栏加一个 gallery 的 page("),n("strong",null,[s("使用指令"),n("code",null,"hexo new page gallery"),s("添加")]),s(")，里面放相册图库作为封面。然后在"),n("code",null,"[Blogroot]/source/gallery/"),s("下面建立相应的文件夹，例如若按照这里的示例，若欲使用"),n("code",null,"/gallery/MC/"),s("路径访问 MC 相册，则需要新建"),n("code",null,"[Blogroot]/source/gallery/MC/index.md"),s("，并在里面填入"),n("code",null,"gallery"),s("相册内容。")],-1),mn={href:"https://anzhiy.cn/posts/220c.html",target:"_blank",rel:"noopener noreferrer"},bn=n("h3",{id:"tag-hide",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tag-hide","aria-hidden":"true"},"#"),s(" tag-hide")],-1),kn=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"警告"),n("p",null,"请注意，tag-hide 内的标签外挂 content 内都不建议有 h1 - h6 等标题。因为 Toc 会把隐藏内容标题也显示出来，而且当滚动屏幕时，如果隐藏内容没有显示出来，会导致 Toc 的滚动出现异常。")],-1),vn=n("p",null,"如果你想把一些文字、内容隐藏起来，并提供按钮让用户点击显示。可以使用这个标签外挂。",-1),gn=n("p",null,[n("code",null,"inline"),s(" 在文本里面添加按钮隐藏内容，只限文字")],-1),hn=n("p",null,[s("( content 不能包含英文逗号，可用"),n("code",null,"&sbquo;"),s(")")],-1),yn=n("div",{class:"language-MARKDOWN line-numbers-mode","data-ext":"MARKDOWN"},[n("pre",{class:"language-MARKDOWN"},[n("code",null,`{% hideInline content,display,bg,color %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),fn=n("ul",null,[n("li",null,[n("p",null,"content: 文本内容")]),n("li",null,[n("p",null,"display: 按钮显示的文字(可选)")]),n("li",null,[n("p",null,"bg: 按钮的背景颜色(可选)")]),n("li",null,[n("p",null,"color: 按钮文字的颜色(可选)")])],-1),_n=n("blockquote",null,[n("p",null,"示例代码")],-1),wn=n("div",{class:"language-MARKDOWN line-numbers-mode","data-ext":"MARKDOWN"},[n("pre",{class:"language-MARKDOWN"},[n("code",null,`哪个英文字母最酷？ {% hideInline 因为西装裤(C装酷),查看答案,#FF7242,#fff %}
门里站着一个人? {% hideInline 闪 %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xn=n("p",null,[n("code",null,"block"),s(" 独立的 block 隐藏内容，可以隐藏很多内容，包括图片，代码块等等 ( content 不能包含英文逗号，可用"),n("code",null,"&sbquo;"),s(")")],-1),zn=n("div",{class:"language-MARKDOWN line-numbers-mode","data-ext":"MARKDOWN"},[n("pre",{class:"language-MARKDOWN"},[n("code",null,`{% hideBlock display,bg,color %}
content
{% endhideBlock %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Tn=n("ul",null,[n("li",null,"content: 文本内容"),n("li",null,"display: 按钮显示的文字(可选)"),n("li",null,"bg: 按钮的背景颜色(可选)"),n("li",null,"color: 按钮文字的颜色(可选)")],-1),An=n("blockquote",null,[n("p",null,"示例代码")],-1),Mn=n("div",{class:"language-MARKDOWN line-numbers-mode","data-ext":"MARKDOWN"},[n("pre",{class:"language-MARKDOWN"},[n("code",null,`查看答案
{% hideBlock 查看答案 %}
傻子，怎么可能有答案
{% endhideBlock %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Dn=n("p",null,"如果你需要展示的内容太多，可以把它隐藏在收缩框里，需要时再把它展开。",-1),qn=n("p",null,[s("( display 不能包含英文逗号，可用"),n("code",null,"&sbquo;"),s(")")],-1),Nn=n("div",{class:"language-MARKDOWN line-numbers-mode","data-ext":"MARKDOWN"},[n("pre",{class:"language-MARKDOWN"},[n("code",null,`{% hideToggle display,bg,color %}
content
{% endhideToggle %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),jn=n("p",null,"示例代码",-1),Cn=n("div",{class:"language-MARKDOWN line-numbers-mode","data-ext":"MARKDOWN"},[n("pre",{class:"language-MARKDOWN"},[n("code",null,`{% hideToggle Butterfly安装方法 %}
在你的博客根目录里

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

如果想要安装比较新的dev分支，可以

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Vn=n("h3",{id:"分栏-tabs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分栏-tabs","aria-hidden":"true"},"#"),s(" 分栏 Tabs")],-1),Pn=n("p",null,"使用方法",-1),Un=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`{% tabs Unique name, [index] %}

`),n("span",{class:"token comment"},"<!-- tab [Tab caption] [@icon] -->"),s(`

Any content (support inline tags too).

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

{% endtabs %}
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),On=n("ol",null,[n("li",null,[s("Unique name : "),n("ul",null,[n("li",null,"选项卡块标签的唯一名称，不带逗号。"),n("li",null,"将在#id 中用作每个标签及其索引号的前缀。"),n("li",null,"如果名称中包含空格，则对于生成#id，所有空格将由破折号代替。"),n("li",null,"仅当前帖子/页面的 URL 必须是唯一的！")])]),n("li",null,[s("[index]: "),n("ul",null,[n("li",null,"活动选项卡的索引号。"),n("li",null,"如果未指定，将选择第一个标签（1）。"),n("li",null,"如果 index 为-1，则不会选择任何选项卡。"),n("li",null,"可选参数。")])]),n("li",null,[s("[Tab caption]: "),n("ul",null,[n("li",null,"当前选项卡的标题。"),n("li",null,"如果未指定标题，则带有制表符索引后缀的唯一名称将用作制表符的标题。"),n("li",null,"如果未指定标题，但指定了图标，则标题将为空。"),n("li",null,"可选参数。")])]),n("li",null,"[@icon]: - FontAwesome 图标名称（全名，看起来像“ fas fa-font”） - 可以指定带空格或不带空格； - 例如'Tab caption @icon' 和 'Tab caption@icon'. - 可选参数。")],-1),Gn=n("blockquote",null,[n("p",null,"Demo 1 - 预设选择第一个【默认】")],-1),In=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`{% tabs test1 %}

`),n("span",{class:"token comment"},"<!-- tab -->"),s(`

`),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"This is Tab 1."),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

`),n("span",{class:"token comment"},"<!-- tab -->"),s(`

`),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"This is Tab 2."),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

`),n("span",{class:"token comment"},"<!-- tab -->"),s(`

`),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"This is Tab 3."),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

{% endtabs %}
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Rn=n("blockquote",null,[n("p",null,"Demo 2 - 预设选择 tabs")],-1),Bn=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`{% tabs test2, 3 %}

`),n("span",{class:"token comment"},"<!-- tab -->"),s(`

`),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"This is Tab 1."),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

`),n("span",{class:"token comment"},"<!-- tab -->"),s(`

`),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"This is Tab 2."),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

`),n("span",{class:"token comment"},"<!-- tab -->"),s(`

`),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"This is Tab 3."),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

{% endtabs %}
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Kn=n("blockquote",null,[n("p",null,"Demo 3 - 没有预设值")],-1),Sn=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`{% tabs test3, -1 %}

`),n("span",{class:"token comment"},"<!-- tab -->"),s(`

`),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"This is Tab 1."),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

`),n("span",{class:"token comment"},"<!-- tab -->"),s(`

`),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"This is Tab 2."),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

`),n("span",{class:"token comment"},"<!-- tab -->"),s(`

`),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"This is Tab 3."),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

{% endtabs %}
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Wn=n("blockquote",null,[n("p",null,"Demo 4 - 自定义 Tab 名 + 只有 icon + icon 和 Tab 名")],-1),Yn=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`{% tabs test4 %}

`),n("span",{class:"token comment"},"<!-- tab 第一个Tab -->"),s(`

`),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"tab 名字为第一个 Tab"),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

`),n("span",{class:"token comment"},"<!-- tab @fab fa-apple-pay -->"),s(`

`),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"只有图标 没有 Tab 名字"),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

`),n("span",{class:"token comment"},"<!-- tab 炸弹@fas fa-bomb -->"),s(`

`),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"名字+icon"),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token comment"},"<!-- endtab -->"),s(`

{% endtabs %}
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function Fn(Hn,En){const c=d("ExternalLinkIcon"),o=d("Tabs");return p(),m("div",null,[n("div",k,[v,n("p",null,[s("本教程更新于 2023 年 5 月 22 日，教程的内容针对最新的 anzhiyu 主题(如果你是旧版本，教程会有出入，请留意) 🐟 安知鱼 已经更新到 "),n("a",g,[s("1.2.1"),i(c)])])]),h,n("p",null,[s("访问 busuanzi 的"),n("a",y,[s("官方网站"),i(c)]),s("查看更多的介绍。")]),f,i(o,{id:"378",data:[{title:"通用配置"},{title:"语法格式"},{title:"配置参数"},{title:"示例源码"}],"tab-id":"note"},{tab0:e(({title:a,value:l,isActive:t})=>[_,w,x,z]),tab1:e(({title:a,value:l,isActive:t})=>[T,A,M,D]),tab2:e(({title:a,value:l,isActive:t})=>[q,N,j,C]),tab3:e(({title:a,value:l,isActive:t})=>[V,P,U,O,G,I,R,B,K,S,W,Y,F,H]),_:1}),E,J,i(o,{id:"583",data:[{title:"标签语法"},{title:"参数配置"},{title:"本地"},{title:"远程"},{title:"示例源码"}],"tab-id":"gallery"},{tab0:e(({title:a,value:l,isActive:t})=>[Z,L]),tab1:e(({title:a,value:l,isActive:t})=>[Q,X]),tab2:e(({title:a,value:l,isActive:t})=>[$,nn]),tab3:e(({title:a,value:l,isActive:t})=>[sn,en,an,ln,tn,on,cn]),tab4:e(({title:a,value:l,isActive:t})=>[dn,n("div",un,[rn,pn,n("p",null,[s("注意 ⚠️：本站相册集为单独优化，可参考"),n("a",mn,[s("配置相册页面"),i(c)]),s("。")])])]),_:1}),bn,kn,vn,i(o,{id:"804",data:[{title:"inline"},{title:"block"},{title:"hideToggle"}],"tab-id":"tag-hide"},{tab0:e(({title:a,value:l,isActive:t})=>[gn,hn,yn,fn,_n,wn]),tab1:e(({title:a,value:l,isActive:t})=>[xn,zn,Tn,An,Mn]),tab2:e(({title:a,value:l,isActive:t})=>[Dn,qn,Nn,jn,Cn]),_:1}),Vn,Pn,i(o,{id:"896",data:[{title:"标签语法"},{title:"配置参数"},{title:"示例源码"}],active:2,"tab-id":"Tabs"},{tab0:e(({title:a,value:l,isActive:t})=>[Un]),tab1:e(({title:a,value:l,isActive:t})=>[On]),tab2:e(({title:a,value:l,isActive:t})=>[Gn,In,Rn,Bn,Kn,Sn,Wn,Yn]),_:1})])}const Zn=r(b,[["render",Fn],["__file","site-configuration2.html.vue"]]);export{Zn as default};
