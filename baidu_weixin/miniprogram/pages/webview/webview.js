import swan from "../../onekit/swan"
/**
 * @file demo page for webview
 * @author bailonggang
 */
/* globals Page, swan */

const webviewUrl = 'https://smartprogram.baidu.com';
Page({
    data: {
        src: ''
    },
    onLoad(options) {
        if (options.webview) {
            swan.setData(this,'src', webviewUrl);
        }
    },
    openWebViewCurrent() {
        swan.setData(this,'src', webviewUrl);
    },
    openWebViewInNewPage() {
        swan.navigateTo({
            url: '/pages/webview/webview?webview=1'
        });
    }
});