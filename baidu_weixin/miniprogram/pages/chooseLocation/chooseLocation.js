import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author sunbai@baidu.com
 */
/* globals Page, swan */

Page({
    data: {
        location: '',
        title: 'chooseLocation'
    },
    onReady() {
        swan.authorize({
            scope: 'scope.userLocation',
            success: function (res) {
                console.log(res);
            },
            fail: function () {
                console.log('授权失败');
            }
        });
    },
    chooseLocation() {
        let that = this;
        swan.chooseLocation({
            success: function (res) {
                console.log(res);
                swan.setData(that,{
                    'msg': res.name,
                    'location': that.formatLocation(res.longitude, res.latitude)
                });
            },
            fail: function (err) {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    },
    clearLocation() {
        swan.setData(this,{
            location: ''
        });
    },
    formatLocation(longitude, latitude) {
        if (typeof longitude === 'string' && typeof latitude === 'string') {
            longitude = parseFloat(longitude);
            latitude = parseFloat(latitude);
        }
        longitude = longitude.toFixed(2);
        latitude = latitude.toFixed(2);
        return {
            longitude: longitude.toString().split('.'),
            latitude: latitude.toString().split('.')
        };
    }
});
