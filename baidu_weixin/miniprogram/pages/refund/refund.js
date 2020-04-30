import swan from "../../onekit/swan"
/**
 * @file payment.js
 * @author renzhonghua
 */
/* globals Page, swan */
Page({
    data: {
        title: 'refund'
    },

    refund(e){
        
        swan.request({
            url: 'http://localhost/BaiduApp/baidu/app/refund.jsp',
            // url: 'https://www.onekit.com/BaiduApp/baidu/app/refund.jsp',
            data:{
                'tpOrderId' : 'nZ7naD6LHn'//swan.getStorageSync('tpOrderId'),
            },
            header: {
             "content-type": "application/x-www-form-urlencoded"
             },
             method: 'POST', 
            success(res){
                var data = res.data;
                console.log(data.data);
            },
            fail: err => {
                console.log("退款失败");
            }
        });

    }
    
});
