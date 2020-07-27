import swan from "../../onekit/swan"


let app = getApp();

Page({
    data: {
        propagation: true,
        startTime: 20,
        stayTime: 20
    },
    onLoad(e) {
    },
    onShow() {
        // 打点操作
        var openParams = app.globalData.openParams;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'button'
           });
        }
    },
    onHide() {
        getApp().globalData.openParams = ''
    },
    onShareAppMessage() {
        return {
            title: '小程序标题',
            content: '世界很复杂，百度更懂你',
            imageUrl: 'https://b.bdstatic.com/miniapp/images/baidulogo1.jpg',
            path: '/subPackages/apiPackage/pages/openShare/openShare',
            success: res =>  {
                // 分享成功
            },
            fail: err => {
                // 分享失败
            }
        };
    },
    getUserInfo(e) {
        console.log('用户信息:', e);
    },
    opensetting(e) {
        console.log('用户设置:', e);
    },
    getPhoneNumber(e) {
        console.log('用户手机号:', e);
    },
    contact(e) {
        console.log('用户面板:', e);
    },
    tap() {
        swan.showToast({
            title: '已点击',
            icon: 'none'
        });
    }
});
