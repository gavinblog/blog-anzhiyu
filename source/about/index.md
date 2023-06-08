---
title: 天生我材必有用
date: 2023-04-13 14:52:58

aside: false
top_img: false
background: "#f8f9fe"
comments: false
type: "about"
---


## 访客信息

<div style="width:100%;text-align:center;">
    <img src="https://tool.lu/netcard/">
</div>


<script id="LA-DATA-WIDGET" crossorigin="anonymous" charset="UTF-8" src="https://v6-widget.51.la/v6/K2mM1vs6nmCWtp4K/quote.js?theme=#1690FF,#333333,#999999,#333333,#FFFFFF,#1690FF,18&col=true&f=18&badge=icon_0&icon=center"></script>


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

> 水调歌头,苏轼

丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
