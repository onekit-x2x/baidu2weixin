import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        nickname: '百度网友',
        imageSrc: '../../images/avator.png',
        nameColor: 'default',
        title: 'getUserInfo'
    },
    getUserInfo(e) {

        swan.getUserInfo({
            success: res => {
                console.log(res);
               var session_key = swan.getStorageSync('session_key');
                console.log("session_key:"+session_key);
            swan.request({
            // url: 'http://localhost/BaiduApp/baidu/decrypt.jsp', // 开发者服务器地址
            url: 'https://www.onekit.com/BaiduApp/baidu/decrypt.jsp', // 开发者服务器地址
            header: {
            "content-type": "application/x-www-form-urlencoded"
             },
             method: 'POST', 
            data: {
                data : res.data,
                session_key : session_key,
                iv : res.iv
            },
            success: function(res){
                console.log(res.data);
                console.log(res.data.openid);
            }
        });
            },
            fail: err => {
                console.log(err);
                swan.showToast({
                    title: '请先授权'
                });
            }
        });
    },
    clearUserInfo(e) {
        swan.setData(this,{
            nickname: '百度网友',
            imageSrc: '../../images/avator.png',
            nameColor: 'default'
        });
    }
});
