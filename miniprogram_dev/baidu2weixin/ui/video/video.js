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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _properties;

/* eslint-disable no-console */
Component({
  options: { virtualHost: true },
  properties: (_properties = {
    onekitClass: {
      type: String,
      value: ''
    },
    onekitStyle: {
      type: String,
      value: ''
    },
    onekitId: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: ''
    },
    video: {
      type: String,
      value: ''
    },
    objectFit: {
      type: String,
      value: ''
    },
    duration: {
      type: Number,
      value: ''
    },
    controls: {
      type: Boolean,
      value: false
    },
    danmuList: {
      type: Array,
      value: ''
    },

    danmuBtn: {
      type: Boolean,
      value: false
    },
    enableBanmu: {
      type: Boolean,
      value: false
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    loop: {
      type: Boolean,
      value: false
    },
    muted: {
      type: Boolean,
      value: false
    },
    initialTime: {
      type: Number,
      value: '0'
    },
    pageGesture: {
      type: Boolean,
      value: false
    },
    direction: {
      type: Number,
      value: ''
    },
    showProgress: {
      type: Boolean,
      value: true
    },
    showFullscreenBtn: {
      type: Boolean,
      value: true
    },

    showPlayBtn: {
      type: Boolean,
      value: true
    },
    showCenterPlayBtn: {
      type: Boolean,
      value: true
    },
    enableProgressGesture: {
      type: Boolean,
      value: true
    },
    poster: {
      type: String,
      value: ''
    },
    showMuteBtn: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    enablePlayGesture: {
      type: Boolean,
      value: false
    }
  }, _properties['pageGesture'] = {
    type: Boolean,
    value: false
  }, _properties.vslideGestureInFullscreen = {
    type: Boolean,
    value: true
  }, _properties.enableDanmu = {
    type: Boolean,
    value: false
  }, _properties),
  methods: {
    video_play: function video_play(e) {
      console.log('video_play', e);
      this.triggerEvent('play', e.details);
    },
    video_pause: function video_pause(e) {
      console.log('video_pause', e);
      this.triggerEvent('pause', e.details);
    },
    video_ended: function video_ended(e) {
      console.log('video_ended', e);
      this.triggerEvent('ended', e.details);
    },
    video_timeupdate: function video_timeupdate(e) {
      console.log('video_timeupdate', e);
      this.triggerEvent('timeupdate', e.details);
    },
    video_fullscreenchang: function video_fullscreenchang(e) {
      console.log('video_fullscreenchang', e);
      this.triggerEvent('fullscreenchang', e.details);
    },
    video_waiting: function video_waiting(e) {
      console.log('video_waiting', e);
      this.triggerEvent('waiting', e.details);
    },
    video_error: function video_error(e) {
      console.log('video_error', e);
      this.triggerEvent('error', e.details);
    },
    video_loadedmetadata: function video_loadedmetadata(e) {
      console.log('video_loadedmetadata', e);
      this.triggerEvent('loadedmetadata', e.details);
    }
  }

});

/***/ })

/******/ });