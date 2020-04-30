import swan from "../../onekit/swan"
/**
 * @file test for chooseVideo api
 * @author haoyang
 */
/* globals Page, swan */
/* eslint-disable new-cap */

Page({
    data: {
        sourceIndex: 2,
        sourceArray: ['拍摄', '相册', '拍摄或相册'],
        compressIndex: 0,
        compressArray: ['压缩', '不压缩'],
        durationIndex: 0,
        durationArray: [],
        videoSrc: ''
    },
    onLoad() {
        const array = [];
        for (let i = 0; i < 60; i++) {
            array.push(i + 1 + '秒');
        }
        swan.setData(this,{
            durationIndex: array.length - 1,
            durationArray: array
        });
    },
    sourceChange(e) {
        swan.setData(this,'sourceIndex', e.detail.value);
    },
    compressChange(e) {
        swan.setData(this,'compressIndex', e.detail.value);
    },
    durationChange(e) {
        swan.setData(this,'durationIndex', e.detail.value);
    },
    selectVideo() {
        const sourceIndex = swan.getData(this,'sourceIndex');
        const compressed = swan.getData(this,'compressIndex') === 0;
        const maxDuration = swan.getData(this,'durationIndex') + 1;
        if (sourceIndex === 2) {
            swan.showActionSheet({
                itemList: ['拍摄', '相册'],
                success: res => {
                    const sourceType = res.tapIndex === 0 ? 'camera' : 'album';
                    this.chooseVideo(sourceType, compressed, maxDuration);
                }
            });
        } else {
            const sourceType = sourceIndex === 0 ? 'camera' : 'album';
            this.chooseVideo(sourceType, compressed, maxDuration);
        }
    },
    chooseVideo(sourceType, compressed, maxDuration) {
        swan.chooseVideo({
            sourceType: [sourceType],
            compressed,
            maxDuration,
            success: res => {
                swan.setData(this,'videoSrc', res.tempFilePath);
            },
            fail: err => {
                console.log('chooseVideo fail', err);
            }
        });
    },
    clearVideo() {
        if (swan.getData(this,'videoSrc')) {
            swan.setData(this,'videoSrc', '');
            swan.showToast({title: '视频已清空'});
        }
    },
    videoError() {
        swan.setData(this,'videoSrc', '');
        swan.showToast({title: '添加失败，请稍后重试', icon: 'none'});
    }
});
