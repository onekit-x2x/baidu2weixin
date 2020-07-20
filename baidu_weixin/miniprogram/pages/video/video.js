/**
 * @file demo component for video
 * @author swan
 */

let app = getApp();
Page({
    data: {
        current: 0,
        srcList: ['https://b.bdstatic.com/miniapp/development_tool/Smartprogram.mp4', 'https://vd3.bdstatic.com/mda-ib0u8x1bvaf00qa8/mda-ib0u8x1bvaf00qa8.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D'],
        src: 'https://b.bdstatic.com/miniapp/development_tool/Smartprogram.mp4',
        loop: false,
        voice: false,
        posterSrc: 'https://gss0.bdstatic.com/5foIcy0a2gI2n2jgoY3K/static/smartprogram-developer/img/video_cover.90f71a8.png',
        initialTime: '0',
        objectFit: '',
        pageGesture: 'false',
        fullscreenBtn: 'true',
        playBtn: 'true',
        centerPlayBtn: 'true',
        noWifiTip: 'true',
        danmuList: [{
            text: '第 1s 出现的弹幕',
            color: '#6895FF',
            time: 1
        }, {
            text: '第 3s 出现的弹幕',
            color: '#6895FF',
            time: 3
        }],
        sendInfo: '',
        userMessage: ''
    },
    onLoad(e) {
    },
    onShow() {
        // 打点操作
        var openParams = app.globalData.openParams;
        if (openParams) {
            wx.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'video'
           });
        }
    },
    onHide() {
        getApp().globalData.openParams = '';
    },
    onReady() {
        this.videoContext = wx.createVideoContext('myVideo');
    },
    initialTime() {
        this.setData({
            initialTime: '20'
        });
    },
    controls() {
        this.setData({
            controls: !this.data.controls
        });
    },
    loop() {
        this.setData({
            loop: true
        });
        wx.showToast({
            title: '设置循环播放成功',
            icon: 'none'
        });
    },
    voice() {
        this.setData({
            voice: !this.data.voice
        });
    },
    objectFit (e) {
        this.setData({
            objectFit: e.currentTarget.dataset.set
        });
        console.log('objectFit', e.currentTarget.dataset.set);
    },
    pageGesture() {
        this.setData({
            pageGesture: true
        });
    },
    fullscreenBtn() {
        this.setData({
            fullscreenBtn: !this.data.fullscreenBtn
        });
    },
    playBtn() {
        this.setData({
            playBtn: !this.data.playBtn
        });
    },
    centerPlayBtn(){
        this.setData({
            centerPlayBtn: !this.data.centerPlayBtn
        });
    },

    noWifiTip() {
        this.setData({
            noWifiTip: !this.data.noWifiTip
        });
    },

    play: function (e) {
        console.log('play!');
    },
    pause: function (e) {
        console.log('pause');
    },
    fullscreen: function (e) {
        console.log('fullscreenchange!! 参数是' + JSON.stringify(e));
    },
    ended: function (e) {
        console.log('ended');
        this.next();
    },
    nextVideo: function (e) {
        let list = this.getData('srcList');
        let current = (this.data.current + 1) % list.length;
        this.setData('src', list[current]);
        this.data.current = current;
    },
    waiting: function (e) {
        console.log('waiting');
    },
    error: function (e) {
        console.log('error');
    },
    bindInput(e) {
        this.data.userMessage = e.detail.value;
    },
    cleanInput() {
        this.videoContext.sendDanmu({
            text: this.data.userMessage
        });
    }
});