function danmu() {
    //if (location.pathname != '/guestbook/' || document.body.clientWidth < 100) return; //判断是否是留言板页面
    console.info(1111);
    const Danmaku = new EasyDanmaku({
      page: '/guestbook/', // 即留言板地址
      el: '#danmu', //弹幕挂载节点
      line: 10, //弹幕行数
      speed: 20, //弹幕播放速度
      hover: true,
      loop: true, //开启循环播放
    })
    let data = saveToLocal.get('danmu')
    if (data) Danmaku.batchSend(data, true);
    else {
      let ls = []
      fetch('https://twikoo.geekswg.top/', { // 此处替换成自己的twikoo地址
        method: "POST",
        body: JSON.stringify({
          "event": "GET_RECENT_COMMENTS",
          "includeReply": true,
          "pageSize": 100
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json()).then(({ data }) => {
        data.forEach(i => {
          if (i.avatar == undefined) i.avatar = 'https://cravatar.cn/avatar/d615d5793929e8c7d70eab5f00f7f5f1?d=mp'
          ls.push({ avatar: i.avatar, content: i.nick + '：' + formatDanmaku(i.comment), url: i.url + '#' + i.id })
        });
        Danmaku.batchSend(ls, true);
        saveToLocal.set('danmu', ls, 0.02)
      });
      // 格式化评论
      function formatDanmaku(str) {
        str = str.replace(/<\/*br>|[\s\uFEFF\xA0]+/g, '');
        str = str.replace(/<img.*?>/g, '[图片]');
        str = str.replace(/<a.*?>.*?<\/a>/g, '[链接]');
        str = str.replace(/<pre.*?>.*?<\/pre>/g, '[代码块]');
        str = str.replace(/<.*?>/g, '');
        return str
      }
    }
    //document.getElementById('danmuBtn').innerHTML = `<button class="hideBtn" onclick="document.getElementById('danmu').classList.remove('hidedanmu')">显示弹幕</button> <button class="hideBtn" onclick="document.getElementById('danmu').classList.add('hidedanmu')">隐藏弹幕</button>`
  }
  danmu();
  document.addEventListener("pjax:complete", danmu);