//get请求
let req_json_data = {
    key: 'VOABZ-ICNET-SMUXV-LRCIB-QEFMZ-HHBDJ',
    output: 'jsonp',
};
//经纬度 117.283, 31.8612
let location_longitude = 117.283;
let location_latitude = 31.8612;

//api 申请地址：https://lbs.qq.com/dev/console/ ，控制台，应用管理，创建应用，添加key，WebserviceAPI
let tecent_location_api = 'https://apis.map.qq.com/ws/location/v1/ip';


// function jsonp(url,key,fn){
//     var str  = 'jsonp_' + parseInt((Math.random()*1000)+1000);
//     window[str] = function(data){
//         fn(data)
//     }
//     var script = document.createElement("script");
//     script.src = url + key + "&callback=" + str;
//     document.body.appendChild(script);
// }

// jsonp(tecent_location_api,"?key=VOABZ-ICNET-SMUXV-LRCIB-QEFMZ-HHBDJ",function(data){
//     ipLocation = data;
//     alert(111);
//     console.info(data);
// });

welcomeEle = document.getElementById("welcome-info");
if(welcomeEle){
    welcomeEle.innerHTML = '<div style="text-align:center;" ><img src="/imgs/gif/yinyang.gif" data-lazy-src="/img/loading.svg" alt="加载中..." data-ll-status="loaded" class="entered loaded"></div><div class="img-alt is-center">加载中...</div>'
}
$.ajax({
    type: 'get',
    url: tecent_location_api,
    data: req_json_data,
    dataType: 'jsonp',
    success: function (res) {
        console.log('ajax=',res);
        ipLocation = res;
    }
})

function getDistance(e1, n1, e2, n2) {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
        e *= PI / 180
        n *= PI / 180
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }

    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
}

function showWelcome() {

    let dist = getDistance(location_longitude, location_latitude, ipLocation.result.location.lng, ipLocation.result.location.lat); //这里记得换成自己的经纬度
    let pos = ipLocation.result.ad_info.nation;
    let ip;
    let posdesc;
    //根据国家、省份、城市信息自定义欢迎语
    switch (ipLocation.result.ad_info.nation) {
        case "日本":
            posdesc = "よろしく，一起去看樱花吗";
            break;
        case "美国":
            posdesc = "Let us live in peace!";
            break;
        case "英国":
            posdesc = "想同你一起夜乘伦敦眼";
            break;
        case "俄罗斯":
            posdesc = "干了这瓶伏特加！";
            break;
        case "法国":
            posdesc = "C'est La Vie";
            break;
        case "德国":
            posdesc = "Die Zeit verging im Fluge.";
            break;
        case "澳大利亚":
            posdesc = "一起去大堡礁吧！";
            break;
        case "加拿大":
            posdesc = "拾起一片枫叶赠予你";
            break;
        case "中国":
            pos = ipLocation.result.ad_info.province + " " + ipLocation.result.ad_info.city + " " + ipLocation.result.ad_info.district;
            ip = ipLocation.result.ip;
            switch (ipLocation.result.ad_info.province) {
                case "北京市":
                    posdesc = "北——京——欢迎你~~~";
                    break;
                case "天津市":
                    posdesc = "讲段相声吧";
                    break;
                case "河北省":
                    posdesc = "河上月沉鸿雁起，北山疏雨点朝衣。山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山";
                    break;
                case "山西省":
                    posdesc = "展开坐具长三尺，已占山河五百余";
                    break;
                case "内蒙古自治区":
                    posdesc = "天苍苍，野茫茫，风吹草低见牛羊";
                    break;
                case "辽宁省":
                    posdesc = "我想吃烤鸡架！";
                    break;
                case "吉林省":
                    posdesc = "状元阁就是东北烧烤之王";
                    break;
                case "黑龙江省":
                    posdesc = "很喜欢哈尔滨大剧院";
                    break;
                case "上海市":
                    posdesc = "众所周知，中国只有两个城市";
                    break;
                case "江苏省":
                    switch (ipLocation.result.ad_info.city) {
                        case "南京市":
                            posdesc = "江畔何人初见月，苏小门前柳万条";
                            break;
                        case "苏州市":
                            posdesc = "上有天堂，下有苏杭";
                            break;
                        default:
                            posdesc = "散装是必须要散装的";
                            break;
                    }
                    break;
                case "浙江省":
                    posdesc = "东风渐绿西湖柳，雁已还人未南归";
                    break;
                case "河南省":
                    switch (ipLocation.result.ad_info.city) {
                        case "郑州市":
                            posdesc = "河山万里归无期，南风怎知我相思<br/>豫州之域，天地之中";
                            break;
                        case "南阳市":
                            posdesc = "臣本布衣，躬耕于南阳此南阳非彼南阳！";
                            break;
                        case "驻马店市":
                            posdesc = "峰峰有奇石，石石挟仙气嵖岈山的花很美哦！";
                            break;
                        case "开封市":
                            posdesc = "刚正不阿包青天";
                            break;
                        case "洛阳市":
                            posdesc = "洛阳牡丹甲天下";
                            break;
                        default:
                            posdesc = "可否带我品尝河南烩面啦？";
                            break;
                    }
                    break;
                case "安徽省":
                    posdesc = "安能知晓她情意，徽徽晚霞动我情。<br>五岳归山不看山,黄山归山不看岳。";
                    break;
                case "福建省":
                    posdesc = "井邑白云间，岩城远带山";
                    break;
                case "江西省":
                    posdesc = "江吞破浪噬海霞，西处望望有无她。落霞与孤鹜齐飞，秋水共长天一色";
                    break;
                case "山东省":
                    posdesc = "山河锦绣歌盛世，东风含意住佳人。遥望齐州九点烟，一泓海水杯中泻";
                    break;
                case "湖北省":
                    switch (ipLocation.result.ad_info.city) {
                        case "黄冈市":
                            posdesc = "红安将军县！辈出将才！";
                            break;
                        default:
                            posdesc = "湖光山色虽旖丽，北极光影不及她。来碗热干面~";
                            break;
                    }
                    break;
                case "湖南省":
                    posdesc = "湖光山色雨空檬，南风有信觅佳人。";
                    break;
                case "广东省":
                    switch (ipLocation.result.ad_info.city) {
                        case "广州市":
                            posdesc = "广阔天下不见爱，东南有枝不知情。看小蛮腰，喝早茶了嘛~";
                            break;
                        case "深圳市":
                            posdesc = "今天你逛商场了嘛~";
                            break;
                        case "阳江市":
                            posdesc = "阳春合水！博主家乡~ 欢迎来玩~";
                            break;
                        default:
                            posdesc = "广阔天下不见爱，东南有枝不知情~";
                            break;
                    }
                    break;
                case "广西壮族自治区":
                    posdesc = "桂林山水甲天下";
                    break;
                case "海南省":
                    posdesc = "朝观日出逐白浪，夕看云起收霞光";
                    break;
                case "四川省":
                    posdesc = "贵山贵水览佳人，州城全是旧相思。";
                    break;
                case "贵州省":
                    posdesc = "贵山贵水览佳人，州城全是旧相思。";
                    break;
                case "云南省":
                    posdesc = "云深不知处，南国有佳人。玉龙飞舞云缠绕，万仞冰川直耸天";
                    break;
                case "西藏自治区":
                    posdesc = "躺在茫茫草原上，仰望蓝天";
                    break;
                case "陕西省":
                    posdesc = "陕塞原上尘不散，西岸畔下她欲还。来份臊子面加馍";
                    break;
                case "甘肃省":
                    posdesc = "羌笛何须怨杨柳，春风不度玉门关";
                    break;
                case "青海省":
                    posdesc = "牛肉干和老酸奶都好好吃";
                    break;
                case "宁夏回族自治区":
                    posdesc = "大漠孤烟直，长河落日圆";
                    break;
                case "新疆维吾尔自治区":
                    posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风";
                    break;
                case "台湾省":
                    posdesc = "何时重得龙虎将? 雷霆一战归统一!我在这头，大陆在那头";
                    break;
                case "香港特别行政区":
                    posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉";
                    break;
                case "澳门特别行政区":
                    posdesc = "性感荷官，在线发牌";
                    break;
                default:
                    posdesc = "君不见，黄河之水天上来，奔流到海不复回。<br>无边落木萧萧下，不尽长江滚滚来。";
                    break;
            }
            break;
        default:
            posdesc = "Take Me to Your Heart, Take me to your soul";
            break;
    }

    //根据本地时间切换欢迎语
    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span>🌤️ 早上好，一日之计在于晨</span>";
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span>☀️ 中午好，记得午休喔~</span>";
    else if (date.getHours() >= 13 && date.getHours() < 17) timeChange = "<span>🕞 下午好，饮茶先啦！</span>";
    else if (date.getHours() >= 17 && date.getHours() < 19) timeChange = "<span>🚶‍♂️ 即将下班，记得按时吃饭~</span>";
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>🌙 晚上好，夜生活嗨起来！</span>";
    else timeChange = "夜深了，早点休息，少熬夜";

    try {
        //自定义文本和需要放的位置
        document.getElementById("welcome-info").innerHTML =
            `<div title="您的IP地址为：${ip}">
            ${timeChange} 欢迎来自 <b><span style="color: var(--kouseki-ip-color);font-size: var(--kouseki-gl-size)">${pos}</span></b> 的小友💖
            当前位置距博主约 <b><span style="color: var(--kouseki-ip-color)">${dist}</span></b> 公里！
            <hr />
            <p style="font-size:14px;font-family: 楷体;">
                <span style="color:red;">『</span> ${posdesc}<span style="color:red;fo;">』</span>
            </p>
            <div>
            `;
    } catch (err) {
        console.log("Pjax无法获取元素")
    }
}


function showWelcomeWithCatch() {
    try {
        if(welcomeEle){ // 如果存在
            showWelcome();
        }
    } catch (e) {
        document.getElementById("welcome-info").innerHTML = `<p style="font-family: 楷体;">但行好事，莫问前程！</p`;
        console.error(e);
    }
}

window.onload = showWelcomeWithCatch;
// 如果使用了pjax在加上下面这行代码
document.addEventListener('pjax:complete', showWelcomeWithCatch);