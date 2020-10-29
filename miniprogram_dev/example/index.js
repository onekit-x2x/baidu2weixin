import{swan} from '../baidu2weixin/index'
import{OnekitPage} from '../baidu2weixin/index'
OnekitPage({
  
  onLoad: function (options) {

   swan.chooseImage({
  success(res) {
    // 获取图片, chooseImage 获取的文件在临时文件目录内
    const tempFilePaths = res.tempFilePaths;
    if (tempFilePaths[0]) {
      // 保存到用户目录
      saveFile(tempFilePaths[0]);

swan.getSavedFileList({
  success(res) {
    res.fileList.forEach((item) => {
      console.log(item.filePath, item.createTime, item.size);
    });
  },
});


    }
  },
});

function saveFile(tempFilePath) {
  swan.saveFile({
    tempFilePath,
    success(res) {
      // console.log(res);
    },
    fail(res) {
      // console.log(res);
    },
  });
}






  }


});
