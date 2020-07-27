import swan from "../../onekit/swan"
/**
 * @file demo component for label
 * @author swan
 */
/* globals Page, swan */
let app = getApp();

Page({
    data: {
        checkboxItems: [
            {name: 'CHN', value: '选项一', checked: 'true'},
            {name: 'USA', value: '选项二'}
        ],
        radioItems: [
            {name: 'CHN', value: '选项一', checked: 'true'},
            {name: 'USA', value: '选项二'}
        ]
    },

    onShow() {
        // 打点操作
        var openParams= app.globalData.openParams;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'label'
           });
        }
    },
    onHide() {
        getApp().globalData.openParams = ''
    }
});
