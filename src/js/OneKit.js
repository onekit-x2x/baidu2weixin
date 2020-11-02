/* eslint-disable max-len */
/* eslint-disable camelcase */

const bd_USER_FOLDER = 'bdfile://store/'
const WX_USER_FOLDER = `${wx.env.USER_DATA_PATH}/`

function current() {
  const pages = getCurrentPages()
  if (pages.length === 0) {
    return {}
  }
  return pages[pages.length - 1]
}

function currentUrl() {
  return current().route
}

function new_bd_filePath(ext) {
  const randomString = Math.floor(Math.random() * (1 - 10000000) + 10000000)
  const bd_filePath = `${bd_USER_FOLDER}${randomString}${ext}`
  return bd_filePath
}

function bd_filePath2wx_filePath(bd_filePath) {
  // eslint-disable-next-line no-undef
  if (!getApp().bdSavePath2wxStorePath) {
    return bd_filePath
  }
  // eslint-disable-next-line no-undef
  const wx_storePath = getApp().bdSavePath2wxStorePath[bd_filePath]
  if (wx_storePath) {
    return wx_storePath
  } else {
    const wx_filePath = bd_filePath.replace(bd_USER_FOLDER, WX_USER_FOLDER)
    return wx_filePath
  }
}

function save_wx_storePath(bd_filePath, wx_storePath) {
  // eslint-disable-next-line no-undef
  if (!getApp().bdSavePath2wxStorePath) {
    // eslint-disable-next-line no-undef
    getApp().bdSavePath2wxStorePath = {}
  }
  // eslint-disable-next-line no-undef
  getApp().bdSavePath2wxStorePath[bd_filePath] = wx_storePath
  // ///////////////////////
  // eslint-disable-next-line no-undef
  if (!getApp().wxStorePath2bdSavePath) {
    // eslint-disable-next-line no-undef
    getApp().wxStorePath2bdSavePath = {}
  }
  // eslint-disable-next-line no-undef
  getApp().wxStorePath2bdSavePath[wx_storePath] = bd_filePath
}
module.exports = {
  current,
  currentUrl,
  save_wx_storePath,
  new_bd_filePath,
  bd_filePath2wx_filePath
}
