import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'login',
        hasLogin: false
    },

    login(e) {
       
       swan.login({
    success: function (res) {
        console.log(res);
        swan.request({
            url: 'https://www.onekit.com/BaiduApp/weixin/jscode2sessionkey.jsp', 
            // url: 'http://localhost/BaiduApp/baidu/jscode2sessionkey.jsp', 
            data: {
                code: res.code
            },
            header: {
            "content-type": "application/x-www-form-urlencoded"
            },
            ethod: 'POST', 
            success: function(res){
                console.log(res.data);
                swan.setStorageSync('openid', res.data.openid);
                swan.setStorageSync('session_key', res.data.session_key);

                console.log("openid:"+swan.getStorageSync('openid'));
                console.log("session_key:"+swan.getStorageSync('session_key'));

        //         swan.request({
        //           url: 'http://localhost/BaiduApp/cgi-bin/token', // 开发者服务器地址
        //         //   url: 'https://www.onekit.com/baidu/cgi-bin/token', 
        //           success: function(res){
        //           console.log(res.data);
        //         swan.setStorageSync('access_token', res.data);

        //         }
        // });

            }
            
        });
    },
    fail: function (err) {
        console.log('login fail', err);
    }
});
            }
});
