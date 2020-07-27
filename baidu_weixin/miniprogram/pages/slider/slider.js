import swan from "../../onekit/swan"
// /**
//  * @file demo slider componnent
//  * @author lvlei
//  */

// /* globals Page */
// Page({
//     sliderChange(e) {
//         console.log(e);
//     }
// });


/**
 * @file demo component for slider
 * @author swan
 */

let app = getApp();

Page({
    onLoad(e) {
    },
    onShow() {
        // 打点操作
        var openParams= app.globalData.openParams;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'slider',
           });
        }
    },
    onHide() {
        getApp().globalData.openParams = ''
    },
    sliderChange(e) {
        console.log(e);
    },
    changing(e){
        console.log(e);
    }
});
