import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'getNetworkType',
        networkType: '未获取'
    },

    getNetworkType() {
        swan.getNetworkType({
            success: res => {
                swan.setData(this,'networkType', res.networkType);
            },
            fail: err => {
                swan.showToast({
                    title: '获取网络状态失败'
                });
            }
        });
    },

    clearClick(e) {
        swan.setData(this,'networkType', '未获取');
    }
});
