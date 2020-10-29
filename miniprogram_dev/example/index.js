import{swan} from '../baidu2weixin/index'
import{OnekitPage} from '../baidu2weixin/index'
OnekitPage({
  onLoad: function () {
    swan.chooseImage({
        success: res => {
            console.log('临时文件路径:', res);
            swan.saveFile({
                tempFilePath: res.tempFilePaths[0],
                success: res => {
                    console.log('保存到的路径是：', res);
                    
                },
                fail: err => {
                    console.log('保存失败：', err);
                }
            });
        },
        fail: err => {
            console.log(err);
        }
    })
},
});
