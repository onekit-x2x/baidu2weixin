import{swan} from '../baidu2weixin/index'
import{OnekitPage} from '../baidu2weixin/index'
OnekitPage({
  data: {
  
  },
  onLoad: function (options) {

swan.chooseImage({
  success: (res) => {
    const tempFilePaths = res.tempFilePaths;
    if (tempFilePaths[0]) {
      // 保存到用户目录
      saveFile(tempFilePaths[0]);
    }
  }
});


function removeSavedFile(filePath) {
    swan.removeSavedFile({
      filePath,
      success(res) {
        console.log(`${filePath} 删除成功`);
      },
      fail(res) {
        console.error(`${filePath} 删除失败`, res.errMsg);
      },
    });
  
}

function saveFile(tempFilePath) {
  swan.saveFile({
    tempFilePath,
    success(res) {
      console.log(res.savedFilePath);
      removeSavedFile(res.savedFilePath)
    },
    fail(res) {
      // console.log(res);
    },
  });
}



  }
});
