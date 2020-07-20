/**
 * @file demo component for camera
 * @author swan
 */

let app = getApp();

Page({
    data: {
        src: '',
        device: 'back',
        videoSrc: ''
    },
    onLoad(e) {
    },
    onShow() {
        // 打点操作
        var openParams= app.globalData.openParams;
        if (openParams) {
            wx.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'camera',
           });
        }
    },
    onHide() {
        getApp().globalData.openParams = ''
    },
    switchCamera() {
        const devices = this.getData('device');
        if (devices === 'back') {
            this.setData({
                device: 'front'
            });
        } else {
            this.setData({
                device: 'back'
            });
        }
    },
    takePhoto() {
        const ctx = wx.createCameraContext();
        ctx.takePhoto({
            quality: 'high',
            success: res => {
                this.setData({
                    src: res.tempImagePath
                });
            }
        });
    },
    startRecord() {
        const ctx = wx.createCameraContext();
        ctx.startRecord({
            success: res => {
                wx.showToast({
                    title: 'startRecord'
                });
            }
        });
    },
    stopRecord() {
        const ctx = wx.createCameraContext();
        ctx.stopRecord({
            success: res => {
                wx.showModal({
                    title: '提示',
                    content: res.tempVideoPath
                });
                this.setData({
                    videoSrc: res.tempVideoPath
                });
            }
        });
    },
    error(e) {
        console.log(e.detail);
    }
});
