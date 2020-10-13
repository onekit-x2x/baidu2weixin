import OnekitPage from '../baidu2weixin/OnekitPage';
import swan from '../baidu2weixin/swan';
OnekitPage({
    data:{
        isWeb:false,
        appData:getApp().globalData.openParams
    },
    onShow:function(){
        const openParams = this.data.appData;
        if(openParams){
        swan.reportAnalytics('pageshow',{
            fr:openParams,
            type:'component',
            name:'navigator'
        });
    }
        if((openParams === 'docWeb')){
        this.setData('isWeb',true);
    }
        swan.getSystemInfo({
        success:(res)=>{this.setData('isWeb',(res.platform === 'web'))}
    });
    },
    onHide:function(){
        this.data.appData = '';
    },
    successHandler:function(e){
        console.log('success',e.detail.errMsg);
    },
    failHandler:function(e){
        console.log('fail',e.detail.errMsg);
    },
    completeHandler:function(e){
        console.log('complete',e.detail.errMsg);
    }
});