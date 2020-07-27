 import swan from "../../onekit/swan"
// /**
//  * @file demo page for apiDemo
//  * @author sunbai
//  */
// /* globals Page, swan */

// Page({
//     data: {

//     },
//     formSubmit: function(e) {
//         console.log('form发生了submit事件，携带数据为：', e.detail.value);
//     },
//     formReset: function() {
//         console.log('form表单reset');
//     }
// });

/**
 * @file demo component for form
 * @author swan
 */

let app = getApp();

Page({
    data: {

    },
    onLoad(e) {
    },
    onShow() {
        // 打点操作
        var openParams= app.globalData.openParams;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'form',
           });
        }
    },
    onHide() {
        getApp().globalData.openParams = ''
    },
    formSubmit: function(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        swan.showModal({
            title: '表单数据',
            content: JSON.stringify(e.detail.value),
            confirmText: '确定',
            showCancel: false
        });
    },
    formReset: function() {
        console.log('form表单reset');
    }
});
