import swan from "../../onekit/swan"
/**
 * @file demo page for swan
 * @author houyu
 */
/* globals Page */

Page({
    data: {
        id: 'detail'
    },
    onLoad(options) {
        swan.setData(this,{
            'id': options.id
        });
    }
});
