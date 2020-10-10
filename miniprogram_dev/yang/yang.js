import OnekitPage from '../baidu2weixin/OnekitPage';
import swan from '../baidu2weixin/swan';

OnekitPage({
    data: {
        key: '示例Key',
        value: '示例Value',
        disabled: true
    },
   
    keyFocus() {
        this.setData('key', '');
    },
    valueFocus() {
        this.setData('value', '');
    },
    keyInput(e) {
        this.setData('key', e.detail.value);
    },
    valueInput(e) {
        this.setData('value', e.detail.value);
    },
    setStorage() {
        let key = this.hasKey();
        if (!key) {
            return;
        }

        swan.setStorage({
            key,
            data: this.getData('value'),
            success: res => {
                this.toast('存储成功', 'none');
                this.setData('disabled', false);
            },
            fail: err => {
                this.toast('存储数据失败');
            }
        });
    },
    getStorage() {
        let key = this.hasKey();
        if (!key) {
            return;
        }

        swan.getStorage({
            key,
            success: res => {
                const data = res.data;
                if (data) {
                    swan.showModal({
                        title: '数据信息',
                        content: `${key}: ${data}`,
                        showCancel: false
                    });
                }
                else {
                    this.toast('找不到key对应的值');
                }
            },
            fail: err => {
                this.toast('读取数据失败');
            }
        });
    },
    clearStorage() {
        swan.clearStorage({
            success: res => {
                this.toast('后台数据已清除', 'none');
            },
            fail: err => {
                console.log('clearStorage fail', err);
            }
        });
    },
    getStorageInfo() {
        swan.getStorageInfo({
            success: res => {
                swan.showModal({
                    title: '',
                    content: JSON.stringify(res)
                });
                console.log('getStorageInfo success', res);
            },
            fail: err => {
                console.log('getStorageInfo fail', err);
            }
        });
    },
    hasKey() {
        let key = this.getData('key');
        if (key) {
            return key;
        }

        this.toast('key不能为空');
    },
    toast(title, icon = 'none') {
        swan.showToast({title, icon});
    }
});