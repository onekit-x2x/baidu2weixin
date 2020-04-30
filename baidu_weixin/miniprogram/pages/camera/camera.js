import swan from "../../onekit/swan"
/**
 * @file test for camera component
 * @author xiongyang
 */

/* eslint-disable fecs-camelcase */
/* globals Page, swan */
Page({
    data: {
        hidden: true
    },
    changeShow() {
        let showType = swan.getData(this,'hidden');
        swan.setData(this,'hidden', !showType);
    },
    takePhoto() {
        const ctx = swan.createCameraContext();
        ctx.takePhoto({
            quality: 'high',
            success: res => {
                swan.setData(this,{
                    src: res.tempImagePath
                });
            }
        });
    },
    error(e) {
        console.log(e.detail);
    }
});
