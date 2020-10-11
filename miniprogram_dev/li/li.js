import OnekitPage from '../baidu2weixin/OnekitPage';
import swan from '../baidu2weixin/swan';
var app = getApp();
OnekitPage({
    data:{
        path:'/li/lottie_example_one.json',
        loop:true,
        autoplay:true,
        action:'play',
        hidden:false,
        status:'暂停'
    },
    onShow:function(){
        console.log(' 百度 App版本11.3以上才可使用');
        const openParams = app.globalData.openParams;
        if(openParams){
        swan.reportAnalytics('pageshow',{
            fr:openParams,
            type:'component',
            name:'animation-view'
        });
    }
    },
    onHide:function(){
        app.globalData.openParams = '';
    },
    playLottie:function(){
        var action = this.data.action;
        action = (action === 'pause')?'play':'pause';
        var status = (action === 'pause')?'播放':'暂停';
        this.setData({
        action:action,
        status:status
    });
    },
    lottieEnd:function(){
        console.log('自然播放结束会触发回调，循环播放结束及手动停止动画不会触发。');
    }
});
