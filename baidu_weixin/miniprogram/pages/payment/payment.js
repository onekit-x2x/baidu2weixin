import swan from "../../onekit/swan"
/**
 * @file payment.js
 * @author renzhonghua
 */
/* globals Page, swan */
Page({
    data: {
        title: 'requestPolymerPayment'
    },

    requestPolymerPayment(e) {
        swan.request({
            // url: 'http://localhost/BaiduApp/baidu/app/unifiedorder.jsp',
            url: 'https://www.onekit.com/BaiduApp/baidu/app/unifiedorder.jsp',
            header: {
             "content-type": "application/x-www-form-urlencoded"
             },
             method: 'POST', 
            data:{
            },
            success: res => {
                console.log(res.data);
                var data = res.data;

                swan.setStorageSync('tpOrderId' , res.data.tpOrderId);
                console.log("tpOrderId:"+swan.getStorageSync('tpOrderId'));

                swan.requestPolymerPayment({
                    orderInfo: data,
                    // bannedChannels: swan.getData(this,'bannedChannels'),
                    success(res) {
                        console.log(res.data.orderId);
                        swan.setStorageSync('tpOrderId' , res.data.tpOrderId );
                        swan.showToast({
                            title: '支付成功',
                            icon: 'success'
                        });
                    },
                    fail(err) {
                        swan.showToast({
                            title: err.errMsg,
                            icon: 'none'
                        });
                        console.log('pay fail', err);
                    }
                });
            },
            fail: err => {
                swan.showToast({
                    title: '订单创建失败',
                    icon: 'none'
                });
                console.log('create order fail', err);
            }
        });
    }
});
