function addLoadEvent(func){   // 多个window.onload共用的封装函数
    var oldonload=window.onload; 
    if(typeof window.onload!='function'){ 
        window.onload=func; 
    }else{  // 是一个函数的话，把函数都加在onload之下
        window.onload=function(){ 
            oldonload(); 
            func(); 
        } 
    } 
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    Blog.hellworld();
    //setInterval(Blog.setControlIcon,5*1000);

    //Blog.welcomeAlrt();
    
});


const Blog = {

    hellworld: function(){
        console.info("--- Blog.hellowrold() ---");
    },

    setControlIcon: function(){
        console.info(new Date() + ': setControlIcon');
        //需要 配置文件 fontawesome: true #是否启用fontawesome6图标
        let consoleHtml = document.getElementById('center-console').innerHTML || '';
        //alert('center-console => ' + consoleHtml);
        if (consoleHtml.indexOf('fa-windows')<0){
            console.info("--- Blog.setControlIcon() ---");
            document.getElementById('center-console').innerHTML = '<i class="fa-brands fa-windows fa-beat-fade"></i>';
        }
        
    },
    welcomeAlrt: function(){
        if(sessionStorage.getItem("firstEnter") != 1){
            sessionStorage.setItem("firstEnter",1);
            this.swalAler();
        }
        
        // try {
        //     setTimeout(() => {
        //         console.info('--- autoPlayMusic1 ---');
        //         anzhiyu.musicToggle();
        //         console.info('--- autoPlayMusic2 ---');
        //     }, 1000);
        //     setTimeout(() => {
        //         console.info('--- autoPlayMusic1 ---');
        //         anzhiyu.musicToggle();
        //         console.info('--- autoPlayMusic2 ---');
        //     }, 2000);
        // } catch (error) {
        //     console.error(error);
        // }
    },
    swalAler: function(msg,successOp,failOp){
        Swal.fire({
            title: "",
            //text: "<span style='color:red;'>欢迎光临</span>",
            html: "<span style='color:red;'>欢迎光临</span>",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "进入博客",
            cancelButtonText: "进入主页",
            allowOutsideClick: false,
            background:  "linear-gradient(145deg, #0396FF, transparent)",
            //background:  "linear-gradient(to right, #0396FF, transparent)",   //"transparent",
        }).then((isConfirm) =>{
            if (isConfirm.value) {
                anzhiyu.musicToggle();
                //Swal.fire("删除成功", "成功", "success");
            }else{
                //Swal.fire("取消操作", "点击了取消", "error");
                location.href = 'https://home.geekswg.top';
            }
        });
    }

}
// document.addEventListener('pjax:complete', Blog.setControlIcon);


// 自定义 metingjs-api
// https://api.injahow.cn/meting/ 
// https://meting.qjqq.cn/
// https://meting.anzhiy.cn/?server=netease&type=playlist&id=8152976493&auth=undefined&r=0.367
//var meting_api = 'https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r';
