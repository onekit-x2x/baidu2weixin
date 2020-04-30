import swan from "../../onekit/swan"
/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        filePath: ''
    },
    saveFile() {
        this.toast('正在保存', 'loading');
        swan.downloadFile({
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            success: res => {
                swan.saveFile({
                    tempFilePath: res.tempFilePath,
                    success: res => {
                        this.toast('保存成功', 'success');
                        swan.setData(this,'filePath', res.savedFilePath);
                    },
                    fail: err => {
                        this.toast('保存失败，请稍后重试', 'none');
                    }
                });
            },
            fail: err => {
                this.toast('保存失败，请稍后重试', 'none');
            }
        });
    },
    openFile() {
        const filePath = this.getFile('请先保存文件');
        if (!filePath) {
            return;
        }

        swan.openDocument({
            filePath,
            fileType: 'pdf'
        });
    },
    deleteFile() {
        const filePath = this.getFile('无可删除文件');
        if (!filePath) {
            return;
        }

        swan.removeSavedFile({
            filePath,
            success: res => {
                swan.setData(this,'filePath', '');
                this.toast('删除成功', 'success');
            },
            fail: err => {
                this.toast('操作失败，请稍后重试', 'none');
            }
        });
    },
    getFile(errTips) {
        const filePath = swan.getData(this,'filePath');
        if (!filePath) {
            this.toast(errTips, 'none');
        }
        return filePath;
    },
    toast(title, icon) {
        swan.showToast({title, icon});
    }
});
