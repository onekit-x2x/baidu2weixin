import OnekitPage from '../baidu2weixin/OnekitPage';
import swan from '../baidu2weixin/swan';

OnekitPage({
    // onSocketMessage(e) {
    //     swan.onSocketOpen(function () {
    //         swan.sendSocketMessage({
    //             data: 'baidu'
    //         });
    //     });
    //     swan.onSocketMessage(function (res) {
    //         swan.showModal({
    //             title: '监听到收到服务器内容',
    //             content: `data为：${res.data}; dataType为：${res.dataType}`
    //         });
    //         console.log(res.data)
    //     });

    //     swan.connectSocket({
    //         url: 'wss://echo.websocket.org',
    //         success: res => {
    //             console.log('connectSocket success', res);
    //         },
    //         fail: err => {
    //             console.log('connectSocket fail', err);
    //         }
    //     });
    // }
    showToast() {
        swan.showToast({
            title: '默认toast',
            mask: false,
            success: res => {
                this.setData({'disabled': false});
            },
            fail: err => {
                console.log('showToast fail', err);
            }
        });
    }
});