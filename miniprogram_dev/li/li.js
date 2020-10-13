import OnekitPage from '../baidu2weixin/OnekitPage';
import swan from '../baidu2weixin/swan';
var app = getApp();
OnekitPage({
    data:{
        types:{
            smallDefault:[
                'success',
                'info',
                'warn',
                'waiting',
                'setting',
                'top',
                'search',
                'personal',
                'download',
                'clear',
                'close',
                'cancel',
                'success_no_circle',
                'checkboxSelected',
                'radioSelected',
                'radioUnselect',
                'loadingGrey'
            ]
        },
        colors:[
            '#3388FF',
            '#F7534F',
            '#FF6600',
            '#000000'
        ],
        sizes:[
            40,
            34,
            30,
            24,
            22,
            18,
            16
        ]
    },
    onShow:function(){
        var openParams = app.globalData.openParams;
        if(openParams){
        swan.reportAnalytics('pageshow',{
            fr:openParams,
            type:'component',
            name:'icon'
        });
    }
    },
    onHide:function(){
        app.globalData.openParams = '';
    }
});
