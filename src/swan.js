/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */

// import swan_ai from 'swan.ai'
// import CanvasContext from "./api/CanvasContext"
import CameraContext from './api/CameraContext'
import InnerAudioContext from './api/InnerAudioContext'
import VideoContext from './api/VideoContext'
import LivePlayerContext from './api/LivePlayerContext'
import OneKit from './js/OneKit'
import FileSystemManager from './api/FileSystemManager'

// import Context from "./api/Context"
export default class swan {
  static getData(that, key) {
    return that.data[key]
  }

  static setData(that, key, data) {
    if (typeof (key) === 'string') {
      const json = {}
      json[key] = data
      return that.setData(json)
    } else {
      return that.setData(key)
    }
  }

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

  static getEnvInfoSync() {
    return wx.getEnvInfoSync()
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

  // static offPageNotFound(swan_callback) {
  //   const wx_callback  =function(wx_res){
  //     swan_callback(swan_res);
  //   }
  //   return wx.offPageNotFound(wx_callback)
  // }
  static offPageNotFound(callback) {
    return wx.offPageNotFound(callback)
  }

  static onPageNotFound(callback) {
    return wx.onPageNotFound(callback)
  }

  static offError(callback) {
    return wx.offError(callback)
  }

  static onError(callback) {
    return wx.onError(callback)
  }

  static offAppShow(callback) {
    return wx.offAppShow(callback)
  }

  static onAppShow(callback) {
    return wx.onAppShow(callback)
  }

  static offAppHide(callback) {
    return wx.offAppHide(callback)
  }

  static onAppHide(callback) {
    return wx.onAppHide(callback)
  }

  static setEnableDebug(object) {
    return wx.setEnableDebug(object)
  }

  static getLogManager(object) {
    return wx.getLogManager(object)
  }

  /*
  static createCanvasContext(canvasId, ui) {
    return new CanvasContext(wx.createCanvasContext(canvasId))
  } */


  static createCameraContext(cameraId) {
    return new CameraContext(wx.createCameraContext(cameraId))
  }


  static createInnerAudioContext(audioId) {
    return new InnerAudioContext(wx.createInnerAudioContext(audioId))
  }


  static createLivePlayerContext(playerId) {
    return new LivePlayerContext(wx.createLivePlayerContext(playerId))
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
  static onBeaconServiceChange(callback) {
    return wx.onBeaconServiceChange(callback)
  }

  static onBeaconUpdate(callback) {
    return wx.onBeaconUpdate(callback)
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

  static onWifiConnected(callback) {
    return wx.onWifiConnected(callback)
  }

  static onGetWifiList(callback) {
    return wx.onGetWifiList(callback)
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
  static onDeviceMotionChange(callback) {
    return wx.onDeviceMotionChange(callback)
  }

  static stopDeviceMotionListening(object) {
    return wx.stopDeviceMotionListening(object)
  }

  static startDeviceMotionListening(object) {
    return wx.startDeviceMotionListening(object)
  }


  static getNetworkType(object) {
    return wx.getNetworkType(object)
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
  static onMemoryWarning(callback) {
    return wx.onMemoryWarning(callback)
  }

  //
  static writeBLECharacteristicValue(object) {
    return wx.writeBLECharacteristicValue(object)
  }

  static readBLECharacteristicValue(object) {
    return wx.readBLECharacteristicValue(object)
  }

  static onBLEConnectionStateChange(callback) {
    return wx.onBLEConnectionStateChange(callback)
  }

  static onBLECharacteristicValueChange(callback) {
    return wx.onBLECharacteristicValueChange(callback)
  }

  static notifyBLECharacteristicValueChange(object) {
    return wx.notifyBLECharacteristicValueChange(object)
  }

  static getBLEDeviceServices(object) {
    return wx.getBLEDeviceServices(object)
  }

  static getBLEDeviceCharacteristics(object) {
    return wx.getBLEDeviceCharacteristics(object)
  }

  static createBLEConnection(object) {
    return wx.createBLEConnection(object)
  }

  static closeBLEConnection(object) {
    return wx.closeBLEConnection(object)
  }


  static stopBluetoothDevicesDiscovery(object) { return wx.stopBluetoothDevicesDiscovery(object) }

  static startBluetoothDevicesDiscovery(object) {
    return wx.startBluetoothDevicesDiscovery(object)
  }


  static openBluetoothAdapter(object) { return wx.openBluetoothAdapter(object) }

  static onBluetoothDeviceFound(callback) {
    return wx.onBluetoothDeviceFound(callback)
  }

  static onBluetoothAdapterStateChange(callback) {
    return wx.onBluetoothAdapterStateChange(callback)
  }

  static getConnectedBluetoothDevices(object) {
    return wx.getConnectedBluetoothDevices(object)
  }

  static getBluetoothDevices(object) {
    return wx.getBluetoothDevices(object)
  }

  static getBluetoothAdapterState(object) {
    return wx.getBluetoothAdapterState(object)
  }

  static closeBluetoothAdapter(object) {
    return wx.closeBluetoothAdapter(object)
  }

  //
  static stopHCE(object) {
    return wx.stopHCE(object)
  }

  static startHCE(object) {
    return wx.startHCE(object)
  }

  static sendHCEMessage(object) {
    return wx.sendHCEMessage(object)
  }

  static onHCEMessage(callback) {
    return wx.onHCEMessage(callback)
  }

  static getHCEState(object) {
    return wx.getHCEState(object)
  }

  //
  static setScreenBrightness(object) {
    return wx.setScreenBrightness(object)
  }

  static setKeepScreenOn(object) {
    return wx.setKeepScreenOn(object)
  }

  static onUserCaptureScreen(callback) {
    return wx.onUserCaptureScreen(callback)
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
    return new FileSystemManager(object)
  }

  static getFileInfo(bd_object) {
    const bd_filePath = bd_object.filePath
    const bd_digestAlgorithm = bd_object.digestAlgorithm
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
    const wx_digestAlgorithm = bd_digestAlgorithm
    const wx_object = {
      filePath: wx_filePath,
      digestAlgorithm: wx_digestAlgorithm,
      success(wx_res) {
        const bd_res = {
          size: wx_res.size,
          digest: wx_res.digest
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return wx.getFileInfo(wx_object)
  }

  static removeSavedFile(bd_object) {
    const bd_filePath = bd_object.filePath
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
    const wx_object = {
      filePath: wx_filePath,
      success(wx_res) {
        const bd_res = {
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return wx.removeSavedFile(wx_object)
  }

  static getSavedFileInfo(object) {
    return wx.getSavedFileInfo(object)
  }

  static getSavedFileList(bd_object) {
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_object = {
      success(wx_res) {
        const bd_res = {
          fileList: wx_res.fileList.map(function (wx_file) {
            const bd_file = {
              // eslint-disable-next-line no-undef
              filePath: getApp().wxStorePath2bdSavePath[wx_file.filePath],
              createTime: wx_file.createTime,
              size: wx_file.size
            }
            return bd_file
          })
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return wx.getSavedFileList(wx_object)
  }

  static openDocument(object) {
    return wx.openDocument(object)
  }

  static saveFile(bd_object) {
    const bd_tempFilePath = bd_object.tempFilePath
    const ext = bd_tempFilePath.substring(bd_tempFilePath.lastIndexOf('.'))
    const bd_filePath = bd_object.filePath || OneKit.new_bd_filePath(ext)
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_tempFilePath = bd_tempFilePath
    const wx_object = {
      tempFilePath: wx_tempFilePath,
      success(wx_res) {
        OneKit.save_wx_storePath(bd_filePath, wx_res.savedFilePath)
        const bd_res = {
          savedFilePath: bd_filePath,
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    wx.saveFile(wx_object)
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

  // eslint-disable-next-line no-dupe-class-members
  static createVideoContext(object) {
    return wx.createVideoContext(object)
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

  // eslint-disable-next-line no-dupe-class-members
  static createInnerAudioContext(object) {
    return wx.createInnerAudioContext(object)
  }

  static createAudioContext(object) {
    return wx.createAudioContext(object)
  }

  static onBackgroundAudioStop(callback) {
    return wx.onBackgroundAudioStop(callback)
  }

  static onBackgroundAudioPause(callback) {
    return wx.onBackgroundAudioPause(callback)
  }

  static onBackgroundAudioPlay(callback) {
    return wx.onBackgroundAudioPlay(callback)
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

  static uploadFile(bd_object) {
    return wx.uploadFile(bd_object)
  }

  //
  static connectSocket(object) {
    return wx.connectSocket(object)
  }

  static onSocketError(callback) {
    return wx.onSocketError(callback)
  }

  static onSocketMessage(swan_callback) {
    if (!swan_callback) {
      return
    }
    const wx_callback = function (wx_res) {
      const swan_res = {
        data: wx_res.data,
        dataType: wx_res.dataType
      }

      swan_callback(swan_res)
    }
    wx.onSocketMessage(wx_callback)
  }

  static onSocketClose(callback) {
    return wx.onSocketClose(callback)
  }

  static onSocketOpen(callback) {
    return wx.connectSocket(callback)
  }

  static sendSocketMessage(object) {
    return wx.sendSocketMessage(object)
  }

  static closeSocket(object) {
    return wx.closeSocket(object)
  }

  static offLocalServiceResolveFail(callback) {
    return wx.offLocalServiceResolveFail(callback)
  }

  static onLocalServiceResolveFail(callback) {
    return wx.onLocalServiceResolveFail(callback)
  }

  static offLocalServiceDiscoveryStop(callback) {
    return wx.offLocalServiceDiscoveryStop(callback)
  }

  static onLocalServiceDiscoveryStop(callback) {
    return wx.onLocalServiceDiscoveryStop(callback)
  }

  static offLocalServiceLost(callback) {
    return wx.offLocalServiceLost(callback)
  }

  static onLocalServiceLost(callback) {
    return wx.onLocalServiceLost(callback)
  }

  static offLocalServiceFound(callback) {
    return wx.offLocalServiceFound(callback)
  }

  static onLocalServiceFound(callback) {
    return wx.onLocalServiceFound(callback)
  }

  static stopLocalServiceDiscovery(object) {
    return wx.stopLocalServiceDiscovery(object)
  }

  static startLocalServiceDiscovery(object) {
    return wx.startLocalServiceDiscovery(object)
  }

  // eslint-disable-next-line no-dupe-class-members
  static stopLocalServiceDiscovery(object) {
    return wx.stopLocalServiceDiscovery(object)
  }

  // eslint-disable-next-line no-dupe-class-members
  static startLocalServiceDiscovery(object) {
    return wx.startLocalServiceDiscovery(object)
  }

  // eslint-disable-next-line no-dupe-class-members
  static onLocalServiceResolveFail(callback) {
    return wx.onLocalServiceResolveFail(callback)
  }

  // eslint-disable-next-line no-dupe-class-members
  static onLocalServiceLost(callback) {
    return wx.onLocalServiceLost(callback)
  }

  // eslint-disable-next-line no-dupe-class-members
  static onLocalServiceFound(callback) {
    return wx.onLocalServiceFound(callback)
  }

  // eslint-disable-next-line no-dupe-class-members
  static onLocalServiceDiscoveryStop(callback) {
    return wx.onLocalServiceDiscoveryStop(callback)
  }

  // eslint-disable-next-line no-dupe-class-members
  static offLocalServiceResolveFail(callback) {
    return wx.offLocalServiceResolveFail(callback)
  }

  // eslint-disable-next-line no-dupe-class-members
  static offLocalServiceLost(callback) {
    return wx.offLocalServiceLost(callback)
  }

  // eslint-disable-next-line no-dupe-class-members
  static offLocalServiceFound(callback) {
    return wx.offLocalServiceFound(callback)
  }

  // eslint-disable-next-line no-dupe-class-members
  static offLocalServiceDiscoveryStop(callback) {
    return wx.offLocalServiceDiscoveryStop(callback)
  }

  // /////// Open Interface //////////
  static _checkSession() {
    const now = new Date().getTime()

    // eslint-disable-next-line no-undef
    return getApp().onekitwx._jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60 * 24 * 3
  }

  static checkSession(object) {
    if (swan._checkSession()) {
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

  // eslint-disable-next-line consistent-return
  // static login(object) {
  //   const that = this
  //   if (!object) {
  //     return wx.login(object)
  //   }
  //   const object2 = {}
  //   object2.success = function (res) {
  //     // eslint-disable-next-line no-undef
  //     getApp().onekitwx._code = res.code

  //     // eslint-disable-next-line no-undef
  //     getApp().onekitwx._login = new Date().getTime()
  //     const result = {
  //       code: res.code
  //     }
  //     if (object.success) {
  //       object.success(result)
  //     }
  //     if (object.complete) {
  //       object.complete(result)
  //     }
  //   }
  //   object2.fail = function (res) {
  //     if (object.fail) {
  //       object.fail(res)
  //     }
  //     if (object.complete) {
  //       object.complete(res)
  //     }
  //   }
  //   if (swan._checkSession()) {
  //     object2.success({

  //       // eslint-disable-next-line no-undef
  //       code: getApp().onekitwx._code
  //     })
  //   } else {
  //     wx.login(object2)
  //   }
  // }

  static requestPolymerPayment(object) {
    swan.login({
      success(res) {
        const code = res.code

        // eslint-disable-next-line no-undef
        const url = getApp().onekitwx.server + 'orderinfo'
        wx.request({
          url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            orderInfo: JSON.stringify(object.orderInfo),
            code
          },
          success(res) {
            wx.requestPayment({
              appId: res.data.appId,
              timeStamp: res.data.timeStamp,
              nonceStr: res.data.nonceStr,
              package: res.data.package,
              signType: res.data.signType,
              paySign: res.data.paySign,
            })
            if (object.success) {
              object.success(res)
            }
            if (object.complete) {
              object.complete(res)
            }
          },
          fail(res) {
            if (object.fail) {
              object.fail(res)
            }
          }
        })
      }
    })
  }

  static _getUserInfo(data, callback, isAPI) {
    console.log(data)
    swan.login({
      success(res) {
        const code = res.code

        // eslint-disable-next-line no-undef
        const url = getApp().onekitwx.server + 'userinfo'
        wx.request({
          url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            isAPI,
            withCredentials: true,
            data: JSON.stringify(data),
            code
          },
          success(res) {
            callback(res.data)
          },
          fail(res) {
            console.error(res)
          }
        })
      }
    })
  }

  static getUserInfo(object) {
    // eslint-disable-next-line no-undef
    getApp().onekitwx.getuserinfo = (data) => {
      swan._getUserInfo(data, (res) => {
        if (object.success) {
          object.success(res)
        }
        if (object.complete) {
          object.complete(res)
        }
      }, true)
    }
    wx.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
  }

  // static getOpenData(object) {
  //   function success(res) {
  //     const opendata = res.userInfo

  //     // eslint-disable-next-line no-undef
  //     getApp().onekitwx.opendata = opendata

  //     // eslint-disable-next-line no-undef
  //     getApp().onekitwx.opendataCallbacks = []

  //     // eslint-disable-next-line no-undef
  //     for (let cb = 0; cb < getApp().onekitwx.opendataCallbacks.length; cb++) {
  //       // eslint-disable-next-line no-undef
  //       getApp().onekitwx.opendataCallbacks[cb](opendata)
  //     }
  //     if (object.success) {
  //       object.success(opendata)
  //     }
  //     if (object.complete) {
  //       object.complete(opendata)
  //     }
  //   }

  //   // eslint-disable-next-line no-undef
  //   const opendata = getApp().onekitwx.opendata
  //   if (opendata) {
  //     if (Object.keys(opendata) > 0) {
  //       object.success(opendata)
  //     } else if (object.success) {
  //       // eslint-disable-next-line no-undef
  //       getApp().onekitwx.opendataCallbacks.push(object.success)
  //     }
  //     return
  //   }

  //   // eslint-disable-next-line no-undef
  //   getApp().onekitwx.opendata = {}
  //   swan.login({
  //     success(res) {
  //       const code = res.code
  //       swan.getUserInfo({

  //         success(res) {
  //           // eslint-disable-next-line no-undef
  //           const url = getApp().onekitwx.server + 'userinfo'
  //           wx.httpRequest({
  //             url,
  //             header: {
  //               'Content-Type': 'application/x-www-form-urlencoded'
  //             },
  //             method: 'POST',
  //             data: {
  //               withCredentials: false,
  //               isAPI: false,
  //               code
  //             },
  //             success(res) {
  //               success(res.data)
  //             },
  //             fail(res) {
  //               console.log(res)
  //             }
  //           })
  //         }
  //       })
  //     }
  //   })
  // }

  static getPhoneNumber(data, callback) {
    swan.login({
      success(res) {
        const code = res.code

        // eslint-disable-next-line no-undef
        const url = getApp().onekitwx.server + 'phonenumber'
        wx.request({
          url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            code,
            data: JSON.stringify(data)
          },
          success(res) {
            callback(res.data)
          }
        })
      }
    })
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

  static requestPayment(object) {
    return wx.requestPayment(object)
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

  // eslint-disable-next-line no-dupe-class-members
  static reportMonitor(name, value) {
    // eslint-disable-next-line no-undef
    const js_code = getApp().OneKit.jscode
    wx.httpRequest({
      url: 'http://192.168.0.106:8080/onekit_adapter/reportMonitor',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        js_code,
        name,
        number: value
      },
      success: (res) => {
        console.log('success')

        console.log(res.data)
      },
      fail(res) {
        console.log(res)
      },
      complete(res) {
        console.log(res)
      }

    })
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

  static offWindowResize(callback) {
    return wx.offWindowResize(callback)
  }

  static onWindowResize(callback) {
    return wx.onWindowResize(callback)
  }

  // //////////// Worker ///////////////
  /*
  static createWorker(path) {
    return new WORKER(path)
  } */

  // //////////// WXML ///////////////
  static createSelectorQuery(object) {
    return wx.createSelectorQuery(object)
  }

  static createIntersectionObserver(swan_object) {
    if (!swan_object) {
      return
    }
    const swan_thresholds = swan_object.thresholds
    const swan_initialRatio = swan_object.initialRatio
    const swan_selectAll = swan_object.selectAll
    const swan_success = swan_object.success
    const swan_complete = swan_object.complete
    const swan_fail = swan_object.fail

    swan_object = null
    //
    const wx_object = {}
    if (swan_thresholds) {
      wx_object.thresholds = swan_thresholds
    }
    if (swan_initialRatio) {
      wx_object.initialRatio = swan_initialRatio
    }
    if (swan_selectAll) {
      wx_object.observeAll = swan_selectAll
    }
    if (swan_success) {
      wx_object.success = swan_success
    }
    if (swan_complete) {
      wx_object.complete = swan_complete
    }
    if (swan_fail) {
      wx_object.fail = swan_fail
    }
    wx_object.success = function (wx_res) {
      const swan_res = wx_res
      if (swan_success) {
        swan_success(swan_res)
      }
      if (swan_complete) {
        swan_complete(swan_res)
      }
    }
    wx_object.fail = function (wx_res) {
      const swan_res = wx_res
      if (swan_fail) {
        swan_fail(swan_res)
      }
      if (swan_complete) {
        swan_complete(swan_res)
      }
    }

    wx.createIntersectionObserver(wx_object)
  }

  // ///////////////////////////////////
  static hideKeyboard(object) {
    return wx.hideKeyboard(object)
  }

  // /////////////////////////////////

  static createARCameraContext() {
    throw new Error('createARCameraContext�ݲ�֧��!!')
  }

  static setURLQuery(urlQuery) {
    const page = OneKit.current()
    //
    const oldURLQuery = page.query
    const newURLQuery = oldURLQuery
    for (const key of Object.keys(urlQuery)) {
      const value = urlQuery[key]
      newURLQuery[key] = value
    }
    page.query = newURLQuery
    //
    if (page.onURLQueryChange) {
      page.onURLQueryChange({oldURLQuery, newURLQuery})
    }
  }

  static getURLQuery() {
    const page = OneKit.current()
    //
    return page.query
  }
}
/*
swan.ai = {}
for (const api of ['ocrIdCard', 'ocrBankCard', 'ocrDrivingLicense', 'ocrVehicleLicense', 'textReview', 'textToAudio', 'imageAudit', 'advancedGeneralIdentify', 'objectDetectIdentify', 'carClassify', 'dishClassify', 'logoClassify', 'animalClassify', 'plantClassify', 'getVoiceRecognizer', 'faceDetect', 'faceMatch', 'faceSearch', 'facePersonVerify', 'facePersonIdmatch', 'faceLivenessSessioncode', 'nlpLexerCustom']) {
  ai_init(api)
}

function ai_init(api) {
  swan.ai[api] = (object) => swan_ai.run(api, object)
} */
