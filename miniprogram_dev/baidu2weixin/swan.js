module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _CameraContext = __webpack_require__(19);

var _CameraContext2 = _interopRequireDefault(_CameraContext);

var _InnerAudioContext = __webpack_require__(20);

var _InnerAudioContext2 = _interopRequireDefault(_InnerAudioContext);

var _VideoContext = __webpack_require__(21);

var _VideoContext2 = _interopRequireDefault(_VideoContext);

var _LivePlayerContext = __webpack_require__(22);

var _LivePlayerContext2 = _interopRequireDefault(_LivePlayerContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */

// import swan_ai from 'swan.ai'
// import CanvasContext from "./api/CanvasContext"


// import Context from "./api/Context"
var swan = function () {
  function swan() {
    _classCallCheck(this, swan);
  }

  swan.getData = function getData(that, key) {
    return that.data[key];
  };

  swan.setData = function setData(that, key, data) {
    if (typeof key === 'string') {
      var json = {};
      json[key] = data;
      return that.setData(json);
    } else {
      return that.setData(key);
    }
  };

  // ///////////////// animation //////////////////////////


  swan.createAnimation = function createAnimation(object) {
    return wx.createAnimation(object);
  };

  // /////////////// basic ////////////////////////////////


  swan.canIUse = function canIUse() {
    return true;
  };

  swan.getSystemInfo = function getSystemInfo(object) {
    return wx.getSystemInfo(object);
  };

  swan.getSystemInfoSync = function getSystemInfoSync() {
    return wx.getSystemInfoSync();
  };

  swan.base64ToArrayBuffer = function base64ToArrayBuffer(base64) {
    return wx.base64ToArrayBuffer(base64);
  };

  swan.arrayBufferToBase64 = function arrayBufferToBase64(arrayBuffer) {
    return wx.arrayBufferToBase64(arrayBuffer);
  };

  swan.getUpdateManager = function getUpdateManager(object) {
    return wx.getUpdateManager(object);
  };

  swan.getLaunchOptionsSync = function getLaunchOptionsSync(object) {
    return wx.getLaunchOptionsSync(object);
  };

  // static offPageNotFound(swan_callback) {
  //   const wx_callback  =function(wx_res){
  //     swan_callback(swan_res);
  //   }
  //   return wx.offPageNotFound(wx_callback)
  // }


  swan.offPageNotFound = function offPageNotFound(callback) {
    return wx.offPageNotFound(callback);
  };

  swan.onPageNotFound = function onPageNotFound(callback) {
    return wx.onPageNotFound(callback);
  };

  swan.offError = function offError(callback) {
    return wx.offError(callback);
  };

  swan.onError = function onError(callback) {
    return wx.onError(callback);
  };

  swan.offAppShow = function offAppShow(callback) {
    return wx.offAppShow(callback);
  };

  swan.onAppShow = function onAppShow(callback) {
    return wx.onAppShow(callback);
  };

  swan.offAppHide = function offAppHide(callback) {
    return wx.offAppHide(callback);
  };

  swan.onAppHide = function onAppHide(callback) {
    return wx.onAppHide(callback);
  };

  swan.setEnableDebug = function setEnableDebug(object) {
    return wx.setEnableDebug(object);
  };

  swan.getLogManager = function getLogManager(object) {
    return wx.getLogManager(object);
  };

  /*
  static createCanvasContext(canvasId, ui) {
    return new CanvasContext(wx.createCanvasContext(canvasId))
  } */

  swan.createCameraContext = function createCameraContext(cameraId) {
    return new _CameraContext2.default(wx.createCameraContext(cameraId));
  };

  swan.createInnerAudioContext = function createInnerAudioContext(audioId) {
    return new _InnerAudioContext2.default(wx.createInnerAudioContext(audioId));
  };

  swan.createLivePlayerContext = function createLivePlayerContext(playerId) {
    return new _LivePlayerContext2.default(wx.createLivePlayerContext(playerId));
  };

  swan.createVideoContext = function createVideoContext(videoId) {
    return new _VideoContext2.default(wx.createVideoContext(videoId));
  };

  swan.canvasToTempFilePath = function canvasToTempFilePath(object) {
    return wx.canvasToTempFilePath(object);
  };

  swan.canvasPutImageData = function canvasPutImageData(object) {
    return wx.canvasPutImageData(object);
  };

  swan.canvasGetImageData = function canvasGetImageData(object) {
    return wx.canvasGetImageData(object);
  };

  // //////////// Device //////////////////


  swan.onBeaconServiceChange = function onBeaconServiceChange(callback) {
    return wx.onBeaconServiceChange(callback);
  };

  swan.onBeaconUpdate = function onBeaconUpdate(callback) {
    return wx.onBeaconUpdate(callback);
  };

  swan.getBeacons = function getBeacons(object) {
    return wx.getBeacons(object);
  };

  swan.stopBeaconDiscovery = function stopBeaconDiscovery(object) {
    return wx.stopBeaconDiscovery(object);
  };

  swan.startBeaconDiscovery = function startBeaconDiscovery(object) {
    return wx.startBeaconDiscovery(object);
  };

  swan.stopWifi = function stopWifi(object) {
    return wx.stopWifi(object);
  };

  swan.startWifi = function startWifi(object) {
    return wx.startWifi(object);
  };

  swan.setWifiList = function setWifiList(object) {
    return wx.setWifiList(object);
  };

  swan.onWifiConnected = function onWifiConnected(callback) {
    return wx.onWifiConnected(callback);
  };

  swan.onGetWifiList = function onGetWifiList(callback) {
    return wx.onGetWifiList(callback);
  };

  swan.getWifiList = function getWifiList(object) {
    return wx.getWifiList(object);
  };

  swan.getConnectedWifi = function getConnectedWifi(object) {
    return wx.getConnectedWifi(object);
  };

  swan.connectWifi = function connectWifi(object) {
    return wx.connectWifi(object);
  };

  //


  swan.onAccelerometerChange = function onAccelerometerChange(callback) {
    return wx.onAccelerometerChange(callback);
  };

  swan.stopAccelerometer = function stopAccelerometer(object) {
    return wx.stopAccelerometer(object);
  };

  swan.startAccelerometer = function startAccelerometer(object) {
    return wx.startAccelerometer(object);
  };

  swan.getBatteryInfoSync = function getBatteryInfoSync(object) {
    return wx.getBatteryInfoSync(object);
  };

  swan.getBatteryInfo = function getBatteryInfo(object) {
    return wx.getBatteryInfo(object);
  };

  //


  swan.getClipboardData = function getClipboardData(object) {
    return wx.getClipboardData(object);
  };

  swan.setClipboardData = function setClipboardData(object) {
    return wx.setClipboardData(object);
  };

  swan.onCompassChange = function onCompassChange(callback) {
    return wx.onCompassChange(callback);
  };

  swan.stopCompass = function stopCompass(object) {
    return wx.stopCompass(object);
  };

  swan.startCompass = function startCompass(object) {
    return wx.startCompass(object);
  };

  swan.addPhoneContact = function addPhoneContact(object) {
    return wx.addPhoneContact(object);
  };

  swan.onGyroscopeChange = function onGyroscopeChange(callback) {
    return wx.onGyroscopeChange(callback);
  };

  swan.stopGyroscope = function stopGyroscope(object) {
    return wx.stopGyroscope(object);
  };

  swan.startGyroscope = function startGyroscope(object) {
    return wx.startGyroscope(object);
  };

  //


  swan.onDeviceMotionChange = function onDeviceMotionChange(callback) {
    return wx.onDeviceMotionChange(callback);
  };

  swan.stopDeviceMotionListening = function stopDeviceMotionListening(object) {
    return wx.stopDeviceMotionListening(object);
  };

  swan.startDeviceMotionListening = function startDeviceMotionListening(object) {
    return wx.startDeviceMotionListening(object);
  };

  swan.getNetworkType = function getNetworkType(object) {
    return wx.getNetworkType(object);
  };

  swan.onNetworkStatusChange = function onNetworkStatusChange(callback) {
    return wx.onNetworkStatusChange(callback);
  };

  //


  swan.makePhoneCall = function makePhoneCall(object) {
    return wx.makePhoneCall(object);
  };

  swan.scanCode = function scanCode(object) {
    return wx.scanCode(object);
  };

  //


  swan.vibrateLong = function vibrateLong(object) {
    return wx.vibrateLong(object);
  };

  swan.vibrateShort = function vibrateShort(object) {
    return wx.vibrateShort(object);
  };

  //


  swan.onMemoryWarning = function onMemoryWarning(callback) {
    return wx.onMemoryWarning(callback);
  };

  //


  swan.writeBLECharacteristicValue = function writeBLECharacteristicValue(object) {
    return wx.writeBLECharacteristicValue(object);
  };

  swan.readBLECharacteristicValue = function readBLECharacteristicValue(object) {
    return wx.readBLECharacteristicValue(object);
  };

  swan.onBLEConnectionStateChange = function onBLEConnectionStateChange(callback) {
    return wx.onBLEConnectionStateChange(callback);
  };

  swan.onBLECharacteristicValueChange = function onBLECharacteristicValueChange(callback) {
    return wx.onBLECharacteristicValueChange(callback);
  };

  swan.notifyBLECharacteristicValueChange = function notifyBLECharacteristicValueChange(object) {
    return wx.notifyBLECharacteristicValueChange(object);
  };

  swan.getBLEDeviceServices = function getBLEDeviceServices(object) {
    return wx.getBLEDeviceServices(object);
  };

  swan.getBLEDeviceCharacteristics = function getBLEDeviceCharacteristics(object) {
    return wx.getBLEDeviceCharacteristics(object);
  };

  swan.createBLEConnection = function createBLEConnection(object) {
    return wx.createBLEConnection(object);
  };

  swan.closeBLEConnection = function closeBLEConnection(object) {
    return wx.closeBLEConnection(object);
  };

  swan.stopBluetoothDevicesDiscovery = function stopBluetoothDevicesDiscovery(object) {
    return wx.stopBluetoothDevicesDiscovery(object);
  };

  swan.startBluetoothDevicesDiscovery = function startBluetoothDevicesDiscovery(object) {
    return wx.startBluetoothDevicesDiscovery(object);
  };

  swan.openBluetoothAdapter = function openBluetoothAdapter(object) {
    return wx.openBluetoothAdapter(object);
  };

  swan.onBluetoothDeviceFound = function onBluetoothDeviceFound(callback) {
    return wx.onBluetoothDeviceFound(callback);
  };

  swan.onBluetoothAdapterStateChange = function onBluetoothAdapterStateChange(callback) {
    return wx.onBluetoothAdapterStateChange(callback);
  };

  swan.getConnectedBluetoothDevices = function getConnectedBluetoothDevices(object) {
    return wx.getConnectedBluetoothDevices(object);
  };

  swan.getBluetoothDevices = function getBluetoothDevices(object) {
    return wx.getBluetoothDevices(object);
  };

  swan.getBluetoothAdapterState = function getBluetoothAdapterState(object) {
    return wx.getBluetoothAdapterState(object);
  };

  swan.closeBluetoothAdapter = function closeBluetoothAdapter(object) {
    return wx.closeBluetoothAdapter(object);
  };

  //


  swan.stopHCE = function stopHCE(object) {
    return wx.stopHCE(object);
  };

  swan.startHCE = function startHCE(object) {
    return wx.startHCE(object);
  };

  swan.sendHCEMessage = function sendHCEMessage(object) {
    return wx.sendHCEMessage(object);
  };

  swan.onHCEMessage = function onHCEMessage(callback) {
    return wx.onHCEMessage(callback);
  };

  swan.getHCEState = function getHCEState(object) {
    return wx.getHCEState(object);
  };

  //


  swan.setScreenBrightness = function setScreenBrightness(object) {
    return wx.setScreenBrightness(object);
  };

  swan.setKeepScreenOn = function setKeepScreenOn(object) {
    return wx.setKeepScreenOn(object);
  };

  swan.onUserCaptureScreen = function onUserCaptureScreen(callback) {
    return wx.onUserCaptureScreen(callback);
  };

  swan.getScreenBrightness = function getScreenBrightness(object) {
    return wx.getScreenBrightness(object);
  };

  // ///////////////// Ext //////////////


  swan.getExtConfigSync = function getExtConfigSync(object) {
    return wx.getExtConfigSync(object);
  };

  swan.getExtConfig = function getExtConfig(object) {
    return wx.getExtConfig(object);
  };

  // ////////////////// File //////////


  swan.getFileSystemManager = function getFileSystemManager(object) {
    return wx.getFileSystemManager(object);
  };

  swan.getFileInfo = function getFileInfo(object) {
    return wx.getFileInfo(object);
  };

  swan.removeSavedFile = function removeSavedFile(object) {
    return wx.removeSavedFile(object);
  };

  swan.getSavedFileInfo = function getSavedFileInfo(object) {
    return wx.getSavedFileInfo(object);
  };

  swan.getSavedFileList = function getSavedFileList(object) {
    return wx.getSavedFileList(object);
  };

  swan.openDocument = function openDocument(object) {
    return wx.openDocument(object);
  };

  swan.saveFile = function saveFile(object) {
    return wx.saveFile(object);
  };

  // ////////// Location ///////////////


  swan.openLocation = function openLocation(object) {
    return wx.openLocation(object);
  };

  swan.getLocation = function getLocation(object) {
    return wx.getLocation(object);
  };

  swan.chooseLocation = function chooseLocation(object) {
    return wx.chooseLocation(object);
  };

  // //////// Media ////////////////////


  swan.createMapContext = function createMapContext(object) {
    return wx.createMapContext(object);
  };

  swan.compressImage = function compressImage(object) {
    return wx.compressImage(object);
  };

  swan.saveImageToPhotosAlbum = function saveImageToPhotosAlbum(object) {
    return wx.saveImageToPhotosAlbum(object);
  };

  swan.getImageInfo = function getImageInfo(object) {
    return wx.getImageInfo(object);
  };

  swan.previewImage = function previewImage(object) {
    return wx.previewImage(object);
  };

  swan.chooseImage = function chooseImage(object) {
    return wx.chooseImage(object);
  };

  swan.saveVideoToPhotosAlbum = function saveVideoToPhotosAlbum(object) {
    return wx.saveVideoToPhotosAlbum(object);
  };

  swan.chooseVideo = function chooseVideo(object) {
    return wx.chooseVideo(object);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.createVideoContext = function createVideoContext(object) {
    return wx.createVideoContext(object);
  };

  swan.stopVoice = function stopVoice(object) {
    return wx.stopVoice(object);
  };

  swan.pauseVoice = function pauseVoice(object) {
    return wx.pauseVoice(object);
  };

  swan.playVoice = function playVoice(object) {
    return wx.playVoice(object);
  };

  swan.setInnerAudioOption = function setInnerAudioOption(object) {
    return wx.setInnerAudioOption(object);
  };

  swan.getAvailableAudioSources = function getAvailableAudioSources(object) {
    return wx.getAvailableAudioSources(object);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.createInnerAudioContext = function createInnerAudioContext(object) {
    return wx.createInnerAudioContext(object);
  };

  swan.createAudioContext = function createAudioContext(object) {
    return wx.createAudioContext(object);
  };

  swan.onBackgroundAudioStop = function onBackgroundAudioStop(callback) {
    return wx.onBackgroundAudioStop(callback);
  };

  swan.onBackgroundAudioPause = function onBackgroundAudioPause(callback) {
    return wx.onBackgroundAudioPause(callback);
  };

  swan.onBackgroundAudioPlay = function onBackgroundAudioPlay(callback) {
    return wx.onBackgroundAudioPlay(callback);
  };

  swan.stopBackgroundAudio = function stopBackgroundAudio(object) {
    return wx.stopBackgroundAudio(object);
  };

  swan.seekBackgroundAudio = function seekBackgroundAudio(object) {
    return wx.seekBackgroundAudio(object);
  };

  swan.pauseBackgroundAudio = function pauseBackgroundAudio(object) {
    return wx.pauseBackgroundAudio(object);
  };

  swan.playBackgroundAudio = function playBackgroundAudio(object) {
    return wx.playBackgroundAudio(object);
  };

  swan.getBackgroundAudioPlayerState = function getBackgroundAudioPlayerState(object) {
    return wx.getBackgroundAudioPlayerState(object);
  };

  swan.getBackgroundAudioManager = function getBackgroundAudioManager(object) {
    return wx.getBackgroundAudioManager(object);
  };

  swan.createLivePusherContext = function createLivePusherContext(object) {
    return wx.createLivePusherContext(object);
  };

  swan.getRecorderManager = function getRecorderManager(object) {
    return wx.getRecorderManager(object);
  };

  // ////////////// Network ///////////////


  swan.request = function request(object) {
    return wx.request(object);
  };

  swan.downloadFile = function downloadFile(object) {
    return wx.downloadFile(object);
  };

  swan.uploadFile = function uploadFile(object) {
    return wx.uploadFile(object);
  };

  //


  swan.connectSocket = function connectSocket(object) {
    return wx.connectSocket(object);
  };

  swan.onSocketError = function onSocketError(callback) {
    return wx.onSocketError(callback);
  };

  swan.onSocketMessage = function onSocketMessage(swan_callback) {
    if (!swan_callback) {
      return;
    }
    var wx_callback = function wx_callback(wx_res) {
      var swan_res = {
        data: wx_res.data,
        dataType: wx_res.dataType
      };

      swan_callback(swan_res);
    };
    wx.onSocketMessage(wx_callback);
  };

  swan.onSocketClose = function onSocketClose(callback) {
    return wx.onSocketClose(callback);
  };

  swan.onSocketOpen = function onSocketOpen(callback) {
    return wx.connectSocket(callback);
  };

  swan.sendSocketMessage = function sendSocketMessage(object) {
    return wx.sendSocketMessage(object);
  };

  swan.closeSocket = function closeSocket(object) {
    return wx.closeSocket(object);
  };

  swan.offLocalServiceResolveFail = function offLocalServiceResolveFail(callback) {
    return wx.offLocalServiceResolveFail(callback);
  };

  swan.onLocalServiceResolveFail = function onLocalServiceResolveFail(callback) {
    return wx.onLocalServiceResolveFail(callback);
  };

  swan.offLocalServiceDiscoveryStop = function offLocalServiceDiscoveryStop(callback) {
    return wx.offLocalServiceDiscoveryStop(callback);
  };

  swan.onLocalServiceDiscoveryStop = function onLocalServiceDiscoveryStop(callback) {
    return wx.onLocalServiceDiscoveryStop(callback);
  };

  swan.offLocalServiceLost = function offLocalServiceLost(callback) {
    return wx.offLocalServiceLost(callback);
  };

  swan.onLocalServiceLost = function onLocalServiceLost(callback) {
    return wx.onLocalServiceLost(callback);
  };

  swan.offLocalServiceFound = function offLocalServiceFound(callback) {
    return wx.offLocalServiceFound(callback);
  };

  swan.onLocalServiceFound = function onLocalServiceFound(callback) {
    return wx.onLocalServiceFound(callback);
  };

  swan.stopLocalServiceDiscovery = function stopLocalServiceDiscovery(object) {
    return wx.stopLocalServiceDiscovery(object);
  };

  swan.startLocalServiceDiscovery = function startLocalServiceDiscovery(object) {
    return wx.startLocalServiceDiscovery(object);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.stopLocalServiceDiscovery = function stopLocalServiceDiscovery(object) {
    return wx.stopLocalServiceDiscovery(object);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.startLocalServiceDiscovery = function startLocalServiceDiscovery(object) {
    return wx.startLocalServiceDiscovery(object);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.onLocalServiceResolveFail = function onLocalServiceResolveFail(callback) {
    return wx.onLocalServiceResolveFail(callback);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.onLocalServiceLost = function onLocalServiceLost(callback) {
    return wx.onLocalServiceLost(callback);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.onLocalServiceFound = function onLocalServiceFound(callback) {
    return wx.onLocalServiceFound(callback);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.onLocalServiceDiscoveryStop = function onLocalServiceDiscoveryStop(callback) {
    return wx.onLocalServiceDiscoveryStop(callback);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.offLocalServiceResolveFail = function offLocalServiceResolveFail(callback) {
    return wx.offLocalServiceResolveFail(callback);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.offLocalServiceLost = function offLocalServiceLost(callback) {
    return wx.offLocalServiceLost(callback);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.offLocalServiceFound = function offLocalServiceFound(callback) {
    return wx.offLocalServiceFound(callback);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.offLocalServiceDiscoveryStop = function offLocalServiceDiscoveryStop(callback) {
    return wx.offLocalServiceDiscoveryStop(callback);
  };

  // /////// Open Interface //////////


  swan._checkSession = function _checkSession() {
    var now = new Date().getTime();

    // eslint-disable-next-line no-undef
    return getApp().onekitwx._jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60 * 24 * 3;
  };

  swan.checkSession = function checkSession(object) {
    if (swan._checkSession()) {
      if (object.success) {
        object.success();
      }
      if (object.complete) {
        object.complete();
      }
    } else {
      if (object.fail) {
        object.fail();
      }
      if (object.complete) {
        object.complete();
      }
    }
  };

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

  swan.requestPolymerPayment = function requestPolymerPayment(object) {
    swan.login({
      success: function success(res) {
        var code = res.code;

        // eslint-disable-next-line no-undef
        var url = getApp().onekitwx.server + 'orderinfo';
        wx.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            orderInfo: JSON.stringify(object.orderInfo),
            code: code
          },
          success: function success(res) {
            wx.requestPayment({
              appId: res.data.appId,
              timeStamp: res.data.timeStamp,
              nonceStr: res.data.nonceStr,
              package: res.data.package,
              signType: res.data.signType,
              paySign: res.data.paySign
            });
            if (object.success) {
              object.success(res);
            }
            if (object.complete) {
              object.complete(res);
            }
          },
          fail: function fail(res) {
            if (object.fail) {
              object.fail(res);
            }
          }
        });
      }
    });
  };

  swan._getUserInfo = function _getUserInfo(data, callback, isAPI) {
    console.log(data);
    swan.login({
      success: function success(res) {
        var code = res.code;

        // eslint-disable-next-line no-undef
        var url = getApp().onekitwx.server + 'userinfo';
        wx.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            isAPI: isAPI,
            withCredentials: true,
            data: JSON.stringify(data),
            code: code
          },
          success: function success(res) {
            callback(res.data);
          },
          fail: function fail(res) {
            console.error(res);
          }
        });
      }
    });
  };

  swan.getUserInfo = function getUserInfo(object) {
    // eslint-disable-next-line no-undef
    getApp().onekitwx.getuserinfo = function (data) {
      swan._getUserInfo(data, function (res) {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }, true);
    };
    wx.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    });
  };

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

  swan.getPhoneNumber = function getPhoneNumber(data, callback) {
    swan.login({
      success: function success(res) {
        var code = res.code;

        // eslint-disable-next-line no-undef
        var url = getApp().onekitwx.server + 'phonenumber';
        wx.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            code: code,
            data: JSON.stringify(data)
          },
          success: function success(res) {
            callback(res.data);
          }
        });
      }
    });
  };

  swan.navigateToMiniProgram = function navigateToMiniProgram(object) {
    return wx.navigateToMiniProgram(object);
  };

  swan.navigateBackMiniProgram = function navigateBackMiniProgram(object) {
    return wx.navigateBackMiniProgram(object);
  };

  swan.getAccountInfoSync = function getAccountInfoSync(object) {
    return wx.getAccountInfoSync(object);
  };

  swan.reportMonitor = function reportMonitor(object) {
    return wx.reportMonitor(object);
  };

  swan.reportAnalytics = function reportAnalytics(object, eventName) {
    return wx.reportAnalytics(object, eventName);
  };

  swan.requestPayment = function requestPayment(object) {
    return wx.requestPayment(object);
  };

  swan.authorize = function authorize(object) {
    return wx.authorize(object);
  };

  swan.openSetting = function openSetting(object) {
    return wx.openSetting(object);
  };

  swan.getSetting = function getSetting(object) {
    return wx.getSetting(object);
  };

  swan.chooseAddress = function chooseAddress(object) {
    return wx.chooseAddress(object);
  };

  swan.openCard = function openCard(object) {
    return wx.openCard(object);
  };

  swan.addCard = function addCard(object) {
    return wx.addCard(object);
  };

  swan.chooseInvoiceTitle = function chooseInvoiceTitle(object) {
    return wx.chooseInvoiceTitle(object);
  };

  swan.chooseInvoice = function chooseInvoice(object) {
    return wx.chooseInvoice(object);
  };

  swan.startSoterAuthentication = function startSoterAuthentication(object) {
    return wx.startSoterAuthentication(object);
  };

  swan.checkIsSupportSoterAuthentication = function checkIsSupportSoterAuthentication(object) {
    return wx.checkIsSupportSoterAuthentication(object);
  };

  swan.checkIsSoterEnrolledInDevice = function checkIsSoterEnrolledInDevice(object) {
    return wx.checkIsSoterEnrolledInDevice(object);
  };

  swan.getWeRunData = function getWeRunData(object) {
    return wx.getWeRunData(object);
  };

  // eslint-disable-next-line no-dupe-class-members


  swan.reportMonitor = function reportMonitor(name, value) {
    // eslint-disable-next-line no-undef
    var js_code = getApp().onekit.jscode;
    wx.httpRequest({
      url: 'http://192.168.0.106:8080/onekit_adapter/reportMonitor',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        js_code: js_code,
        name: name,
        number: value
      },
      success: function success(res) {
        console.log('success');

        console.log(res.data);
      },
      fail: function fail(res) {
        console.log(res);
      },
      complete: function complete(res) {
        console.log(res);
      }
    });
  };

  // //////// Router //////////////


  swan.navigateBack = function navigateBack(object) {
    return wx.navigateBack(object);
  };

  swan.switchTab = function switchTab(object) {
    return wx.switchTab(object);
  };

  swan.navigateTo = function navigateTo(object) {
    return wx.navigateTo(object);
  };

  swan.reLaunch = function reLaunch(object) {
    return wx.reLaunch(object);
  };

  swan.redirectTo = function redirectTo(object) {
    return wx.redirectTo(object);
  };

  // /////////// Share /////////////


  swan.updateShareMenu = function updateShareMenu(object) {
    return wx.updateShareMenu(object);
  };

  swan.showShareMenu = function showShareMenu(object) {
    return wx.showShareMenu(object);
  };

  swan.hideShareMenu = function hideShareMenu(object) {
    return wx.hideShareMenu(object);
  };

  swan.getShareInfo = function getShareInfo(object) {
    return wx.getShareInfo(object);
  };

  // ///////////// Storage //////////////


  swan.getStorageInfoSync = function getStorageInfoSync(object) {
    return wx.getStorageInfoSync(object);
  };

  swan.getStorageInfo = function getStorageInfo(object) {
    return wx.getStorageInfo(object);
  };

  swan.clearStorageSync = function clearStorageSync(object) {
    return wx.clearStorageSync(object);
  };

  swan.clearStorage = function clearStorage(object) {
    return wx.clearStorage(object);
  };

  swan.removeStorageSync = function removeStorageSync(object) {
    return wx.removeStorageSync(object);
  };

  swan.removeStorage = function removeStorage(object) {
    return wx.removeStorage(object);
  };

  swan.setStorageSync = function setStorageSync(key, value) {
    return wx.setStorageSync(key, value);
  };

  swan.setStorage = function setStorage(object) {
    return wx.setStorage(object);
  };

  swan.getStorageSync = function getStorageSync(key) {
    return wx.getStorageSync(key);
  };

  swan.getStorage = function getStorage(object) {
    return wx.getStorage(object);
  };

  // //////////// UI ////////////////


  swan.showActionSheet = function showActionSheet(object) {
    return wx.showActionSheet(object);
  };

  // static redirectTo(object) { return wx.redirectTo(object) }
  // static redirectTo(object) { return wx.redirectTo(object) }


  swan.hideLoading = function hideLoading(object) {
    return wx.hideLoading(object);
  };

  swan.showLoading = function showLoading(object) {
    return wx.showLoading(object);
  };

  swan.hideToast = function hideToast(object) {
    return wx.hideToast(object);
  };

  swan.showToast = function showToast(object) {
    return wx.showToast(object);
  };

  swan.showModal = function showModal(object) {
    return wx.showModal(object);
  };

  swan.setNavigationBarColor = function setNavigationBarColor(object) {
    return wx.setNavigationBarColor(object);
  };

  swan.hideNavigationBarLoading = function hideNavigationBarLoading(object) {
    return wx.hideNavigationBarLoading(object);
  };

  swan.showNavigationBarLoading = function showNavigationBarLoading(object) {
    return wx.showNavigationBarLoading(object);
  };

  swan.setNavigationBarTitle = function setNavigationBarTitle(object) {
    return wx.setNavigationBarTitle(object);
  };

  swan.setBackgroundTextStyle = function setBackgroundTextStyle(object) {
    return wx.setBackgroundTextStyle(object);
  };

  swan.setBackgroundColor = function setBackgroundColor(object) {
    return wx.setBackgroundColor(object);
  };

  swan.setTabBarItem = function setTabBarItem(object) {
    return wx.setTabBarItem(object);
  };

  swan.setTabBarStyle = function setTabBarStyle(object) {
    return wx.setTabBarStyle(object);
  };

  swan.hideTabBar = function hideTabBar(object) {
    return wx.hideTabBar(object);
  };

  swan.showTabBar = function showTabBar(object) {
    return wx.showTabBar(object);
  };

  swan.hideTabBarRedDot = function hideTabBarRedDot(object) {
    return wx.hideTabBarRedDot(object);
  };

  swan.showTabBarRedDot = function showTabBarRedDot(object) {
    return wx.showTabBarRedDot(object);
  };

  swan.removeTabBarBadge = function removeTabBarBadge(object) {
    return wx.removeTabBarBadge(object);
  };

  swan.setTabBarBadge = function setTabBarBadge(object) {
    return wx.setTabBarBadge(object);
  };

  swan.loadFontFace = function loadFontFace(object) {
    return wx.loadFontFace(object);
  };

  swan.stopPullDownRefresh = function stopPullDownRefresh(object) {
    return wx.stopPullDownRefresh(object);
  };

  swan.startPullDownRefresh = function startPullDownRefresh(object) {
    return wx.startPullDownRefresh(object);
  };

  swan.pageScrollTo = function pageScrollTo(object) {
    return wx.pageScrollTo(object);
  };

  swan.setTopBarText = function setTopBarText(object) {
    return wx.setTopBarText(object);
  };

  swan.nextTick = function nextTick(object) {
    return wx.nextTick(object);
  };

  swan.getMenuButtonBoundingClientRect = function getMenuButtonBoundingClientRect(object) {
    return wx.getMenuButtonBoundingClientRect(object);
  };

  swan.offWindowResize = function offWindowResize(callback) {
    return wx.offWindowResize(callback);
  };

  swan.onWindowResize = function onWindowResize(callback) {
    return wx.onWindowResize(callback);
  };

  // //////////// Worker ///////////////
  /*
  static createWorker(path) {
    return new WORKER(path)
  } */

  // //////////// WXML ///////////////


  swan.createSelectorQuery = function createSelectorQuery(object) {
    return wx.createSelectorQuery(object);
  };

  swan.createIntersectionObserver = function createIntersectionObserver(swan_object) {
    if (!swan_object) {
      return;
    }
    var swan_thresholds = swan_object.thresholds;
    var swan_initialRatio = swan_object.initialRatio;
    var swan_selectAll = swan_object.selectAll;
    var swan_success = swan_object.success;
    var swan_complete = swan_object.complete;
    var swan_fail = swan_object.fail;

    swan_object = null;
    //
    var wx_object = {};
    if (swan_thresholds) {
      wx_object.thresholds = swan_thresholds;
    }
    if (swan_initialRatio) {
      wx_object.initialRatio = swan_initialRatio;
    }
    if (swan_selectAll) {
      wx_object.observeAll = swan_selectAll;
    }
    if (swan_success) {
      wx_object.success = swan_success;
    }
    if (swan_complete) {
      wx_object.complete = swan_complete;
    }
    if (swan_fail) {
      wx_object.fail = swan_fail;
    }
    wx_object.success = function (wx_res) {
      var swan_res = wx_res;
      if (swan_success) {
        swan_success(swan_res);
      }
      if (swan_complete) {
        swan_complete(swan_res);
      }
    };
    wx_object.fail = function (wx_res) {
      var swan_res = wx_res;
      if (swan_fail) {
        swan_fail(swan_res);
      }
      if (swan_complete) {
        swan_complete(swan_res);
      }
    };

    wx.createIntersectionObserver(wx_object);
  };

  // ///////////////////////////////////


  swan.hideKeyboard = function hideKeyboard(object) {
    return wx.hideKeyboard(object);
  };

  // /////////////////////////////////

  swan.createARCameraContext = function createARCameraContext() {
    throw new Error('createARCameraContext�ݲ�֧��!!');
  };

  return swan;
}();
/*
swan.ai = {}
for (const api of ['ocrIdCard', 'ocrBankCard', 'ocrDrivingLicense', 'ocrVehicleLicense', 'textReview', 'textToAudio', 'imageAudit', 'advancedGeneralIdentify', 'objectDetectIdentify', 'carClassify', 'dishClassify', 'logoClassify', 'animalClassify', 'plantClassify', 'getVoiceRecognizer', 'faceDetect', 'faceMatch', 'faceSearch', 'facePersonVerify', 'facePersonIdmatch', 'faceLivenessSessioncode', 'nlpLexerCustom']) {
  ai_init(api)
}

function ai_init(api) {
  swan.ai[api] = (object) => swan_ai.run(api, object)
} */


exports.default = swan;

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoContext = function () {
  function VideoContext(weixinCameraContext) {
    _classCallCheck(this, VideoContext);

    this.weixinCameraContext = weixinCameraContext;
  }

  VideoContext.prototype.takePhoto = function takePhoto() {
    return this.weixinCameraContext.takePhoto();
  };

  VideoContext.prototype.startRecord = function startRecord(timeout) {
    return this.weixinCameraContext.startRecord(timeout);
  };

  VideoContext.prototype.stopRecord = function stopRecord(compressed) {
    return this.weixinCameraContext.stopRecord(compressed);
  };

  return VideoContext;
}();

exports.default = VideoContext;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InnerAudioContext = function () {
  function InnerAudioContext(weixinInnerAudioContext) {
    _classCallCheck(this, InnerAudioContext);

    this.weixinInnerAudioContext = weixinInnerAudioContext;
  }

  InnerAudioContext.prototype.play = function play() {
    return this.weixinInnerAudioContext.play();
  };

  InnerAudioContext.prototype.pause = function pause() {
    return this.weixinInnerAudioContext.pause();
  };

  InnerAudioContext.prototype.stop = function stop() {
    return this.weixinInnerAudioContext.stop();
  };

  InnerAudioContext.prototype.destroy = function destroy() {
    return this.weixinInnerAudioContext.destroy();
  };

  InnerAudioContext.prototype.seek = function seek(position) {
    return this.weixinInnerAudioContext.seek(position);
  };

  InnerAudioContext.prototype.onCanplay = function onCanplay(callback) {
    return this.weixinInnerAudioContext.onCanplay(callback);
  };

  InnerAudioContext.prototype.offCanplay = function offCanplay(callback) {
    return this.weixinInnerAudioContext.offCanplay(callback);
  };

  InnerAudioContext.prototype.onPlay = function onPlay(callback) {
    return this.weixinInnerAudioContext.onPlay(callback);
  };

  InnerAudioContext.prototype.offPlay = function offPlay(callback) {
    return this.weixinInnerAudioContext.offPlay(callback);
  };

  InnerAudioContext.prototype.onPause = function onPause(callback) {
    return this.weixinInnerAudioContext.onPause(callback);
  };

  InnerAudioContext.prototype.offPause = function offPause(callback) {
    return this.weixinInnerAudioContext.offPause(callback);
  };

  InnerAudioContext.prototype.onStop = function onStop(callback) {
    return this.weixinInnerAudioContext.onStop(callback);
  };

  InnerAudioContext.prototype.offStop = function offStop(callback) {
    return this.weixinInnerAudioContext.offStop(callback);
  };

  InnerAudioContext.prototype.onEnded = function onEnded(callback) {
    return this.weixinInnerAudioContext.onEnded(callback);
  };

  InnerAudioContext.prototype.offEnded = function offEnded(callback) {
    return this.weixinInnerAudioContext.offEnded(callback);
  };

  InnerAudioContext.prototype.onTimeUpdate = function onTimeUpdate(callback) {
    return this.weixinInnerAudioContext.onTimeUpdate(callback);
  };

  InnerAudioContext.prototype.offTimeUpdate = function offTimeUpdate(callback) {
    return this.weixinInnerAudioContext.offTimeUpdate(callback);
  };

  InnerAudioContext.prototype.onError = function onError(callback) {
    return this.weixinInnerAudioContext.onError(callback);
  };

  InnerAudioContext.prototype.offError = function offError(callback) {
    return this.weixinInnerAudioContext.offError(callback);
  };

  InnerAudioContext.prototype.onWaiting = function onWaiting(callback) {
    return this.weixinInnerAudioContext.onWaiting(callback);
  };

  InnerAudioContext.prototype.offWaiting = function offWaiting(callback) {
    return this.weixinInnerAudioContext.offWaiting(callback);
  };

  InnerAudioContext.prototype.onSeeking = function onSeeking(callback) {
    return this.weixinInnerAudioContext.onSeeking(callback);
  };

  InnerAudioContext.prototype.offSeeking = function offSeeking(callback) {
    return this.weixinInnerAudioContext.offSeeking(callback);
  };

  InnerAudioContext.prototype.onSeeked = function onSeeked(callback) {
    return this.weixinInnerAudioContext.onSeeked(callback);
  };

  InnerAudioContext.prototype.offSeeked = function offSeeked(callback) {
    return this.weixinInnerAudioContext.offSeeked(callback);
  };

  return InnerAudioContext;
}();

exports.default = InnerAudioContext;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoContext = function () {
  function VideoContext(weixinVideoContext) {
    _classCallCheck(this, VideoContext);

    this.weixinVideoContext = weixinVideoContext;
  }

  VideoContext.prototype.play = function play() {
    return this.weixinVideoContext.play();
  };

  VideoContext.prototype.pause = function pause() {
    return this.weixinVideoContext.pause();
  };

  VideoContext.prototype.stop = function stop() {
    return this.weixinVideoContext.stop();
  };

  VideoContext.prototype.seek = function seek(position) {
    return this.weixinVideoContext.seek(position);
  };

  VideoContext.prototype.sendDanmu = function sendDanmu(data) {
    return this.weixinVideoContext.playbackRate(data);
  };

  VideoContext.prototype.playbackRate = function playbackRate(rate) {
    return this.weixinVideoContext.playbackRate(rate);
  };

  VideoContext.prototype.requestFullScreen = function requestFullScreen(direction) {
    return this.weixinVideoContext.requestFullScreen(direction);
  };

  VideoContext.prototype.exitFullScreen = function exitFullScreen() {
    return this.weixinVideoContext.exitFullScreen();
  };

  VideoContext.prototype.showStatusBar = function showStatusBar() {
    return this.weixinVideoContext.showStatusBar();
  };

  VideoContext.prototype.hideStatusBar = function hideStatusBar() {
    return this.weixinVideoContext.hideStatusBar();
  };

  return VideoContext;
}();

exports.default = VideoContext;

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LivePlayerContext = function () {
  function LivePlayerContext(weixinLivePlayerContext) {
    _classCallCheck(this, LivePlayerContext);

    this.weixinLivePlayerContext = weixinLivePlayerContext;
  }

  LivePlayerContext.prototype.play = function play() {
    return this.weixinLivePlayerContext.play();
  };

  LivePlayerContext.prototype.pause = function pause() {
    return this.weixinLivePlayerContext.pause();
  };

  LivePlayerContext.prototype.stop = function stop() {
    return this.weixinLivePlayerContext.stop();
  };

  LivePlayerContext.prototype.mute = function mute() {
    return this.weixinLivePlayerContext.mute();
  };

  LivePlayerContext.prototype.resume = function resume() {
    return this.weixinLivePlayerContext.resume();
  };

  LivePlayerContext.prototype.requestFullScreen = function requestFullScreen(direction) {
    return this.weixinLivePlayerContext.requestFullScreen(direction);
  };

  LivePlayerContext.prototype.exitFullScreen = function exitFullScreen() {
    return this.weixinLivePlayerContext.exitFullScreen();
  };

  return LivePlayerContext;
}();

exports.default = LivePlayerContext;

/***/ })

/******/ });