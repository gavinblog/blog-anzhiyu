import{_ as d,M as u,p as r,q as m,R as n,t as s,N as a,V as t,a1 as p}from"./framework-2fd1fcd7.js";const k={},v={class:"hint-container warning"},b=n("p",{class:"hint-container-title"},"警告",-1),h={href:"https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases/tag/1.4.0",target:"_blank",rel:"noopener noreferrer"},g=p(`<h2 id="footer-设置" tabindex="-1"><a class="header-anchor" href="#footer-设置" aria-hidden="true">#</a> Footer 设置</h2><p><code>since</code> 是一个来展示你站点起始时间的选项。它位于页面的最底部。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Footer Settings</span>
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
    <span class="token punctuation">-</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//blog.anheyu.com/
      <span class="token key atrule">shields</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/anzhiyu<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>static@1.0.9/img/Theme<span class="token punctuation">-</span>AnZhiYu<span class="token punctuation">-</span>2E67D3.svg
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>解释</th></tr></thead><tbody><tr><td>owner</td><td>页脚网站所有者@2020-当前年份</td></tr><tr><td>owner.enable</td><td>页脚网站所有者是否启用</td></tr><tr><td>owner.since</td><td>页脚年份，控制台中打印的运行时间也来自这里</td></tr><tr><td>runtime</td><td>运行时间</td></tr><tr><td>runtime.enable</td><td>运行时间是否启用</td></tr><tr><td>runtime.launch_time</td><td>网站上线时间</td></tr><tr><td>runtime.work_img</td><td>页脚上班时间的徽标</td></tr><tr><td>runtime.work_description</td><td>页脚上班时间的 title 描述</td></tr><tr><td>runtime.offduty_img</td><td>页脚下班时间的徽标</td></tr><tr><td>runtime.offduty_description</td><td>页脚下班时间的 title 描述</td></tr><tr><td>bdageitem</td><td>徽标配置项</td></tr><tr><td>bdageitem.link</td><td>徽标配置链接</td></tr><tr><td>bdageitem.shields</td><td>徽标配置徽标</td></tr><tr><td>bdageitem.message</td><td>徽标配置徽标 title</td></tr></tbody></table><figure><img src="https://img02.anheyu.com/adminuploads/1/2023/04/20/64412c4c08266.png!blogimg" alt="页脚" tabindex="0" loading="lazy"><figcaption>页脚</figcaption></figure><figure><img src="https://img02.anheyu.com/adminuploads/1/2023/04/20/64412cb6bbbf5.png!blogimg" alt="页脚你好自动定义文字" tabindex="0" loading="lazy"><figcaption>页脚你好自动定义文字</figcaption></figure><p><code>socialBar</code>和<code>list</code>用于展示你的社交按钮及站内部分导航，它位于页面的底部。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token key atrule">socialBar</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">centerImg</span><span class="token punctuation">:</span>
    <span class="token key atrule">left</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> email
        <span class="token key atrule">link</span><span class="token punctuation">:</span> mailto<span class="token punctuation">:</span>anzhiyu<span class="token punctuation">-</span>c@qq.com
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> anzhiyufont anzhiyu<span class="token punctuation">-</span>icon<span class="token punctuation">-</span>envelope
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 微博
        <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//weibo.com/u/6378063631
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> anzhiyufont anzhiyu<span class="token punctuation">-</span>icon<span class="token punctuation">-</span>weibo
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> facebook
        <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.facebook.com/profile.php<span class="token punctuation">?</span>id=100092208016287<span class="token important">&amp;sk=about</span>
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> anzhiyufont anzhiyu<span class="token punctuation">-</span>icon<span class="token punctuation">-</span>facebook1
    <span class="token key atrule">right</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Github
        <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/anzhiyu<span class="token punctuation">-</span>c
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> anzhiyufont anzhiyu<span class="token punctuation">-</span>icon<span class="token punctuation">-</span>github
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Bilibili
        <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//space.bilibili.com/372204786
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> anzhiyufont anzhiyu<span class="token punctuation">-</span>icon<span class="token punctuation">-</span>bilibili
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 抖音
        <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//v.douyin.com/DwCpMEy/
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> anzhiyufont anzhiyu<span class="token punctuation">-</span>icon<span class="token punctuation">-</span>tiktok
  <span class="token key atrule">list</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">randomFriends</span><span class="token punctuation">:</span> <span class="token number">3</span>
    <span class="token key atrule">project</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 服务
        <span class="token key atrule">links</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 51la统计
            <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//v6.51.la/
          <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 十年之约
            <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.foreverblog.cn/
          <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 开往
            <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/travellings<span class="token punctuation">-</span>link/travellings
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 主题
        <span class="token key atrule">links</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 文档
            <span class="token key atrule">link</span><span class="token punctuation">:</span> /docs/
          <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 源码
            <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/anzhiyu<span class="token punctuation">-</span>c/hexo<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>anzhiyu
          <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 更新日志
            <span class="token key atrule">link</span><span class="token punctuation">:</span> /update/
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 导航
        <span class="token key atrule">links</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 即刻短文
            <span class="token key atrule">link</span><span class="token punctuation">:</span> /essay/
          <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 友链文章
            <span class="token key atrule">link</span><span class="token punctuation">:</span> /fcircle/
          <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 留言板
            <span class="token key atrule">link</span><span class="token punctuation">:</span> /comments/
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 协议
        <span class="token key atrule">links</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 隐私协议
            <span class="token key atrule">link</span><span class="token punctuation">:</span> /privacy/
          <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Cookies
            <span class="token key atrule">link</span><span class="token punctuation">:</span> /cookies/
          <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 版权协议
            <span class="token key atrule">link</span><span class="token punctuation">:</span> /copyright/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>解释</th></tr></thead><tbody><tr><td>centerImg</td><td>页脚社交头像</td></tr><tr><td>randomFriends</td><td>随机友链数量</td></tr></tbody></table><h2 id="侧边栏设置-aside" tabindex="-1"><a class="header-anchor" href="#侧边栏设置-aside" aria-hidden="true">#</a> 侧边栏设置 (aside)</h2><p>可自行决定哪个项目需要显示，可决定位置，也可以设置不显示侧边栏。</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># aside (侧边栏)</span>
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
    <span class="token key atrule">face</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//img02.anheyu.com/adminuploads/1/2022/09/11/631ddb7c9b250.png
    <span class="token key atrule">backFace</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//img02.anheyu.com/adminuploads/1/2022/09/11/631ddeb0900b7.png
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问人数-busuanzi-uv-和-pv" tabindex="-1"><a class="header-anchor" href="#访问人数-busuanzi-uv-和-pv" aria-hidden="true">#</a> 访问人数 busuanzi (UV 和 PV)</h2>`,14),y={href:"http://busuanzi.ibruce.info/",target:"_blank",rel:"noopener noreferrer"},_=p(`<p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">busuanzi</span><span class="token punctuation">:</span>
  <span class="token key atrule">site_uv</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">site_pv</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">page_pv</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果需要修改 busuanzi 的 CDN 链接，可通过 主题配置文件 的 CDN 中的 option 进行修改</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">CDN</span><span class="token punctuation">:</span>
  <span class="token key atrule">option</span><span class="token punctuation">:</span>
  	<span class="token key atrule">busuanzi</span><span class="token punctuation">:</span> xxxxxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img02.anheyu.com/adminuploads/1/2023/04/20/6441312192cba.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://img02.anheyu.com/adminuploads/1/2023/04/20/6441312d5e8d0.webp!blogimg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="运行时间" tabindex="-1"><a class="header-anchor" href="#运行时间" aria-hidden="true">#</a> 运行时间</h2><p>网页已运行时间</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Time difference between publish date and now (网页运行时间)</span>
<span class="token comment"># Formal: Month/Day/Year Time or Year/Month/Day Time</span>
<span class="token key atrule">runtimeshow</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">publish_date</span><span class="token punctuation">:</span> 4/1/2021 00<span class="token punctuation">:</span><span class="token datetime number">00:00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img02.anheyu.com/adminuploads/1/2023/04/20/6441319e80977.webp" alt="运行时间" tabindex="0" loading="lazy"><figcaption>运行时间</figcaption></figure><h2 id="最新评论" tabindex="-1"><a class="header-anchor" href="#最新评论" aria-hidden="true">#</a> 最新评论</h2><p>最新评论只会在刷新时才会去读取，并不会实时变化</p><p>由于 API 有 访问次数限制，为了避免调用太多，主题默认存取期限为 10 分钟。也就是説，调用后资料会存在 localStorage 里，10 分钟内刷新网站只会去 localStorage 读取资料。 10 分钟期限一过，刷新页面时才会去调取 API 读取新的数据。（ 配置 storage，可自行配置缓存时间）</p><p>在侧边栏显示最新评论板块</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Aside widget - Newest Comments</span>
<span class="token key atrule">newest_comments</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">sort_order</span><span class="token punctuation">:</span> <span class="token comment"># Don&#39;t modify the setting unless you know how it works</span>
  <span class="token key atrule">limit</span><span class="token punctuation">:</span> <span class="token number">6</span>
  <span class="token key atrule">storage</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment"># unit: mins, save data to localStorage</span>
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>配置</th><th>解释</th></tr></thead><tbody><tr><td>limit</td><td>显示的数量</td></tr><tr><td>storage</td><td>设置缓存时间，单位 分钟</td></tr><tr><td>avatar</td><td>是否显示头像</td></tr></tbody></table><figure><img src="https://img02.anheyu.com/adminuploads/1/2023/04/20/644132e885d91.webp!blogimg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="右下角按钮-bottom-right-button" tabindex="-1"><a class="header-anchor" href="#右下角按钮-bottom-right-button" aria-hidden="true">#</a> 右下角按钮 (Bottom right button)</h2><h3 id="简繁转换" tabindex="-1"><a class="header-anchor" href="#简繁转换" aria-hidden="true">#</a> 简繁转换</h3><p>简体繁体互换</p><p>右下角会有简繁转换按钮。</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">translate</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>简体</p></blockquote><figure><img src="https://img02.anheyu.com/adminuploads/1/2023/04/20/644133ef810f7.webp" alt="简体" tabindex="0" loading="lazy"><figcaption>简体</figcaption></figure><blockquote><p>繁体</p></blockquote><figure><img src="https://img02.anheyu.com/adminuploads/1/2023/04/20/644133ef85f42.webp" alt="繁体" tabindex="0" loading="lazy"><figcaption>繁体</figcaption></figure><h3 id="阅读模式" tabindex="-1"><a class="header-anchor" href="#阅读模式" aria-hidden="true">#</a> 阅读模式</h3><p>阅读模式下会去掉除文章外的内容，避免干扰阅读。</p><p>只会出现在文章页面，右下角会有阅读模式按钮。</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">readmode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img02.anheyu.com/adminuploads/1/2023/04/20/6441350b98041.webp" alt="阅读模式" tabindex="0" loading="lazy"><figcaption>阅读模式</figcaption></figure><h3 id="夜间模式" tabindex="-1"><a class="header-anchor" href="#夜间模式" aria-hidden="true">#</a> 夜间模式</h3><p>右下角会有夜间模式按钮</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># dark mode</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签外挂-tag-plugins" tabindex="-1"><a class="header-anchor" href="#标签外挂-tag-plugins" aria-hidden="true">#</a> 标签外挂（Tag Plugins）</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>标签外挂是 Hexo 独有的功能，并不是标准的 Markdown 格式。 以下的写法，只适用于 AnZhiYu 主题，用在其它主题上不会有效果，甚至可能会报错。使用前请留意</p></div><div class="hint-container warning"><p class="hint-container-title">警告</p><p>标签外挂虽然能为主题带来一些额外的功能和 UI 方面的强化，但是，标签外挂也有明显的限制，使用时请留意。</p></div>`,45),f={href:"https://blog.anheyu.com/posts/d50a.html",target:"_blank",rel:"noopener noreferrer"},x=n("h2",{id:"分析统计",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分析统计","aria-hidden":"true"},"#"),s(" 分析统计")],-1),q={href:"https://tongji.baidu.com/web/welcome/login?castk=LTE%3D",target:"_blank",rel:"noopener noreferrer"},w=n("li",null,[n("p",null,"找到你百度统计的统计代码")],-1),j=n("figure",null,[n("img",{src:"https://bu.dusays.com/2023/06/02/64795c52dff22.jpg",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),z=n("ol",{start:"3"},[n("li",null,[s("修改 "),n("code",null,"主题配置文件")])],-1),C=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"baidu_analytics"),n("span",{class:"token punctuation"},":"),s(` 你的代码
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),D={href:"https://www.google.com/analytics/",target:"_blank",rel:"noopener noreferrer"},S=n("li",null,[n("p",null,"找到你的谷歌分析的跟踪 ID")],-1),A=n("figure",null,[n("img",{src:"https://bu.dusays.com/2023/06/02/64795cfc15eef.jpg",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),M=n("ol",{start:"3"},[n("li",null,[s("修改 "),n("code",null,"主题配置文件")])],-1),N=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"google_analytics"),n("span",{class:"token punctuation"},":"),s(" 你的代码 "),n("span",{class:"token comment"},"# 通常以`UA-`打头"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),T={href:"https://www.cloudflare.com/zh-tw/web-analytics/",target:"_blank",rel:"noopener noreferrer"},$=n("li",null,[s("找到 "),n("code",null,"JavaScript 程式码片段")],-1),P=n("li",null,[s("找到你的 "),n("code",null,"token"),n("img",{src:"https://bu.dusays.com/2023/06/02/64795d7a7776b.png",alt:"",loading:"lazy"})],-1),I=n("li",null,[s("修改 "),n("code",null,"主题配置文件")],-1),B=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# Cloudflare Analytics"),s(`
`),n("span",{class:"token comment"},"# https://www.cloudflare.com/zh-tw/web-analytics/"),s(`
`),n("span",{class:"token key atrule"},"cloudflare_analytics"),n("span",{class:"token punctuation"},":"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y={href:"https://clarity.microsoft.com/",target:"_blank",rel:"noopener noreferrer"},E=n("li",null,[n("p",null,[s("创建 "),n("code",null,"PROJECT")])],-1),F=n("li",null,[n("p",null,[s("找到你的 "),n("code",null,"ID")])],-1),L=n("figure",null,[n("img",{src:"https://bu.dusays.com/2023/06/02/64795dd09af94.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),W=n("ol",{start:"4"},[n("li",null,[s("修改 "),n("code",null,"主题配置文件")])],-1),O=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# Microsoft Clarity"),s(`
`),n("span",{class:"token comment"},"# https://clarity.microsoft.com/"),s(`
`),n("span",{class:"token key atrule"},"microsoft_clarity"),n("span",{class:"token punctuation"},":"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("h2",{id:"广告",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#广告","aria-hidden":"true"},"#"),s(" 广告")],-1),V=n("p",null,"主题已集成谷歌广告（自动广告）",-1),H=n("p",null,[s("修改 "),n("code",null,"主题配置文件")],-1),Z=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"google_adsense"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"enable"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
  `),n("span",{class:"token key atrule"},"auto_ads"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
  `),n("span",{class:"token key atrule"},"js"),n("span",{class:"token punctuation"},":"),s(" https"),n("span",{class:"token punctuation"},":"),s(`//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
  `),n("span",{class:"token key atrule"},"client"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token comment"},"# 填入个人识别码"),s(`
  `),n("span",{class:"token key atrule"},"enable_page_level_ads"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("figure",null,[n("img",{src:"https://bu.dusays.com/2023/06/02/64795e6fba8e3.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),U=n("p",null,"主题预留了三个位置可供插入广告，分别为主页文章(每三篇文章出现广告)/aside公告之后/文章页打赏之后。 把html代码填写到对应的位置",-1),R=n("p",null,[s("修改 "),n("code",null,"主题配置文件")],-1),K=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"ad"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"index"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"aside"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"post"),n("span",{class:"token punctuation"},":"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("p",null,"例如:",-1),X=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"index"),n("span",{class:"token punctuation"},":"),s(' <ins class="adsbygoogle" style="display'),n("span",{class:"token punctuation"},":"),s('block" data'),n("span",{class:"token punctuation"},"-"),s("ad"),n("span",{class:"token punctuation"},"-"),s('format="fluid" data'),n("span",{class:"token punctuation"},"-"),s("ad"),n("span",{class:"token punctuation"},"-"),s("layout"),n("span",{class:"token punctuation"},"-"),s('key="xxxxxxxxxxxx" data'),n("span",{class:"token punctuation"},"-"),s("ad"),n("span",{class:"token punctuation"},"-"),s('client="ca'),n("span",{class:"token punctuation"},"-"),s("pub"),n("span",{class:"token punctuation"},"-"),s('xxxxxxxxxx" data'),n("span",{class:"token punctuation"},"-"),s("ad"),n("span",{class:"token punctuation"},"-"),s('slot="xxxxxxxxxx"'),n("span",{class:"token punctuation"},">"),s("</ins"),n("span",{class:"token punctuation"},">"),s("<script"),n("span",{class:"token punctuation"},">"),s("(adsbygoogle=window.adsbygoogle"),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(").push("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(")<\/script"),n("span",{class:"token punctuation"},">"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),nn=n("h2",{id:"页面加载动画-preloader",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#页面加载动画-preloader","aria-hidden":"true"},"#"),s(" 页面加载动画 preloader")],-1),sn=n("p",null,"当进入网页时，因为加载速度的问题，可能会导致 top_img 图片出现断层显示，或者网页加载不全而出现等待时间，开启preloader后，会显示加载动画，等页面加载完，加载动画会消失。",-1),an={href:"https://codebyzach.github.io/pace/",target:"_blank",rel:"noopener noreferrer"},en=p(`<p>修改 <code>主题配置文件</code>，其中<code>avatar</code>可以自定义加载时的头像</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Loading Animation (加载动画)</span>
<span class="token key atrule">preloader</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># source</span>
  <span class="token comment"># 1. fullpage-loading</span>
  <span class="token comment"># 2. pace (progress bar)</span>
  <span class="token comment"># else all</span>
  <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token comment"># pace theme (see https://codebyzach.github.io/pace/)</span>
  <span class="token key atrule">pace_css_url</span><span class="token punctuation">:</span>
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> <span class="token comment"># 自定义头像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片大图查看模式" tabindex="-1"><a class="header-anchor" href="#图片大图查看模式" aria-hidden="true">#</a> 图片大图查看模式</h2><div class="hint-container warning"><p class="hint-container-title">警告</p><p>如果你并不想为某张图片添加大图查看模式，你可以使用 html 格式引用图片，併为图片添加 no-lightbox class 名。</p></div>`,4),tn=n("p",null,[s("修改 "),n("code",null,"主题配置文件")],-1),ln=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# fancybox http://fancyapps.com/fancybox/3/"),s(`
`),n("span",{class:"token key atrule"},"fancybox"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),on=n("p",null,[s("修改 "),n("code",null,"主题配置文件")],-1),pn=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"medium_zoom"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),cn=p(`<h2 id="pjax" tabindex="-1"><a class="header-anchor" href="#pjax" aria-hidden="true">#</a> Pjax</h2><p>当用户点击链接，通过ajax更新页面需要变化的部分，然后使用HTML5的pushState修改浏览器的URL地址。</p><p>这样可以不用重复加载相同的资源（css/js）， 从而提升网页的加载速度。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Pjax [Beta]</span>
<span class="token comment"># It may contain bugs and unstable, give feedback when you find the bugs.</span>
<span class="token comment"># https://github.com/MoOx/pjax</span>
<span class="token key atrule">pjax</span><span class="token punctuation">:</span> 
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">exclude</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /music/
    <span class="token punctuation">-</span> /no<span class="token punctuation">-</span>pjax/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),un={class:"hint-container info"},dn=n("p",{class:"hint-container-title"},"提示",-1),rn=n("p",null,"对于一些第三方插件，有些并不支持 pjax 。 你可以把网页加入到 exclude 里，这个网页会被 pjax 排除在外。 点击该网页会重新加载网站",-1),mn={href:"https://github.com/MoOx/pjax",target:"_blank",rel:"noopener noreferrer"},kn=p(`<div class="hint-container warning"><p class="hint-container-title">警告</p><p>主题默认开启Pjax，大量服务依赖于pjax，关闭可能会造成破坏性问题。</p><p>安知鱼主题的的Pjax目前仍有一些问题，请留意</p><p>使用谷歌广告可能会报错（例如自动广告） 如果你在使用中发现问题，欢迎反馈Bugs</p></div><h2 id="snackbar-弹窗" tabindex="-1"><a class="header-anchor" href="#snackbar-弹窗" aria-hidden="true">#</a> Snackbar 弹窗</h2><p>Snackbar 弹窗,根据自己爱好开启</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Snackbar 弹窗</span>
<span class="token comment"># https://github.com/polonel/SnackBar</span>
<span class="token comment"># position 弹窗位置</span>
<span class="token comment"># 可选 top-left / top-center / top-right / bottom-left / bottom-center / bottom-right</span>
<span class="token key atrule">snackbar</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">position</span><span class="token punctuation">:</span> bottom<span class="token punctuation">-</span>left
  <span class="token key atrule">bg_light</span><span class="token punctuation">:</span> <span class="token string">&#39;#49b1f5&#39;</span> <span class="token comment">#light mode时弹窗背景</span>
  <span class="token key atrule">bg_dark</span><span class="token punctuation">:</span> <span class="token string">&#39;#2d3035&#39;</span> <span class="token comment">#dark mode时弹窗背景</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pangu" tabindex="-1"><a class="header-anchor" href="#pangu" aria-hidden="true">#</a> Pangu</h2><blockquote><p>如果你跟我一样，每次看到网页上的中文字和英文、数字、符号挤在一块，就会坐立难安，忍不住想在它们之间加个空格。这个外挂正是你在网路世界走跳所需要的东西，它会自动替你在网页中所有的中文字和半形的英文、数字、符号之间插入空白。</p></blockquote><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># https://github.com/vinta/pangu.js</span>
<span class="token comment"># Insert a space between Chinese character and English character (中英文之间添加空格)</span>
<span class="token key atrule">pangu</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">field</span><span class="token punctuation">:</span> post <span class="token comment"># site/post</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>field</code>只支持两个参数，<code>post</code>(只在文章页生效)和<code>site</code>(全站生效)</p><h2 id="pwa" tabindex="-1"><a class="header-anchor" href="#pwa" aria-hidden="true">#</a> PWA</h2><p>要为AnZhiYu配上 PWA 特性, 你需要如下几个步骤:</p><ol><li><p>打开 hexo 工作目录</p></li><li><p><code>npm install hexo-offline --save</code> 或者 <code>yarn add hexo-offline</code></p></li><li><p>在根目录创建 <code>hexo-offline.config.cjs</code> 文件，并增加以下内容。</p></li></ol><div class="language-cjs line-numbers-mode" data-ext="cjs"><pre class="language-cjs"><code>// offline config passed to workbox-build.
module.exports = {
  globPatterns: [&quot;css/*.css&quot;, &quot;404.html&quot;, &quot;js/**&quot;, &quot;anzhiyu/random.js&quot;, &quot;img/**&quot;, &quot;manifest.json&quot;],
  // 静态文件合集，如果你的站点使用了例如 webp 格式的文件，请将文件类型添加进去。
  globDirectory: &quot;public&quot;,
  swDest: &quot;public/service-worker.js&quot;,
  maximumFileSizeToCacheInBytes: 10485760, // 缓存的最大文件大小，以字节为单位。
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [
    // 如果你需要加载 CDN 资源，请配置该选项，如果没有，可以不配置。
    // CDNs - should be CacheFirst, since they should be used specific versions so should not change
    {
      urlPattern: /^https:\\/\\/npm\\.elemecdn\\.com\\/anzhiyu-blog/, // 缓存elmentcdn
      handler: &quot;CacheFirst&quot;,
    },
  ],
  manifestTransforms: [
    async (manifestEntries, compilation) =&gt; {
      const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, &quot;&quot;); // 获取当前时间戳
      manifestEntries.push(
        {
          url: &quot;/&quot;,
          revision: \`index-\${timestamp}\`,
        },
        {
          url: &quot;music/&quot;,
          revision: \`music-\${timestamp}\`,
        },
        {
          url: &quot;about/&quot;,
          revision: \`about-\${timestamp}\`,
        }
      );
      return { manifest: manifestEntries };
    },
  ],
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),vn={href:"https://github.com/JLHwung/hexo-offline",target:"_blank",rel:"noopener noreferrer"},bn=p(`<ol start="4"><li>在<code>主题配置文件</code>中开启 pwa 选项。</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># PWA</span>
<span class="token comment"># See https://github.com/JLHwung/hexo-offline</span>
<span class="token comment"># ---------------</span>
<span class="token key atrule">pwa</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">startup_image_enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">manifest</span><span class="token punctuation">:</span> /manifest.json
  <span class="token key atrule">theme_color</span><span class="token punctuation">:</span> var(<span class="token punctuation">-</span><span class="token punctuation">-</span>anzhiyu<span class="token punctuation">-</span>main)
  <span class="token key atrule">mask_icon</span><span class="token punctuation">:</span> /img/siteicon/apple<span class="token punctuation">-</span>icon<span class="token punctuation">-</span>180.png
  <span class="token key atrule">apple_touch_icon</span><span class="token punctuation">:</span> /img/siteicon/apple<span class="token punctuation">-</span>icon<span class="token punctuation">-</span>180.png
  <span class="token key atrule">bookmark_icon</span><span class="token punctuation">:</span> /img/siteicon/apple<span class="token punctuation">-</span>icon<span class="token punctuation">-</span>180.png
  <span class="token key atrule">favicon_32_32</span><span class="token punctuation">:</span> /img/siteicon/32.png
  <span class="token key atrule">favicon_16_16</span><span class="token punctuation">:</span> /img/siteicon/16.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>在创建<code>source/</code>目录中创建<code>manifest.json</code>文件。</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;安知鱼\`Blog&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;short_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;安知鱼&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;theme_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#3b70fc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;background_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#3b70fc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fullscreen&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;start_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;icons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;img/siteicon/manifest-icon-192.maskable.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192x192&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;purpose&quot;</span><span class="token operator">:</span> <span class="token string">&quot;any&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;img/siteicon/manifest-icon-192.maskable.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192x192&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;purpose&quot;</span><span class="token operator">:</span> <span class="token string">&quot;maskable&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;img/siteicon/manifest-icon-512.maskable.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;512x512&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;purpose&quot;</span><span class="token operator">:</span> <span class="token string">&quot;any&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;img/siteicon/manifest-icon-512.maskable.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;512x512&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;purpose&quot;</span><span class="token operator">:</span> <span class="token string">&quot;maskable&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;splash_pages&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),hn={href:"https://app-manifest.firebaseapp.com/",target:"_blank",rel:"noopener noreferrer"},gn=n("code",null,"manifest.json",-1),yn=n("ol",{start:"6"},[n("li",null,[s("可以通过"),n("code",null,"Chrome"),s("插件"),n("code",null,"Lighthouse"),s("检查 PWA 配置是否生效以及配置是否正确。")])],-1),_n=n("ul",null,[n("li",null,"打开博客页面"),n("li",null,[s("启动"),n("code",null,"Lighthouse"),s("插件 (Lighthouse插件要求至少包含一个 512*512 像素的图标)")])],-1),fn={href:"https://developers.google.com/web/tools/lighthouse/audits/address-bar",target:"_blank",rel:"noopener noreferrer"},xn=p(`<ol start="7"><li>生成pwa启动图</li></ol><ul><li>安装 <code>npm install pwa-asset-generator</code></li><li>hexo根目录执行<code>hexo g</code></li><li>执行<code>npx pwa-asset-generator ./public/img/512.png ./public/img/siteicon --padding &quot;calc(50vh - 20%) calc(50vw - 40%)&quot; -s false -h true</code>，这条命令会使用<code>themes/source/img/512.png</code>这张图片来生成siteicon到目录<code>/public/img/siteicon</code>中，由于<code>hexo cl</code>会清除<code>/public</code>目录中的文件，所以每次<code>hexo d</code>之前都需要执行，如果不想每次<code>hexo d</code>之前都执行的话，可以将主题中的<code>themes/source/img/512.png</code>图片复制移动到<code>根目录/source/img</code>中，然后将生成后的<code>/public/img/siteicon</code>文件夹复制到<code>根目录/source/img</code>中，这样<code>根目录/source/img</code>中就会一直有<code>siteicon</code>，以后执行<code>hexo g</code>时，也会将<code>siteicon</code>生成到<code>public</code>目录中。</li></ul><h2 id="open-graph" tabindex="-1"><a class="header-anchor" href="#open-graph" aria-hidden="true">#</a> Open Graph</h2><p>在 <code>head</code> 里增加一些 meta 资料，例如缩略图、标题、时间等等。当你分享网页到一些平台时，平台会读取 Open Graph 的内容，展示缩略图，标题等等信息。</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Open graph meta tags</span>
<span class="token comment"># https://developers.facebook.com/docs/sharing/webmasters/</span>
<span class="token key atrule">Open_Graph_meta</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">option</span><span class="token punctuation">:</span>
    <span class="token comment"># twitter_card:</span>
    <span class="token comment"># twitter_image:</span>
    <span class="token comment"># twitter_id:</span>
    <span class="token comment"># twitter_site:</span>
    <span class="token comment"># google_plus:</span>
    <span class="token comment"># fb_admins:</span>
    <span class="token comment"># fb_app_id:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-前缀" tabindex="-1"><a class="header-anchor" href="#css-前缀" aria-hidden="true">#</a> CSS 前缀</h2><p>有些 CSS 并不是所有浏览器都支持，需要增加对应的前缀才会生效。</p><p>开启 <code>css_prefix</code> 后，会自动为一些 CSS 增加前缀。（会增加 20%的体积）</p><p>修改 <code>主题配置文件</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Add the vendor prefixes to ensure compatibility</span>
<span class="token key atrule">css_prefix</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inject" tabindex="-1"><a class="header-anchor" href="#inject" aria-hidden="true">#</a> Inject</h2><p>如想添加额外的js/css/meta等等东西，可以在Inject里添加，支持添加到head(<code>&lt;/body&gt;</code>标签之前)和bottom(<code>&lt;/html&gt;</code>标签之前)。</p><p>请注意：以标准的html格式添加内容</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">inject</span><span class="token punctuation">:</span>
  <span class="token key atrule">head</span><span class="token punctuation">:</span>
  	<span class="token punctuation">-</span> &lt;link rel=&quot;stylesheet&quot; href=&quot;/self.css&quot;<span class="token punctuation">&gt;</span>
  <span class="token key atrule">bottom</span><span class="token punctuation">:</span>
  	<span class="token punctuation">-</span> &lt;script src=&quot;xxxx&quot;<span class="token punctuation">&gt;</span>&lt;/script<span class="token punctuation">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>留意: 如果你的网站根目录不是&#39;/&#39;,使用本地图片时，需加上你的根目录。</p><p>例如：网站是 <code>https://yoursite.com/blog,引用css/xx.css</code>，则设置为<code>&lt;link rel=&quot;stylesheet&quot; href=&quot;/blog/css/xx.css&quot;&gt;</code></p><h2 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h2><p>配置文件中最后一部分CDN，里面是主题所引用到的文件，可自行配置CDN。（非必要请勿修改，配置后请确认链接是否能访问）</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
<span class="token comment"># CDN</span>
<span class="token comment"># Don&#39;t modify the following settings unless you know how they work</span>
<span class="token comment"># 非必要请不要修改</span>
<span class="token key atrule">CDN</span><span class="token punctuation">:</span>
  <span class="token comment"># The CDN provider of internal scripts (主题内部 js 的 cdn 配置)</span>
  <span class="token comment"># option: local/elemecdn/jsdelivr/unpkg/cdnjs/custom</span>
  <span class="token comment"># Dev version can only choose. ( dev版的主题只能设置为 local )</span>
  <span class="token key atrule">internal_provider</span><span class="token punctuation">:</span> elemecdn

  <span class="token comment"># The CDN provider of third party scripts (第三方 js 的 cdn 配置)</span>
  <span class="token comment"># option: elemecdn/jsdelivr/unpkg/cdnjs/custom</span>
  <span class="token key atrule">third_party_provider</span><span class="token punctuation">:</span> elemecdn

  <span class="token comment"># Add version number to CDN, true or false</span>
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

  <span class="token comment"># Custom format</span>
  <span class="token comment"># For example: https://cdn.staticfile.org/\${cdnjs_name}/\${version}/\${min_cdnjs_file}</span>
  <span class="token key atrule">custom_format</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//npm.elemecdn.com/$<span class="token punctuation">{</span>name<span class="token punctuation">}</span>@latest/$<span class="token punctuation">{</span>file<span class="token punctuation">}</span>

  <span class="token key atrule">option</span><span class="token punctuation">:</span>
    <span class="token comment"># main_css:</span>
    <span class="token comment"># main:</span>
    <span class="token comment"># utils:</span>
    <span class="token comment"># translate:</span>
    <span class="token comment"># local_search:</span>
    <span class="token comment"># algolia_js:</span>
    <span class="token comment"># algolia_search_v4:</span>
    <span class="token comment"># instantsearch_v4:</span>
    <span class="token comment"># pjax:</span>
    <span class="token comment"># blueimp_md5:</span>
    <span class="token comment"># valine:</span>
    <span class="token comment"># twikoo:</span>
    <span class="token comment"># waline_js:</span>
    <span class="token comment"># waline_css:</span>
    <span class="token comment"># sharejs:</span>
    <span class="token comment"># sharejs_css:</span>
    <span class="token comment"># mathjax:</span>
    <span class="token comment"># katex:</span>
    <span class="token comment"># katex_copytex:</span>
    <span class="token comment"># mermaid:</span>
    <span class="token comment"># canvas_ribbon:</span>
    <span class="token comment"># canvas_fluttering_ribbon:</span>
    <span class="token comment"># canvas_nest:</span>
    <span class="token comment"># lazyload:</span>
    <span class="token comment"># instantpage:</span>
    <span class="token comment"># typed:</span>
    <span class="token comment"># pangu:</span>
    <span class="token comment"># fancybox_css_v4:</span>
    <span class="token comment"># fancybox_v4:</span>
    <span class="token comment"># medium_zoom:</span>
    <span class="token comment"># snackbar_css:</span>
    <span class="token comment"># snackbar:</span>
    <span class="token comment"># activate_power_mode:</span>
    <span class="token comment"># fireworks:</span>
    <span class="token comment"># click_heart:</span>
    <span class="token comment"># ClickShowText:</span>
    <span class="token comment"># fontawesome:</span>
    <span class="token comment"># flickr_justified_gallery_js:</span>
    <span class="token comment"># flickr_justified_gallery_css:</span>
    <span class="token comment"># aplayer_css:</span>
    <span class="token comment"># aplayer_js:</span>
    <span class="token comment"># meting_js:</span>
    <span class="token comment"># meting_api:</span>
    <span class="token comment"># prismjs_js:</span>
    <span class="token comment"># prismjs_lineNumber_js:</span>
    <span class="token comment"># prismjs_autoloader:</span>
    <span class="token comment"># artalk_js:</span>
    <span class="token comment"># artalk_css:</span>
    <span class="token comment"># pace_js:</span>
    <span class="token comment"># pace_default_css:</span>
    <span class="token comment"># countup_js:</span>
    <span class="token comment"># gsap_js:</span>
    <span class="token comment"># busuanzi:</span>
    <span class="token comment"># rightmenu:</span>
    <span class="token comment"># waterfall:</span>
    <span class="token comment"># ali_iconfont_css:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>解释</th></tr></thead><tbody><tr><td>internal_provider</td><td>主题内部文件<br>可选 local/jsdelivr/unpkg/cdnjs/custom<br>lcoal 为本地加载，custom 为自定义格式，需配置 <code>custom_format</code><br><strong>注意</strong>: 如果使用的是 Dev 版，只能设置为 local</td></tr><tr><td>third_party_provider</td><td>第三方文件<br>可选 local/jsdelivr/unpkg/cdnjs/custom<br>lcoal 为本地加载，custom 为自定义格式，需配置 custom_format<br><strong>注意</strong>: 如果你选择 local 则需要自行将文件都下载至本地，并修改对应的选项，否则会报错。</td></tr><tr><td>version</td><td>true/false 为 cdn 加上指定版本号</td></tr><tr><td>custom_format</td><td>自定义格式</td></tr><tr><td>option</td><td>你可以在这里更换部分文件,会覆盖原有的配置</td></tr></tbody></table><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><p>如需修改版本号，可修改<code>主题目录</code>的 &#39;plugins.yml&#39; 中对应插件的 version</p><p>请确保你修改的版本号，你所使用的 cdn 有收录</p><h3 id="custom-format" tabindex="-1"><a class="header-anchor" href="#custom-format" aria-hidden="true">#</a> custom_format</h3><p>提供以下参数</p><table><thead><tr><th>参数</th><th>解释</th></tr></thead><tbody><tr><td>name</td><td>npm 上的包名</td></tr><tr><td>file</td><td>npm 上的文件路径</td></tr><tr><td>min_file</td><td>cdnjs 上的包名</td></tr><tr><td>cdnjs_file</td><td>cdnjs 上的文件路径</td></tr><tr><td>min_cdnjs_file</td><td>cdnjs 上的文件路径（压缩过的文件）</td></tr><tr><td>version</td><td>插件版本号</td></tr></tbody></table><p>部分可用的第三方 CDN 列表</p><blockquote><p>请确保你选择的 CDN 有收录主题使用的第三方插件</p></blockquote>`,29),qn=n("thead",null,[n("tr",null,[n("th",null,"提供商"),n("th",null,"格式"),n("th",null,"备注")])],-1),wn={href:"https://www.staticfile.org/",target:"_blank",rel:"noopener noreferrer"},jn=n("td",{min_cdnjs_file:""},"https://cdn.staticfile.org/${cdnjs_name}/${version}/$",-1),zn=n("td",null,"同步 cdnjs",-1),Cn={href:"https://www.bootcdn.cn/",target:"_blank",rel:"noopener noreferrer"},Dn=n("td",{min_cdnjs_file:""},"https://cdn.bootcdn.net/ajax/libs/${cdnjs_name}/${version}/$",-1),Sn=n("td",null,"同步 cdnjs",-1),An={href:"https://cdn.baomitu.com/",target:"_blank",rel:"noopener noreferrer"},Mn=n("td",{min_cdnjs_file:""},[s("最新版本： https://lib.baomitu.com/${cdnjs_name}/latest/${min_cdnjs_file}"),n("br"),s("指定版本： https://lib.baomitu.com/${cdnjs_name}/${version}/$")],-1),Nn=n("td",null,"同步 cdnjs",-1),Tn=n("tr",null,[n("td",null,"Elemecdn"),n("td",{file:""},[s("最新版本： https://npm.elemecdn.com/${name}@latest/${file}"),n("br"),s("指定版本： https://npm.elemecdn.com/${name}@${version}/$")]),n("td",null,"同步 npm")],-1);function $n(Pn,In){const e=u("ExternalLinkIcon"),c=u("Tabs");return r(),m("div",null,[n("div",v,[b,n("p",null,[s("本教程更新于 2023 年 7 月 5 日，教程的内容针对最新的 anzhiyu 主题(如果你是旧版本，教程会有出入，请留意) 🐟 安知鱼 已经更新到 "),n("a",h,[s("1.4.0"),a(e)])])]),g,n("p",null,[s("访问 busuanzi 的"),n("a",y,[s("官方网站"),a(e)]),s("查看更多的介绍。")]),_,n("p",null,[s("只需要将标签写在md文件内即可使用，详细写法请阅读"),n("a",f,[s("安知鱼主题标签 Tag Plugins"),a(e)])]),x,a(c,{id:"415",data:[{title:"百度统计"},{title:"谷歌分析"},{title:"Cloudflare"},{title:"Microsoft Clarity"}],active:0},{tab0:t(({title:l,value:o,isActive:i})=>[n("ol",null,[n("li",null,[n("p",null,[s("登录百度统计的"),n("a",q,[s("官方网站"),a(e)])])]),w]),j,z,C]),tab1:t(({title:l,value:o,isActive:i})=>[n("ol",null,[n("li",null,[n("p",null,[s("登录谷歌分析的"),n("a",D,[s("官方网站"),a(e)])])]),S]),A,M,N]),tab2:t(({title:l,value:o,isActive:i})=>[n("ol",null,[n("li",null,[s("登录 Cloudflare 分析的"),n("a",T,[s("官方网站"),a(e)])]),$,P,I]),B]),tab3:t(({title:l,value:o,isActive:i})=>[n("ol",null,[n("li",null,[n("p",null,[s("登录 Clarity 的"),n("a",Y,[s("官方网站"),a(e)])])]),E,F]),L,W,O]),_:1}),G,a(c,{id:"525",data:[{title:"谷歌广告"},{title:"手动广告配置"}],active:0},{tab0:t(({title:l,value:o,isActive:i})=>[V,H,Z,J]),tab1:t(({title:l,value:o,isActive:i})=>[U,R,K,Q,X]),_:1}),nn,sn,n("p",null,[s("主题支持 pace.js 的加载动画，具体可查看 "),n("a",an,[s("pace.js"),a(e)])]),en,a(c,{id:"573",data:[{title:"fancybox"},{title:"medium_zoom"}],active:0},{tab0:t(({title:l,value:o,isActive:i})=>[tn,ln]),tab1:t(({title:l,value:o,isActive:i})=>[on,pn]),_:1}),cn,n("div",un,[dn,rn,n("p",null,[s("使用pjax后，一些自己DIY的js可能会无效，跳转页面时需要重新调用，请参考"),n("a",mn,[s("Pjax文档"),a(e)]),s(" 使用pjax后，一些个别页面加载的js/css，将会改为所有页面都加载")])]),kn,n("p",null,[s("更多内容请查看 "),n("a",vn,[s("hexo-offline"),a(e)]),s(" 的官方文档")]),bn,n("p",null,[s("你也可以通过 "),n("a",hn,[s("Web App Manifest"),a(e)]),s(" 快速创建"),gn,s("。（Web App Manifest 要求至少包含一个 512*512 像素的图标）")]),yn,_n,n("p",null,[s("关于 PWA（渐进式增强 Web 应用）的更多内容请参考 "),n("a",fn,[s("Google Tools for Web Developers"),a(e)])]),xn,n("table",null,[qn,n("tbody",null,[n("tr",null,[n("td",null,[n("a",wn,[s("Staticfile（七牛云）"),a(e)])]),jn,zn]),n("tr",null,[n("td",null,[n("a",Cn,[s("BootCDN"),a(e)])]),Dn,Sn]),n("tr",null,[n("td",null,[n("a",An,[s("Baomitu（360）"),a(e)])]),Mn,Nn]),Tn])])])}const Yn=d(k,[["render",$n],["__file","site-configuration2.html.vue"]]);export{Yn as default};
