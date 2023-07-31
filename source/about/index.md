---
title: 天生我材必有用
date: 2023-04-13 14:52:58

aside: false
top_img: false
background: "#f8f9fe"
comments: false
type: "about"
---


## 诗词

{% poem 将进酒,李白〔唐代〕 %}
君不见黄河之水天上来，奔流到海不复回。
君不见高堂明镜悲白发，朝如青丝暮成雪。
人生得意须尽欢，莫使金樽空对月。
天生我材必有用，千金散尽还复来。
烹羊宰牛且为乐，会须一饮三百杯。
岑夫子，丹丘生，将进酒，杯莫停。
与君歌一曲，请君为我倾耳听。
钟鼓馔玉不足贵，但愿长醉不愿醒。
古来圣贤皆寂寞，惟有饮者留其名。
陈王昔时宴平乐，斗酒十千恣欢谑。
主人何为言少钱，径须沽取对君酌。
五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。
{% endpoem %}

## My Github

<!-- [![geekswg](https://cdn.jsdelivr.net/gh/geekswg/geekswg/assets/github-contribution-grid-snake.svg "geekswg's Github")](https://github.com/geekswg) -->

<div style="width:100%;text-align:center;">
<a href="https://github.com/geekswg">
<img src="https://cdn.jsdelivr.net/gh/geekswg/geekswg/profile-snake-contrib/github-contribution-grid-snake.svg">
</a></div>

## 访客信息

<div style="width:100%;text-align:center;">
    <img src="https://tool.lu/netcard/">
</div>

<script id="LA-DATA-WIDGET" crossorigin="anonymous" charset="UTF-8" src="https://v6-widget.51.la/v6/K2mM1vs6nmCWtp4K/quote.js?theme=#1690FF,#333333,#999999,#333333,transparent,#1690FF,18&col=true&f=18&badge=icon_0&icon=center"></script>

<br/><br/>

<!-- 在表格中添加 id 以便于通过 JavaScript 获取元素 -->
<table>
    <thead>
    <tr>
        <th>类型</th>
        <th>信息</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td colspan="2" ><b>网络信息</b></td>
    </tr>
    <tr>
        <td>IP地址</td>
        <td><div id="userAgentIp"></div></td>
    </tr>
    <tr>
        <td>州/大陆</td>
        <td><div id="userAgentState"></div></td>
    </tr>
    <tr>
        <td>国家</td>
        <td><div id="userAgentCountry"></div></td>
    </tr>
    <tr>
        <td>省份</td>
        <td><div id="userAgentProv"></div></td>
    </tr>
    <tr>
        <td>城市</td>
        <td><div id="userAgentCity"></div></td>
    </tr>
    <tr>
        <td>区</td>
        <td><div id="userAgentDistrict"></div></td>
    </tr>
    <tr>
        <td>运营商</td>
        <td><div id="userAgentISP"></div></td>
    </tr>
    <tr>
        <td colspan="2" ><b>设备信息</b></td>
    </tr>
    <tr>
        <td style="text-align:center">设备</td>
        <td><div id="userAgentDevice"></div></td>
    </tr>
    </tbody>
</table>

<!-- 在模板文件中添加 JavaScript 代码 -->
<script>
    (async function() {
    async function getIpInfo() {
        var fetchUrl = "https://api.qjqq.cn/api/Local";
        try {
            var response = await fetch(fetchUrl);
            var json = await response.json();

            var ip = json.ip;
            var continent = json.data.continent;
            var country = json.data.country;
            var prov = json.data.prov;
            var city = json.data.city;
            var district = json.data.district;
            var isp = json.data.isp;

            document.getElementById("userAgentIp").innerHTML = ip;
            document.getElementById("userAgentState").innerHTML = continent;
            document.getElementById("userAgentCountry").innerHTML = country;
            document.getElementById("userAgentProv").innerHTML = prov;
            document.getElementById("userAgentCity").innerHTML = city;
            document.getElementById("userAgentDistrict").innerHTML = district;
            document.getElementById("userAgentISP").innerHTML = isp;

            var uaInfo = navigator.userAgent;
            document.getElementById("userAgentDevice").innerHTML = uaInfo;
        } catch (error) {
            console.error("An error occurred while fetching IP info:", error);
        }
    }

    await getIpInfo();
})();
</script>

## 其他

未完待续。。。
