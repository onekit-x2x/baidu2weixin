import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author sunbai@baidu.com
 */

/* globals Page, swan */
Page({
    data: {
        src: '',
        ifImg: true,
        default: true,
        isloading: false,
        disabled: false,
        detailMessage: false,
        isHasNetwork: true
    },
    chooseImage() {
        let vm = this;
        swan.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                let image = res.tempFilePaths[0];
                vm.setData({
                    src: image,
                    ifImg: false,
                    default: true,
                    detailMessage: false
                });
            },
            fail(err) {

            }
        });
    },
    submit() {
        let vm = this;
        swan.getNetworkType({
            success(res) {
                if (res.networkType === 'none') {
                    swan.showToast({
                        title: '网络不给力，请稍后重试',
                        icon: 'none'
                    });
                    vm.setData('isHasNetwork', false);
                }
                else {
                    vm.setData('isHasNetwork', true);
                }
            }
        });
        let isHasNetwork = swan.getData(this,'isHasNetwork');
        if (isHasNetwork) {
            let image = swan.getData(this,'src');
            if (image === '') {
                swan.showToast({
                    title: '请上传图片',
                    icon: 'none'
                });
            }
            else {
                swan.setData(this,{
                    isloading: true,
                    disabled: true
                });
                swan.ai.imageAudit({
                    image,
                    success(res) {
                        vm.setData({
                            isloading: false,
                            disabled: false,
                            default: false,
                            fail: false,
                            detail: res.data
                        });
                        switch (res.conclusionType) {
                            case 1:
                                vm.setData({
                                    textResult: '通过',
                                    color: true,
                                    detailMessage: false
                                });
                                break;
                            case 2:
                                vm.setData({
                                    textResult: '违规',
                                    color: false,
                                    detailMessage: true
                                });
                                break;
                            case 3:
                                vm.setData({
                                    textResult: '疑似违规',
                                    color: false,
                                    detailMessage: true
                                });
                                break;
                            case 4:
                                vm.setData({
                                    textResult: '审核失败',
                                    color: false,
                                    fail: true,
                                    detailMessage: false
                                });
                                break;
                        }
                    },
                    fail(err) {
                        vm.setData({
                            detailMessage: false,
                            isloading: false,
                            disabled: false,
                            default: false,
                            fail: true,
                            color: false,
                            textResult: '审核失败'
                        });
                    }
                });
            }
        }
    },
    clearImage() {
        let image = swan.getData(this,'src');
        if (image === '') {
            swan.showToast({
                title: '请上传图片',
                icon: 'none'
            });
        }
        else {
            swan.setData(this,{
                ifImg: true,
                default: true,
                detailMessage: false,
                disabled: false,
                src: ''
            });
        }
    }
});
