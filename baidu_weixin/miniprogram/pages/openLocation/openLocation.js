import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author rabbit77
 */
/* globals Page, swan */

Page({
    data: {
        title: 'openLocation',
        loading: false,
        locationInfo: {
            latitude: 40.04,
            longitude: 116.27,
            scale: 18,
            name: '百度科技园',
            address: '北京市海淀区西北旺东路10号院'
        }
    },
    openLocation () {
        let locationInfo = this.data.locationInfo;
        swan.openLocation({
            latitude: locationInfo.latitude,
            longitude: locationInfo.longitude,
            scale: 18,
            name: locationInfo.name,
            address: locationInfo.address,
            success: function (res) {
                console.log('success', res);
            },
            fail : function (err) {
                swan.showToast({
                    title: '检查位置权限',
                    icon: 'none'
                })
                console.log('fail msg', err);
            }
        });
    }
});
