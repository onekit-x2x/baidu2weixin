import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {

    },
    downloadFile() {
        this.toast('正在保存', 'loading');
        swan.downloadFile({
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            success: res => {
                const filePath = res.tempFilePath;
                swan.showModal({
                    title: '文件下载完成',
                    content: '是否需要打开？',
                    confirmText: '打开',
                    success: res => {
                        if (res.confirm) {
                            swan.openDocument({
                                filePath,
                                fileType: 'pdf',
                                fail: err => {
                                    this.toast('打开失败');
                                }
                            });
                        }
                    }
                });
            },
            fail: err => {
                this.toast('下载文件失败');
            },
            complete: () => {
                swan.hideToast();
            }
        });
    },
    toast(title, icon = 'none') {
        swan.showToast({title, icon});
    }
});
