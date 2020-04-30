import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author sunbai
 */
/* globals Page, swan */

Page({
    data: {

    },
    formSubmit: function(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
    },
    formReset: function() {
        console.log('form表单reset');
    }
});
