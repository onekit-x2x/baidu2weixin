import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'setNavigationBarTitle',
        newTitle: ''
    },

    titleInput(e) {
        swan.setData(this,'newTitle', e.detail.value);
    },

    setNavigationBarTitle(e) {
        let newTitle = swan.getData(this,'newTitle');
        if (!newTitle) {
            swan.showToast({
                title: '请输入标题'
            });
            return;
        }
        swan.setNavigationBarTitle({
            title: swan.getData(this,'newTitle')
        });
    }
});
