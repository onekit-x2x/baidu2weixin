import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'onNetworkStatusChange',
        networkType: '未获取'
    },

    onLoad() {
        let self = this;
        swan.getNetworkType({
            success: res => {
                swan.setData(self,'networkType', res.networkType);
            }
        });
        swan.onNetworkStatusChange(function (res) {
            swan.setData(self,'networkType', res.networkType);
        });
    }
});
