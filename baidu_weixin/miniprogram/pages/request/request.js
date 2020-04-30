import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        loading: false
    },
    request() {
        swan.setData(this,'loading', true);
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            data: {
                tabname: '美食酒水'
            },
            success: res => {
                swan.showToast({
                    title: '请求成功',
                    icon: 'success'
                });
                console.log('request success', res);
            },
            fail: err => {
                swan.showToast({
                    title: JSON.stringify(err)
                });
                console.log('request fail', err);
            },
            complete: () => {
                swan.setData(this,'loading', false);
            }
        });
    }
});
