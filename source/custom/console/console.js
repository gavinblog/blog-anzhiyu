var myNow = new Date();
function createtime1() {
    var grt = new Date("2006/01/02 15:04:05"); //此处修改你的建站时间或者网站上线时间
    myNow.setTime(myNow.getTime() + 250);
    var days = (myNow - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到 毕少侠 の小家!`,
        `Future is now 🍭🍭🍭`,
        `    
        
 ██████╗ ███████╗███████╗██╗  ██╗███████╗██╗    ██╗ ██████╗ 
 ██╔════╝ ██╔════╝██╔════╝██║ ██╔╝██╔════╝██║    ██║██╔════╝ 
 ██║  ███╗█████╗  █████╗  █████╔╝ ███████╗██║ █╗ ██║██║  ███╗
 ██║   ██║██╔══╝  ██╔══╝  ██╔═██╗ ╚════██║██║███╗██║██║   ██║
 ╚██████╔╝███████╗███████╗██║  ██╗███████║╚███╔███╔╝╚██████╔╝
  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝  ╚═════╝                                                           
                                              
`,
        "小站已经苟活",
        dnum,
        "天啦!",
        "@2006 By 毕少侠-geekswg mailto://geekswg.qq.com",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            ""
        )
    );
}

createtime1();

function createtime2() {
    var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「大聪明」`, `Photo captured: `, ` 🤪 `];

    setTimeout(
        console.log.bind(
            console,
            `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
            "color:white; background-color:#10bcc0",
            "",
            "",
            'background:url("https://hexo.geekswg.top/imgs/default-cover.webp") no-repeat;font-size:450%'
        )
    );

    setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临，大聪明", "color:white; background-color:#23c682", ""));

    setTimeout(
        console.warn.bind(
            console,
            "%c ⚡ Powered by geekswg 🥝 %c 你正在访问毕少侠🥝の小家",
            "color:white; background-color:#f0ad4e",
            ""
        )
    );

    setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
    setTimeout(
        console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
    );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };