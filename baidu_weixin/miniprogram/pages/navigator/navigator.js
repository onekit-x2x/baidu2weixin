import swan from "../../onekit/swan"

/**
 * @file demo component for navigator
 * @author swan
 */

/* globals getApp swan app*/

/* eslint-disable */

Page({
    data: {
        isWeb: false,
        appData: getApp().globalData.openParams
    },
    onShow() {
        // 打点操作
        let openParams = this.data.appData;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'navigator'
            });
        }

        if (openParams === 'docWeb') {
            this.setData('isWeb', true);
        }

        swan.getSystemInfo({
            success: res => {
                this.setData('isWeb', res.platform === 'web');
            }
        });
    },
    onHide() {
        app.globalData.openParams = '';
    },
    successHandler(e) {
        console.log('success', e.detail.errMsg);
    },
    failHandler(e) {
        console.log('fail', e.detail.errMsg);
    },
    completeHandler(e) {
        console.log('complete', e.detail.errMsg);
    }
});
