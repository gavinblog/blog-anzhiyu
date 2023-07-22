if (window.localStorage.getItem("fpson") == undefined || window.localStorage.getItem("fpson") == "1") {
    var rAF = function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    }();
    var frame = 0;
    var allFrameCount = 0;
    var lastTime = Date.now();
    var lastFameTime = Date.now();
    var loop = function () {
        var now = Date.now();
        var fs = (now - lastFameTime);
        var fps = Math.round(1000 / fs);

        lastFameTime = now;
        // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
        allFrameCount++;
        frame++;

        let fpsColor = '#bd0000';
        if (now > 1000 + lastTime) {
            var fps = Math.round((frame * 1000) / (now - lastTime));
            if (fps <= 5) {
                var kd = `<span style="color:#bd0000">卡成ppt🤢</span>`;
            } else if (fps <= 15) {
                fpsColor = "red";
                var kd = `<span style="color:red">电竞级帧率😖</span>`;
            } else if (fps <= 25) {
                var kd = `<span style="color:orange">有点难受😨</span>`;
                fpsColor = "orange";
            } else if (fps < 35) {
                var kd = `<span style="color:#9338e6">不太流畅🙄</span>`;
                fpsColor = "#9338e6";
            } else if (fps <= 45) {
                var kd = `<span style="color:#08b7e4">还不错哦😁</span>`;
                fpsColor = "#08b7e4";
            } else {
                var kd = `<span style="color:#39c5bb">十分流畅🤣</span>`;
                fpsColor = "#39c5bb";
            }
            //document.getElementById("fps").innerHTML = `FPS:${fps} ${kd}`;
            document.getElementById("fps").innerHTML = "<div style='color:"+fpsColor+";'>FPS<br>"+fps+"</div>";
            frame = 0;
            lastTime = now;
        };

        rAF(loop);
    }

    loop();
} else {
    document.getElementById("fps").style = "display:none!important"
}