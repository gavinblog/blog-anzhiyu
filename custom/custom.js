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
    setInterval(Blog.setControlIcon,5*1000);
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
        
    }

}

document.addEventListener('pjax:complete', Blog.setControlIcon);


// 自定义 metingjs-api
// https://api.injahow.cn/meting/ 
// https://meting.qjqq.cn/
// https://meting.anzhiy.cn/?server=netease&type=playlist&id=8152976493&auth=undefined&r=0.367
//var meting_api='https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r';
