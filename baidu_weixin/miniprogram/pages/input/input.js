import swan from "../../onekit/swan"
/**
 * @file demo component for input
 * @author swan
 */

let app = getApp();

Page({
    data: {
        inputValue: '',
        value: '初始value值'
    },
    onShow() {
        // 打点操作
        var openParams= app.globalData.openParams;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'input',
           });
        }
    },
    onHide() {
        getApp().globalData.openParams = ''
    },
    bindButtonTap: function () {
        this.setData({
            focus: true
        });
    },
    bindKeyInput: function (e) {
        this.setData({
            inputValue: e.detail.value
        });
    },
    bindKeyfocus: function (e){
        console.log(e.detail);
    },
    bindKeyblur: function (e){
        swan.showToast({
            title: '普通input失焦事件',
            icon: 'none'
        });
    },
    bindKeycomfirm: function (e){
        swan.showToast({
            title: '点击确定',
            icon: 'none'
        });
    }
});
