import swan from "../../onekit/swan"
/**
* @file demo component for switch
 * @author swan
 */

let app = getApp();

Page({
    data: {
        
    },
    onShow() {
        // 打点操作
        var openParams= app.globalData.openParams;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'switch',
            });
        }
        
    },
    onHide() {
        getApp().globalData.openParams = ''
    },
});


