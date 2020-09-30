/* eslint-disable semi-spacing */
/* eslint-disable keyword-spacing */
/* eslint-disable semi */
/* eslint-disable consistent-return */
/* eslint-disable no-var */
/* eslint-disable default-case */
/* eslint-disable no-unreachable */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable space-before-blocks */
/* eslint-disable padded-blocks */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-console */
import CanvasContext from './api/CanvasContext'
import LivePlayerContext from './api/LivePlayerContext'
import VideoContext from './api/VideoContext'

export default class tt {
  // ///////////////// animation //////////////////////////
  static createAnimation(object) {
    return wx.createAnimation(object)
  }

  // /////////////// basic ////////////////////////////////
  static canIUse() {
    return true
  }

  static getSystemInfo(object) {
    return wx.getSystemInfo(object)
  }

  static getSystemInfoSync() {
    return wx.getSystemInfoSync()
  }

  static base64ToArrayBuffer(base64) {
    return wx.base64ToArrayBuffer(base64)
  }

  static arrayBufferToBase64(arrayBuffer) {
    return wx.arrayBufferToBase64(arrayBuffer)
  }

  static getUpdateManager(object) {
    return wx.getUpdateManager(object)
  }

  static getLaunchOptionsSync(object) {
    return wx.getLaunchOptionsSync(object)
  }

  static offPageNotFound(object) {
    return wx.offPageNotFound(object)
  }

  static onPageNotFound(object) {
    return wx.onPageNotFound(object)
  }

  static offError(object) {
    return wx.offError(object)
  }

  static onError(object) {
    return wx.onError(object)
  }

  static offAppShow(object) {
    return wx.offAppShow(object)
  }

  static onAppShow(object) {
    return wx.onAppShow(object)
  }

  static offAppHide(object) {
    return wx.offAppHide(object)
  }

  static onAppHide(object) {
    return wx.onAppHide(object)
  }

  static setEnableDebug(object) {
    return wx.setEnableDebug(object)
  }

  static getLogManager(object) {
    return wx.getLogManager(object)
  }

  static createCanvasContext(canvasId) {
    return new CanvasContext(wx.createCanvasContext(canvasId))
  }

  static createLivePlayerContext(livePlayerId) {
    return new LivePlayerContext(wx.createLivePlayerContext(livePlayerId))
  }

  static createVideoContext(videoId) {
    return new VideoContext(wx.createVideoContext(videoId))
  }

  static canvasToTempFilePath(object) {
    return wx.canvasToTempFilePath(object)
  }

  static canvasPutImageData(object) {
    return wx.canvasPutImageData(object)
  }

  static canvasGetImageData(object) {
    return wx.canvasGetImageData(object)
  }

  // //////////// Device //////////////////
  static onBeaconServiceChange(object) {
    return wx.onBeaconServiceChange(object)
  }

  static onBeaconUpdate(object) {
    return wx.onBeaconUpdate(object)
  }

  static getBeacons(object) {
    return wx.getBeacons(object)
  }

  static stopBeaconDiscovery(object) {
    return wx.stopBeaconDiscovery(object)
  }

  static startBeaconDiscovery(object) {
    return wx.startBeaconDiscovery(object)
  }

  static stopWifi(object) {
    return wx.stopWifi(object)
  }

  static startWifi(object) {
    return wx.startWifi(object)
  }

  static setWifiList(object) {
    return wx.setWifiList(object)
  }

  static onWifiConnected(object) {
    return wx.onWifiConnected(object)
  }

  static onGetWifiList(object) {
    return wx.onGetWifiList(object)
  }

  static getWifiList(object) {
    return wx.getWifiList(object)
  }

  static getConnectedWifi(object) {
    return wx.getConnectedWifi(object)
  }

  static connectWifi(object) {
    return wx.connectWifi(object)
  }

  //
  static onAccelerometerChange(callback) {
    return wx.onAccelerometerChange(callback)
  }

  static stopAccelerometer(object) {
    return wx.stopAccelerometer(object)
  }

  static startAccelerometer(object) {
    return wx.startAccelerometer(object)
  }

  static getBatteryInfoSync(object) {
    return wx.getBatteryInfoSync(object)
  }

  static _getBatteryInfo(result) {
    return wx._getBatteryInfo(result)
  }

  static getBatteryInfo(object) {
    return wx.getBatteryInfo(object)
  }

  //
  static getClipboardData(object) {
    return wx.getClipboardData(object)
  }

  static setClipboardData(object) {
    return wx.setClipboardData(object)
  }

  static onCompassChange(callback) {
    return wx.onCompassChange(callback)
  }

  static stopCompass(object) {
    return wx.stopCompass(object)
  }

  static startCompass(object) {
    return wx.startCompass(object)
  }

  static addPhoneContact(object) {
    return wx.addPhoneContact(object)
  }

  static onGyroscopeChange(callback) {
    return wx.onGyroscopeChange(callback)
  }

  static stopGyroscope(object) {
    return wx.stopGyroscope(object)
  }

  static startGyroscope(object) {
    return wx.startGyroscope(object)
  }

  //
  static onDeviceMotionChange(object) {
    return wx.onDeviceMotionChange(object)
  }

  static stopDeviceMotionListening(object) {
    return wx.stopDeviceMotionListening(object)
  }

  static startDeviceMotionListening(object) {
    return wx.startDeviceMotionListening(object)
  }

  //
  static getNetworkType(object) {
    return wx.getNetworkType(object)
  }

  static _network(res) {
    return wx._network(res)
  }

  static onNetworkStatusChange(callback) {
    return wx.onNetworkStatusChange(callback)
  }

  //
  static makePhoneCall(object) {
    return wx.makePhoneCall(object)
  }

  static scanCode(object) {
    return wx.scanCode(object)
  }

  //
  static vibrateLong(object) {
    return wx.vibrateLong(object)
  }

  static vibrateShort(object) {
    return wx.vibrateShort(object)
  }

  //
  static onMemoryWarning(object) {
    return wx.onMemoryWarning(object)
  }

  //
  static setScreenBrightness(object) {
    return wx.setScreenBrightness(object)
  }

  static setKeepScreenOn(object) {
    return wx.setKeepScreenOn(object)
  }

  static onUserCaptureScreen(object) {
    return wx.onUserCaptureScreen(object)
  }

  static getScreenBrightness(object) {
    return wx.getScreenBrightness(object)
  }

  // ///////////////// Ext //////////////
  static getExtConfigSync(object) {
    return wx.getExtConfigSync(object)
  }

  static getExtConfig(object) {
    return wx.getExtConfig(object)
  }

  // ////////////////// File //////////
  static getFileSystemManager(object) {
    return wx.getFileSystemManager(object)
  }

  static getFileInfo(object) {
    return wx.getFileInfo(object)
  }

  static removeSavedFile(object) {
    return wx.removeSavedFile(object)
  }

  static getSavedFileInfo(object) {
    return wx.getSavedFileInfo(object)
  }

  static getSavedFileList(object) {
    return wx.getSavedFileList(object)
  }

  static openDocument(object) {
    return wx.openDocument(object)
  }

  static saveFile(object) {
    return wx.saveFile(object)
  }

  // ////////// Location ///////////////
  static openLocation(object) {
    return wx.openLocation(object)
  }

  static getLocation(object) {
    return wx.getLocation(object)
  }

  static chooseLocation(object) {
    return wx.chooseLocation(object)
  }

  // //////// Media ////////////////////
  static createMapContext(object) {
    return wx.createMapContext(object)
  }

  static compressImage(object) {
    return wx.compressImage(object)
  }

  static saveImageToPhotosAlbum(object) {
    return wx.saveImageToPhotosAlbum(object)
  }

  static getImageInfo(object) {
    return wx.getImageInfo(object)
  }

  static previewImage(object) {
    return wx.previewImage(object)
  }

  static chooseImage(object) {
    return wx.chooseImage(object)
  }

  static saveVideoToPhotosAlbum(object) {
    return wx.saveVideoToPhotosAlbum(object)
  }

  static chooseVideo(object) {
    return wx.chooseVideo(object)
  }

  static stopVoice(object) {
    return wx.stopVoice(object)
  }

  static pauseVoice(object) {
    return wx.pauseVoice(object)
  }

  static playVoice(object) {
    return wx.playVoice(object)
  }

  static setInnerAudioOption(object) {
    return wx.setInnerAudioOption(object)
  }

  static getAvailableAudioSources(object) {
    return wx.getAvailableAudioSources(object)
  }

  static createInnerAudioContext(object) {
    return wx.createInnerAudioContext(object)
  }

  static createAudioContext(object) {
    return wx.createAudioContext(object)
  }

  static onBackgroundAudioStop(object) {
    return wx.onBackgroundAudioStop(object)
  }

  static onBackgroundAudioPause(object) {
    return wx.onBackgroundAudioPause(object)
  }

  static onBackgroundAudioPlay(object) {
    return wx.onBackgroundAudioPlay(object)
  }

  static stopBackgroundAudio(object) {
    return wx.stopBackgroundAudio(object)
  }

  static seekBackgroundAudio(object) {
    return wx.seekBackgroundAudio(object)
  }

  static pauseBackgroundAudio(object) {
    return wx.pauseBackgroundAudio(object)
  }

  static playBackgroundAudio(object) {
    return wx.playBackgroundAudio(object)
  }

  static getBackgroundAudioPlayerState(object) {
    return wx.getBackgroundAudioPlayerState(object)
  }

  static getBackgroundAudioManager(object) {
    return wx.getBackgroundAudioManager(object)
  }

  static createLivePusherContext(object) {
    return wx.createLivePusherContext(object)
  }

  static getRecorderManager(object) {
    return wx.getRecorderManager(object)
  }

  // ////////////// Network ///////////////
  static request(object) {
    return wx.request(object)
  }

  static downloadFile(object) {
    return wx.downloadFile(object)
  }

  static uploadFile(object) {
    return wx.uploadFile(object)
  }

  //
  static connectSocket(object) {
    return wx.connectSocket(object)
  }

  static onSocketError(object) {
    return wx.onSocketError(object)
  }

  static onSocketMessage(object) {
    return wx.onSocketMessage(object)
  }

  static onSocketClose(object) {
    return wx.onSocketClose(object)
  }

  static onSocketOpen(object) {
    return wx.connectSocket(object)
  }

  static sendSocketMessage(object) {
    return wx.sendSocketMessage(object)
  }

  static closeSocket(object) {
    return wx.closeSocket(object)
  }

  static offLocalServiceResolveFail(object) {
    return wx.offLocalServiceResolveFail(object)
  }

  static onLocalServiceResolveFail(object) {
    return wx.onLocalServiceResolveFail(object)
  }

  static offLocalServiceDiscoveryStop(object) {
    return wx.offLocalServiceDiscoveryStop(object)
  }

  static onLocalServiceDiscoveryStop(object) {
    return wx.onLocalServiceDiscoveryStop(object)
  }

  static offLocalServiceLost(object) {
    return wx.offLocalServiceLost(object)
  }

  static onLocalServiceLost(object) {
    return wx.onLocalServiceLost(object)
  }

  static offLocalServiceFound(object) {
    return wx.offLocalServiceFound(object)
  }

  static onLocalServiceFound(object) {
    return wx.onLocalServiceFound(object)
  }

  static stopLocalServiceDiscovery(object) {
    return wx.stopLocalServiceDiscovery(object)
  }

  static startLocalServiceDiscovery(object) {
    return wx.startLocalServiceDiscovery(object)
  }

  // /////// Open Interface //////////
  static _checkSession() {
    const now = new Date().getTime()
    // eslint-disable-next-line no-undef
    return getApp().onekitwx._jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60 * 24 * 3
  }

  static checkSession(object) {
    if (tt._checkSession()) {
      if (object.success) {
        object.success()
      }
      if (object.complete) {
        object.complete()
      }
    } else {
      if (object.fail) {
        object.fail()
      }
      if (object.complete) {
        object.complete()
      }
    }
  }

  static login(object) {
    if (!object) {
      wx.login(object)
      return
    }
    const object2 = {}
    object2.success = function (res) {
      // eslint-disable-next-line no-undef
      getApp().onekitwx._jscode = res.code
      // eslint-disable-next-line no-undef
      getApp().onekitwx._login = new Date().getTime()
      const result = {
        code: res.code
      }
      if (object.success) {
        object.success(result)
      }
      if (object.complete) {
        object.complete(result)
      }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object.fail(res)
      }
      if (object.complete) {
        object.complete(res)
      }
    }
    if (tt._checkSession()) {
      object2.success({
        // eslint-disable-next-line no-undef
        code: getApp().onekitwx._jscode
      })
    } else {
      wx.login(object2)
    }
  }

  static _getUserInfo(data, callback) {
    tt.login({
      success(res) {
        console.log(res)
        const code = res.code
        // eslint-disable-next-line no-undef
        const withCredentials = getApp().onekitwx.getuserinfo_withCredentials === true
        // eslint-disable-next-line no-undef
        const url = getApp().onekitwx.server + 'userinfo'
        wx.request({
          url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            code,
            withCredentials,
            data: JSON.stringify(data)
          },
          success(res) {
            callback(res.data)
          },
          fail(res) {
            console.log(res)
            callback(res)
          }
        })
      },
      fail(res) {
        console.log(res)
      }

    })
  }

  static getUserInfo(object) {
    // eslint-disable-next-line no-undef
    getApp().onekitwx.getuserinfo_withCredentials = object.withCredentials
    // eslint-disable-next-line no-undef
    getApp().onekitwx.getuserinfo = (data) => {
      tt._getUserInfo(data, (res) => {
        if (object.success) {
          object.success(res)
        }
        if (object.complete) {
          object.complete(res)
        }
      })
    }
    wx.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
  }

  static getOpenData(object) {
    return wx.getOpenData(object)
  }

  static _getPhoneNumber(data, callback) {
    tt.login({
      success: (res) => {
        const code = res.code
        // eslint-disable-next-line no-undef
        const url = getApp().onekitwx.server + 'phonenumber'
        console.log(data, code)
        wx.request({
          url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            data: JSON.stringify(data),
            code
          },
          success(res) {
            const data = res.data
            callback(data)
          },
          fail(res) {
            console.log(res.data)
          }
        })
      }
    })
  }

  static getPhoneNumber(object) {
    // eslint-disable-next-line no-undef
    getApp().onekitwx._bindgetphonenumber = (data) => {
      tt._getPhoneNumber(data, (res) => {
        if (object.success) {
          object.success(res)
        }
        if (object.complete) {
          object.complete(res)
        }
      })
    }
    wx.navigateTo({url: 'page/getphonenumber'})
  }

  static navigateToMiniProgram(object) {
    return wx.navigateToMiniProgram(object)
  }

  static navigateBackMiniProgram(object) {
    return wx.navigateBackMiniProgram(object)
  }

  static getAccountInfoSync(object) {
    return wx.getAccountInfoSync(object)
  }

  static reportMonitor(object) {
    return wx.reportMonitor(object)
  }

  static reportAnalytics(object, eventName) {
    return wx.reportAnalytics(object, eventName)
  }

  static pay(object) {
    // eslint-disable-next-line no-undef
    const url = getApp().onekitwx.server + 'orderinfo'
    wx.request({
      url,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        orderInfo: JSON.stringify(object.orderInfo)
      },
      success(res) {
        const data = {
          out_trade_no: res.data.out_trade_no
        }
        wx.requestPayment({
          timeStamp: res.data.timeStamp,
          nonceStr: res.data.nonceStr,
          package: res.data.package,
          signType: res.data.signType,
          paySign: res.data.paySign,
          success() {
            if (object.getOrderStatus) {
              object.getOrderStatus(data)
              console.log('ok')
            }
          },
          fail(res) {
            console.log(res)
          }
        })
      },
      fail(res) {
        console.log(res)
      }
    })
  }

  static authorize(object) {
    return wx.authorize(object)
  }

  static openSetting(object) {
    return wx.openSetting(object)
  }

  static getSetting(object) {
    return wx.getSetting(object)
  }

  static chooseAddress(object) {
    return wx.chooseAddress(object)
  }

  static openCard(object) {
    return wx.openCard(object)
  }

  static addCard(object) {
    return wx.addCard(object)
  }

  static chooseInvoiceTitle(object) {
    return wx.chooseInvoiceTitle(object)
  }

  static chooseInvoice(object) {
    return wx.chooseInvoice(object)
  }

  static startSoterAuthentication(object) {
    return wx.startSoterAuthentication(object)
  }

  static checkIsSupportSoterAuthentication(object) {
    return wx.checkIsSupportSoterAuthentication(object)
  }

  static checkIsSoterEnrolledInDevice(object) {
    return wx.checkIsSoterEnrolledInDevice(object)
  }

  static getWeRunData(object) {
    return wx.getWeRunData(object)
  }

  // //////// Router //////////////
  static navigateBack(object) {
    return wx.navigateBack(object)
  }

  static switchTab(object) {
    return wx.switchTab(object)
  }

  static navigateTo(object) {
    return wx.navigateTo(object)
  }

  static reLaunch(object) {
    return wx.reLaunch(object)
  }

  static redirectTo(object) {
    return wx.redirectTo(object)
  }

  // /////////// Share /////////////
  static updateShareMenu(object) {
    return wx.updateShareMenu(object)
  }

  static showShareMenu(object) {
    return wx.showShareMenu(object)
  }

  static hideShareMenu(object) {
    return wx.hideShareMenu(object)
  }

  static getShareInfo(object) {
    return wx.getShareInfo(object)
  }

  // ///////////// Storage //////////////
  static getStorageInfoSync(object) {
    return wx.getStorageInfoSync(object)
  }

  static getStorageInfo(object) {
    return wx.getStorageInfo(object)
  }

  static clearStorageSync(object) {
    return wx.clearStorageSync(object)
  }

  static clearStorage(object) {
    return wx.clearStorage(object)
  }

  static removeStorageSync(object) {
    return wx.removeStorageSync(object)
  }

  static removeStorage(object) {
    return wx.removeStorage(object)
  }

  static setStorageSync(key, value) {
    return wx.setStorageSync(key, value)
  }

  static setStorage(object) {
    return wx.setStorage(object)
  }

  static getStorageSync(key) {
    return wx.getStorageSync(key)
  }

  static getStorage(object) {
    return wx.getStorage(object)
  }

  // //////////// UI ////////////////
  static showActionSheet(object) {
    return wx.showActionSheet(object)
  }

  // static redirectTo(object) { return wx.redirectTo(object) }
  // static redirectTo(object) { return wx.redirectTo(object) }
  static hideLoading(object) {
    return wx.hideLoading(object)
  }

  static showLoading(object) {
    return wx.showLoading(object)
  }

  static hideToast(object) {
    return wx.hideToast(object)
  }

  static showToast(object) {
    return wx.showToast(object)
  }

  static showModal(object) {
    return wx.showModal(object)
  }

  static setNavigationBarColor(object) {
    return wx.setNavigationBarColor(object)
  }

  static hideNavigationBarLoading(object) {
    return wx.hideNavigationBarLoading(object)
  }

  static showNavigationBarLoading(object) {
    return wx.showNavigationBarLoading(object)
  }

  static setNavigationBarTitle(object) {
    return wx.setNavigationBarTitle(object)
  }

  static setBackgroundTextStyle(object) {
    return wx.setBackgroundTextStyle(object)
  }

  static setBackgroundColor(object) {
    return wx.setBackgroundColor(object)
  }

  static setTabBarItem(object) {
    return wx.setTabBarItem(object)
  }

  static setTabBarStyle(object) {
    return wx.setTabBarStyle(object)
  }

  static hideTabBar(object) {
    return wx.hideTabBar(object)
  }

  static showTabBar(object) {
    return wx.showTabBar(object)
  }

  static hideTabBarRedDot(object) {
    return wx.hideTabBarRedDot(object)
  }

  static showTabBarRedDot(object) {
    return wx.showTabBarRedDot(object)
  }

  static removeTabBarBadge(object) {
    return wx.removeTabBarBadge(object)
  }

  static setTabBarBadge(object) {
    return wx.setTabBarBadge(object)
  }

  static loadFontFace(object) {
    return wx.loadFontFace(object)
  }

  static stopPullDownRefresh(object) {
    return wx.stopPullDownRefresh(object)
  }

  static startPullDownRefresh(object) {
    return wx.startPullDownRefresh(object)
  }

  static pageScrollTo(object) {
    return wx.pageScrollTo(object)
  }

  static setTopBarText(object) {
    return wx.setTopBarText(object)
  }

  static nextTick(object) {
    return wx.nextTick(object)
  }

  static getMenuButtonBoundingClientRect(object) {
    return wx.getMenuButtonBoundingClientRect(object)
  }

  static offWindowResize(object) {
    return wx.offWindowResize(object)
  }

  static onWindowResize(object) {
    return wx.onWindowResize(object)
  }

  // //////////// WXML ///////////////
  static createSelectorQuery(object) {
    return wx.createSelectorQuery(object)
  }

  static createIntersectionObserver(object) {
    return wx.createIntersectionObserver(object)
  }

  // ///////////////////////////////////
  static hideKeyboard(object) {
    return wx.hideKeyboard(object)
  }

  // /////////////////////////////////
  static createARCameraContext() {
    throw new Error('createARCameraContext�ݲ�֧��!!')
  }

  static exitMiniProgram(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    //
    wx.showToast({

      title: '请点击屏幕右上角圆形退出',
      success() {
        const wx_res = {
          errMsg: 'exitMiniProgram:ok'
        }
        if (tt_success) { tt_success(wx_res) }
        if (tt_complete) { tt_complete(wx_res) }
      },
      fail() {
        const wx_res = {
          errMsg: 'exitMiniProgram:fail'
        }
        if (tt_fail) { tt_fail(wx_res) }
        if (tt_complete) { tt_complete(wx_res) }
      }
    })
  }

 
  static canIPutStuffOverComponent(componentName){
    return ['map', 'viedo', 'canvas', 'camera', 'live-player', 'live-pusher'].indexOf(componentName) < 0
  }
}
/*
tt.ai = {}
for (const api of ['ocrIdCard', 'ocrBankCard', 'ocrDrivingLicense', 'ocrVehicleLicense', 'textReview', 'textToAudio', 'imageAudit', 'advancedGeneralIdentify', 'objectDetectIdentify', 'carClassify', 'dishClassify', 'logoClassify', 'animalClassify', 'plantClassify', 'getVoiceRecognizer', 'faceDetect', 'faceMatch', 'faceSearch', 'facePersonVerify', 'facePersonIdmatch', 'faceLivenessSessioncode', 'nlpLexerCustom']) {
  wx.ai_init(api)
}

function ai_init(api) {
  tt.ai[api] = (object) => swan_ai.run(api, object)
}
*/
