import OnekitPage from '../baidu2weixin/OnekitPage';
import swan from '../baidu2weixin/swan';
OnekitPage({
    submit:function(){
        swan.showToast({
        title:'用户点击了submit',
        icon:'none'
    });
    },
    reset:function(){
        swan.showToast({
        title:'用户点击了reset',
        icon:'none'
    });
    },
});
