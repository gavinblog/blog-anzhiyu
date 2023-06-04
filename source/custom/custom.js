window.onload = function() {
    Blog.autoSetCopyRight();
}

const Blog = {

    autoSetCopyRight: function(){
        console.info("--- autoSetCopyRight ---");
    }




}


// 自定义 metingjs-api
// https://api.injahow.cn/meting/ 
// https://meting.qjqq.cn/
// https://meting.anzhiy.cn/?server=netease&type=playlist&id=8152976493&auth=undefined&r=0.367
var meting_api='https://meting.anzhiy.cn/?server=:server&type=:type&id=:id&auth=:auth&r=:r';
