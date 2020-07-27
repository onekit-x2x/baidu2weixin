import swan from "../../onekit/swan"
/**
 * @file demo component for radio
 * @author swan
 */
/* globals Page, swan */
let app = getApp();

Page({
    data: {
        items: [
            {
                value: 'have',
                text: '选中选项',
                checked: true,
                id: 1
            },
            {
                value: 'have',
                text: '未选中选项',
                id: 2
            }
        ],
        result: []
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
                name: 'radio',
           });
        }
    },
    onHide() {
        getApp().globalData.openParams = ''
    },
    radioChange: e => {
        console.log(e);
    }
});
