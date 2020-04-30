import onekit from "onekit"
import swan_ai from "swan.ai"
export default class swan {
  static getData(that,key) { return that.data[key]; }
  static setData(that,key,data) { 
    if(typeof(key)=="string"){
    var json = {};
    json[key] = data;
    return that.setData(json);
  }else{
      that.setData(key);
  }
     }
  /////////////////// animation //////////////////////////
  static createAnimation(object) { return wx.createAnimation(object); }
  ///////////////// basic ////////////////////////////////
  static canIUse(object) { return true; }
  static getSystemInfo(object) { return wx.getSystemInfo(object); }
  static getSystemInfoSync() { return wx.getSystemInfoSync(); }
  static base64ToArrayBuffer(base64) { return wx.base64ToArrayBuffer(object); }
  static arrayBufferToBase64(arrayBuffer) { return wx.arrayBufferToBase64(object); }
  static getUpdateManager(object) { return wx.getUpdateManager(object); }
  static getLaunchOptionsSync(object) { return wx.getLaunchOptionsSync(object); }
  static offPageNotFound(object) { return wx.offPageNotFound(object); }
  static onPageNotFound(object) { return wx.onPageNotFound(object); }
  static offError(object) { return wx.offError(object); }
  static onError(object) { return wx.onError(object); }
  static offAppShow(object) { return wx.offAppShow(object); }
  static onAppShow(object) { return wx.onAppShow(object); }
  static offAppHide(object) { return wx.offAppHide(object); }
  static onAppHide(object) { return wx.onAppHide(object); }
  static setEnableDebug(object) { return wx.setEnableDebug(object); }
  static getLogManager(object) { return wx.getLogManager(object); }
  static createContext() { return new CanvasContext(); }
  static createCanvasContext(object) { return wx.createCanvasContext(object ); }
  static canvasToTempFilePath(object) { return wx.canvasToTempFilePath(object); }
  static canvasPutImageData(object) { return wx.canvasPutImageData(object) };
  static canvasGetImageData(object) { return wx.canvasGetImageData(object) };
  ////////////// Device //////////////////
  static onBeaconServiceChange(object) { return wx.onBeaconServiceChange(object); }
  static onBeaconUpdate(object) { return wx.onBeaconUpdate(object); }
  static getBeacons(object) { return wx.getBeacons(object); }
  static stopBeaconDiscovery(object) { return wx.stopBeaconDiscovery(object);  }
  static startBeaconDiscovery(object) { return wx.startBeaconDiscovery(object); }
  static stopWifi(object) { return wx.stopWifi(object); }
  static startWifi(object) { return wx.startWifi(object); }
  static setWifiList(object) { return wx.setWifiList(object); }
  static onWifiConnected(object) { return wx.onWifiConnected(object); }
  static onGetWifiList(object) { return wx.onGetWifiList(object); }
  static getWifiList(object) { return wx.getWifiList(object); }
  static getConnectedWifi(object) { return wx.getConnectedWifi(object); }
  static connectWifi(object) { return wx.connectWifi(object); }
  //
  static onAccelerometerChange(callback) { return wx.onAccelerometerChange(callback); }
  static stopAccelerometer(object) { return wx.stopAccelerometer(object); }
  static startAccelerometer(object) { return wx.startAccelerometer(object); }
  static getBatteryInfoSync(object) { return wx.getBatteryInfoSync(object); }
  static _getBatteryInfo(result) { return wx._getBatteryInfo(object); }
  static getBatteryInfo(object) { return wx.getBatteryInfo(object); }
  //
  static getClipboardData(object) { return wx.getClipboardData(object); }
  static setClipboardData(object) { return wx.setClipboardData(object); }
  static onCompassChange(callback) { return wx.onCompassChange(callback); }
  static stopCompass(object) { return wx.stopCompass(object); }
  static startCompass(object) { return wx.startCompass(object); }
  static addPhoneContact(object) {return wx.addPhoneContact(object); }
  static onGyroscopeChange(callback) { return wx.onGyroscopeChange(object); }
  static stopGyroscope(object) { return wx.stopGyroscope(object); }
  static startGyroscope(object) { return wx.startGyroscope(object); }
  //
  static onDeviceMotionChange(object) { return wx.onDeviceMotionChange(object); }
  static stopDeviceMotionListening(object) { return wx.stopDeviceMotionListening(object); }
  static startDeviceMotionListening(object) { return wx.startDeviceMotionListening(object); }
  static startDeviceMotionListening(object) { return wx.startDeviceMotionListening(object); }
  //
  static getNetworkType = function (object) { return wx.getNetworkType(object); }
  static _network = function (res) { return wx._network(object); }
  static onNetworkStatusChange(callback) { return wx.onNetworkStatusChange(callback); }
  //
  static makePhoneCall = function (object) { return wx.makePhoneCall(object); }

  static scanCode = function (object) { return wx.scanCode(object); }
  //
  static vibrateLong(object) { return wx.vibrateLong(object); }
  static vibrateShort(object) { return wx.vibrateShort(object); }
  //
  static onMemoryWarning(object) { return wx.onMemoryWarning(object); }
  //
  static writeBLECharacteristicValue(object) { return wx.writeBLECharacteristicValue(object); }
  static readBLECharacteristicValue(object) { return wx.readBLECharacteristicValue(object); }
  static onBLEConnectionStateChange(object) { return wx.onBLEConnectionStateChange(object); }
  static onBLECharacteristicValueChange(object) { return wx.onBLECharacteristicValueChange(object); }
  static notifyBLECharacteristicValueChange(object) { return wx.notifyBLECharacteristicValueChange(object); }
  static getBLEDeviceServices(object) { return wx.getBLEDeviceServices(object); }
  static getBLEDeviceCharacteristics(object) { return wx.getBLEDeviceCharacteristics(object); }
  static createBLEConnection(object) { return wx.createBLEConnection(object); }
  static closeBLEConnection(object) { return wx.closeBLEConnection(object); }
  //
  static stopBluetoothDevicesDiscovery(object) {/* return wx.stopBluetoothDevicesDiscovery(object);*/ }
  static startBluetoothDevicesDiscovery(object) { return wx.startBluetoothDevicesDiscovery(object); }
  static openBluetoothAdapter(object) {/* return wx.openBluetoothAdapter(object); */}
  static onBluetoothDeviceFound(object) { return wx.onBluetoothDeviceFound(object); }
  static onBluetoothAdapterStateChange(object) { return wx.onBluetoothAdapterStateChange(object); }
  static getConnectedBluetoothDevices(object) { return wx.getConnectedBluetoothDevices(object); }
  static getBluetoothDevices(object) { return wx.getBluetoothDevices(object); }
  static getBluetoothAdapterState(object) { return wx.getBluetoothAdapterState(object); }
  static closeBluetoothAdapter(object) { return wx.closeBluetoothAdapter(object); }
  //
  static stopHCE(object) { return wx.stopHCE(object); }
  static startHCE(object) { return wx.startHCE(object); }
  static sendHCEMessage(object) { return wx.sendHCEMessage(object); }
  static onHCEMessage(object) { return wx.onHCEMessage(object); }
  static getHCEState(object) { return wx.getHCEState(object); }
  //
  static setScreenBrightness(object) { return wx.setScreenBrightness(object); }
  static setKeepScreenOn(object) { return wx.setKeepScreenOn(object); }
  static onUserCaptureScreen(object) { return wx.onUserCaptureScreen(object); }

  static getScreenBrightness(object) { return wx.getScreenBrightness(object); }
  /////////////////// Ext //////////////
  static getExtConfigSync(object) { return wx.getExtConfigSync(object) }
  static getExtConfig(object) { return wx.getExtConfig(object) }
  //////////////////// File //////////
  static getFileSystemManager(object) { return wx.getFileSystemManager(object) }
  static getFileInfo(object) { return wx.getFileInfo(object) }
  static removeSavedFile(object) { return wx.removeSavedFile(object) }
  static getSavedFileInfo(object) { return wx.getSavedFileInfo(object) }
  static getSavedFileList(object) { return wx.getSavedFileList(object) }
  static openDocument(object) { return wx.openDocument(object) }
  static saveFile(object) { return wx.saveFile(object); }
  //////////// Location ///////////////
  static openLocation(object) { return wx.openLocation(object) }
  static getLocation(object) { return wx.getLocation(object) }
  static chooseLocation(object) { return wx.chooseLocation(object) }
  ////////// Media ////////////////////
  static createMapContext(object) { return wx.createMapContext(object) }
  static compressImage(object) { return wx.compressImage(object) }
  static saveImageToPhotosAlbum(object) { return wx.saveImageToPhotosAlbum(object) }
  static getImageInfo(object) { return wx.getImageInfo(object) }
  static previewImage(object) { return wx.previewImage(object) }
  static chooseImage(object) { return wx.chooseImage(object); }
  static saveVideoToPhotosAlbum(object) { return wx.saveVideoToPhotosAlbum(object) }
  static chooseVideo(object) { return wx.chooseVideo(object) }
  static createVideoContext(object) { return wx.createVideoContext(object) }
  static stopVoice(object) { return wx.stopVoice(object) }
  static pauseVoice(object) { return wx.pauseVoice(object) }
  static playVoice(object) { return wx.playVoice(object) }
  static setInnerAudioOption(object) { return wx.setInnerAudioOption(object) }
  static getAvailableAudioSources(object) { return wx.getAvailableAudioSources(object) }
  static createInnerAudioContext(object) { return wx.createInnerAudioContext(object) }
  static createAudioContext(object) { return wx.createAudioContext(object) }
  static onBackgroundAudioStop(object) { return wx.onBackgroundAudioStop(object) }
  static onBackgroundAudioPause(object) { return wx.onBackgroundAudioPause(object) }
  static onBackgroundAudioPlay(object) { return wx.onBackgroundAudioPlay(object) }
  static stopBackgroundAudio(object) { return wx.stopBackgroundAudio(object) }
  static seekBackgroundAudio(object) { return wx.seekBackgroundAudio(object) }
  static pauseBackgroundAudio(object) { return wx.pauseBackgroundAudio(object) }
  static playBackgroundAudio(object) { return wx.playBackgroundAudio(object) }
  static getBackgroundAudioPlayerState(object) { return wx.getBackgroundAudioPlayerState(object)  }
  static getBackgroundAudioManager(object) { return wx.getBackgroundAudioManager(object) }
  static createLivePusherContext(object) { return wx.createLivePusherContext(object) }
  static getRecorderManager(object) { return wx.getRecorderManager(object) }
  //////////////// Network ///////////////
  static request(object) { return wx.request(object); }
  static downloadFile(object) { return wx.downloadFile(object) }
  static uploadFile(object) {return wx.uploadFile(object) }
  //
  static connectSocket(object) { return wx.connectSocket(object) }
  static onSocketError(object) { return wx.onSocketError(object) }
  static onSocketMessage(object) { return wx.onSocketMessage(object) }
  static onSocketClose(object) { return wx.onSocketClose(object) }
  static onSocketOpen(object) { return wx.connectSocket(object) }
  static sendSocketMessage(object) { return wx.sendSocketMessage(object) }
  static closeSocket(object) { return wx.closeSocket(object) }
  static offLocalServiceResolveFail(object) { return wx.offLocalServiceResolveFail(object) }
  static onLocalServiceResolveFail(object) { return wx.onLocalServiceResolveFail(object) }
  static offLocalServiceDiscoveryStop(object) { return wx.offLocalServiceDiscoveryStop(object) }
  static onLocalServiceDiscoveryStop(object) { return wx.onLocalServiceDiscoveryStop(object) }
  static offLocalServiceLost(object) { return wx.offLocalServiceLost(object) }
  static onLocalServiceLost(object) { return wx.onLocalServiceLost(object) }
  static offLocalServiceFound(object) { return wx.offLocalServiceFound(object) }
  static onLocalServiceFound(object) { return wx.onLocalServiceFound(object) }
  static stopLocalServiceDiscovery(object) { return wx.stopLocalServiceDiscovery(object) }
  static startLocalServiceDiscovery(object) { return wx.startLocalServiceDiscovery(object) }
  //
  static stopLocalServiceDiscovery(object) { return wx.stopLocalServiceDiscovery(object); }
  static startLocalServiceDiscovery(object) { return wx.startLocalServiceDiscovery(object); }
  static onLocalServiceResolveFail(callback) { return wx.onLocalServiceResolveFail(callback); }
  static onLocalServiceLost(callback) { return wx.onLocalServiceLost(callback); }
  static onLocalServiceFound(callback) { return wx.onLocalServiceFound(callback); }
  static onLocalServiceDiscoveryStop(callback) { return wx.onLocalServiceDiscoveryStop(callback); }
  static offLocalServiceResolveFail(callback) { return wx.offLocalServiceResolveFail(callback); }
  static offLocalServiceLost(callback) { return wx.offLocalServiceLost(callback); }
  static offLocalServiceFound(callback) { return wx.offLocalServiceFound(callback); }
  static offLocalServiceDiscoveryStop(callback) { return wx.offLocalServiceDiscoveryStop(callback); }
  ///////// Open Interface //////////
  static checkSession(object) { return wx.checkSession(object); }

  static login = function (object) {
    var that = this;
    if (!object) {
      return wx.login(object);
    }
    var object2 = {};
    object2.success = function (res) {
      getApp().onekit._code = res.code;
      getApp().onekit._login = new Date().getTime();
      var result = { code: res.code };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
    var now = new Date().getTime();
    if (getApp().onekit._code && getApp().onekit._login && now <= getApp().onekit._login + 60 * 5 * 1000) {
      object2.success({ code: getApp().onekit._code });
    } else {
      wx.login(object2);
    }
  };
  static getUserInfo(object) { return wx.getUserInfo(object); }
  static getOpenData = function (object) { return wx.getOpenData(object); }
  static getPhoneNumber = function (object) { return wx.getPhoneNumber(object); }
  static navigateToMiniProgram(object) { return wx.navigateToMiniProgram(object) }
  static navigateBackMiniProgram(object) { return wx.navigateBackMiniProgram(object) }
  static getAccountInfoSync(object) { return wx.getAccountInfoSync(object) }

  static reportMonitor(object) { return wx.reportMonitor(object) }
  static reportAnalytics(object, eventName) { return wx.reportAnalytics(object, eventName) }
  static requestPayment(object) { return wx.requestPayment(object); }
  static authorize(object) { return wx.authorize(object) }
  static openSetting(object) { return wx.openSetting(object) }
  static getSetting(object) { return wx.getSetting(object) }
  static chooseAddress(object) { return wx.chooseAddress(object) }
  static openCard(object) { return wx.openCard(object); }
  static addCard = function (object) { return wx.addCard(object); }
  static chooseInvoiceTitle(object) { return wx.chooseInvoiceTitle(object) }
  static chooseInvoice(object) { return wx.chooseInvoice(object) }
  static startSoterAuthentication(object) { return wx.startSoterAuthentication(object) }
  static checkIsSupportSoterAuthentication(object) { return wx.checkIsSupportSoterAuthentication(object) }
  static checkIsSoterEnrolledInDevice(object) { return wx.checkIsSoterEnrolledInDevice(object) }
  static getWeRunData(object) { return wx.getWeRunData(object) }
  static reportMonitor(name, value) {
    var js_code = getApp().onekit.jscode;
    wx.httpRequest({
      url: "http://192.168.0.106:8080/onekit_adapter/reportMonitor",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        js_code: js_code,
        name: name,
        number: value
      },
      success: (res) => {
        console.log("success")
        console.log(res.data);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res)
      }

    });
  };
  ////////// Router //////////////
  static navigateBack(object) { return wx.navigateBack(object); }
  static switchTab(object) { return wx.switchTab(object); }
  static navigateTo(object) { return wx.navigateTo(object); }
  static reLaunch(object) { return wx.reLaunch(object); }
  static redirectTo(object) { return wx.redirectTo(object); }
  ///////////// Share /////////////
  static updateShareMenu(object) { return wx.updateShareMenu(object) }
  static showShareMenu(object) { return wx.showShareMenu(object); }
  static hideShareMenu(object) { return wx.hideShareMenu(object) }
  static getShareInfo(object) { return wx.getShareInfo(object) }
  /////////////// Storage //////////////
  static getStorageInfoSync(object) { return wx.getStorageInfoSync(object) }
  static getStorageInfo(object) { return wx.getStorageInfo(object) }
  static clearStorageSync(object) { return wx.clearStorageSync(object) }
  static clearStorage(object) { return wx.clearStorage(object) }
  static removeStorageSync(object) { return wx.removeStorageSync(object) }
  static removeStorage(object) { return wx.removeStorage(object) }
  static setStorageSync (key, value) { return wx.setStorageSync(key,value) }
  static setStorage(object) { return wx.setStorage(object) }
  static getStorageSync (key) { return wx.getStorageSync(key); }
  static getStorage(object) { return wx.getStorage(object) }
  ////////////// UI ////////////////
  static showActionSheet(object) { return wx.showActionSheet(object); }
  // static redirectTo(object) { return wx.redirectTo(object) }
  // static redirectTo(object) { return wx.redirectTo(object) }
  static hideLoading(object) { return wx.hideLoading(object) }
  static showLoading(object) { return wx.showLoading(object); }
  static hideToast(object) { return wx.hideToast(object); }
  static showToast(object) { return wx.showToast(object); }
  static showModal(object) { return wx.showModal(object); }
  static setNavigationBarColor(object) { return wx.setNavigationBarColor(object) }
  static hideNavigationBarLoading(object) {return wx.hideNavigationBarLoading(object)}
  static showNavigationBarLoading(object) {return wx.showNavigationBarLoading(object)}
  static setNavigationBarTitle = function (object) { return wx.setNavigationBarTitle(object); };
  static setBackgroundTextStyle(object) { return wx.setBackgroundTextStyle(object) }

  static setBackgroundColor(object) { return wx.setBackgroundColor(object)  }
  static setTabBarItem(object) { return wx.setTabBarItem(object) }
  static setTabBarStyle(object) {return wx.setTabBarStyle(object) }
  static hideTabBar(object) { return wx.hideTabBar(object)  }
  static showTabBar(object) { return wx.showTabBar(object) }
  static hideTabBarRedDot(object) { return wx.hideTabBarRedDot(object)  }
  static showTabBarRedDot(object) { return wx.showTabBarRedDot(object)  }
  static removeTabBarBadge(object) { return wx.removeTabBarBadge(object) }
  static setTabBarBadge(object) { return wx.setTabBarBadge(object)  }

  static loadFontFace(object) { return wx.loadFontFace(object) }

  static stopPullDownRefresh(object) { return wx.stopPullDownRefresh(object); }
  static startPullDownRefresh(object) { return wx.startPullDownRefresh(object); }
  static pageScrollTo(object) { return wx.pageScrollTo(object) }
  static setTopBarText(object) { return wx.setTopBarText(object) }
  static nextTick(object) { return wx.nextTick(object) }
  static getMenuButtonBoundingClientRect(object) { return wx.getMenuButtonBoundingClientRect(object) }
  static offWindowResize(object) { return wx.offWindowResize(object) }
  static onWindowResize(object) { return wx.onWindowResize(object) }
  ////////////// Worker ///////////////
  static createWorker(path) { return new WORKER(path); }
  ////////////// WXML ///////////////
  static createSelectorQuery(object) { return wx.createSelectorQuery(object) }
  static createIntersectionObserver(object) { return wx.createIntersectionObserver(object) }
  /////////////////////////////////////
  static hideKeyboard(object) { return wx.hideKeyboard(object) }
  ///////////////////////////////////
  static createARCameraContext(object) { throw new Error("createARCameraContext�ݲ�֧��!!") }
}
swan.ai = {};
for (var api of ["ocrIdCard", "ocrBankCard", "ocrDrivingLicense", "ocrVehicleLicense", "textReview", "textToAudio", "imageAudit", "advancedGeneralIdentify", "objectDetectIdentify", "carClassify", "dishClassify", "logoClassify", "animalClassify", "plantClassify", "getVoiceRecognizer", "faceDetect", "faceMatch", "faceSearch", "facePersonVerify", "facePersonIdmatch", "faceLivenessSessioncode","nlpLexerCustom"]){
  ai_init(api);
}
 function  ai_init(api){
   swan.ai[api] = (object)=>{
     return swan_ai.run(api,object);
   }
}