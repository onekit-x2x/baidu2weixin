import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'makePhoneCall',
        phoneNumber: ''
    },

    phoneNumberInput(e) {
        swan.setData(this,'phoneNumber', e.detail.value);
    },

    makePhoneCall(e) {
        let phoneNumber = swan.getData(this,'phoneNumber');
        if (!phoneNumber) {
            swan.showToast({
                title: '请输入电话号码'
            });
            return;
        }
        swan.makePhoneCall({
            phoneNumber,
            fail: err => {
                swan.showModal({
                    title: '拨打失败',
                    content: '请检查是否输入了正确的电话号码',
                    showCancel: false
                });
            }
        });
    }
});
