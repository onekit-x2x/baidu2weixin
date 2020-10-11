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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Behavior({

  properties: {
    onekitId: {
      type: String, value: 'id' + Math.random()
    },
    onekitStyle: {
      type: String, value: ''
    },
    onekitClass: {
      type: String, value: ''
    }
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = Behavior({

  properties: {
    animation: { type: Object }
  },
  methods: {
    ui_tap: function ui_tap() {
      this.triggerEvent('Tap');
    },
    ui_touchstart: function ui_touchstart() {
      this.triggerEvent('Touchstart');
    },
    ui_touchmove: function ui_touchmove() {
      this.triggerEvent('Touchmove');
    },
    ui_touchcancel: function ui_touchcancel() {
      this.triggerEvent('Touchcancel');
    },
    ui_touchend: function ui_touchend() {
      this.triggerEvent('Touchend');
    },
    ui_longpress: function ui_longpress() {
      this.triggerEvent('Longpress');
    },
    ui_longtap: function ui_longtap() {
      this.triggerEvent('Longtap');
    },
    ui_transitionend: function ui_transitionend() {
      this.triggerEvent('Transitionend');
    },
    ui_animationstart: function ui_animationstart() {
      this.triggerEvent('Animationstart');
    },
    ui_animationiteration: function ui_animationiteration() {
      this.triggerEvent('Animationiteration');
    },
    ui_animationend: function ui_animationend() {
      this.triggerEvent('Animationend');
    },
    ui_touchforcechange: function ui_touchforcechange() {
      this.triggerEvent('Touchforcechange');
    }
  }
});

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lottieMiniprogram = __webpack_require__(10);

var _lottieMiniprogram2 = _interopRequireDefault(_lottieMiniprogram);

var _onekit_behavior = __webpack_require__(0);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _baidu_behavior = __webpack_require__(1);

var _baidu_behavior2 = _interopRequireDefault(_baidu_behavior);

var _TheKit = __webpack_require__(11);

var _TheKit2 = _interopRequireDefault(_TheKit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/no-dynamic-require */
Component({
  behaviors: [_onekit_behavior2.default, _baidu_behavior2.default],
  options: {
    virtualHost: true
  },
  properties: {
    path: {
      type: String
    },
    loop: {
      type: Boolean,
      value: false
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    action: {
      type: String,
      value: 'play'
    },
    hidden: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {},
  lifetimes: {
    ready: function ready() {
      var that = this;
      // 在组件实例进入页面节点树时执行
      wx.createSelectorQuery().in(this).select('.onekit-animation-view').fields({ node: true, size: true }).exec(function (res) {
        var canvas = res[0].node;
        var context = canvas.getContext('2d');
        var dpr = wx.getSystemInfoSync().pixelRatio;
        canvas.width = res[0].width * dpr;
        canvas.height = res[0].height * dpr;
        _lottieMiniprogram2.default.setup(canvas);
        //
        var path = _TheKit2.default.abs2rel('baidu2weixin/ui/animation-view/animation-view.js', that.properties.path);
        that.ani = _lottieMiniprogram2.default.loadAnimation({
          loop: that.properties.loop,
          animationData: __webpack_require__(12)(path + ".js"),
          autoplay: that.properties.autoplay,
          rendererSettings: {
            context: context
          }
        });
        that.ani.play();
      });
    },
    detached: function detached() {
      // 在组件实例被从页面节点树移除时执行
    }
  }

});

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("lottie-miniprogram");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TheKit = {};
TheKit.firstUpper = function (str) {
  return str.substr(0, 1).toUpperCase() + str.substr(1);
};
TheKit.trim = function (str) {
  return str.replace(/^\s+|\s+$/gm, '');
};
TheKit.color = function (string) {
  var str = string;
  if (!str) {
    return null;
  }
  switch (str) {
    case 'transparent':
      return '#00000000';
    case 'black':
      return '#000000FF';
    default:
      break;
  }
  if (str.indexOf('rgb') < 0) {
    if (str.length === 7) {
      str += 'FF';
    }
    return str;
  }
  str = str.substring(str.indexOf('(') + 1, str.indexOf(')'));
  var array = str.split(',');
  if (array.length === 3) {
    array.push(1);
  }
  var color = TheKit.color.rgba2str(array[0], array[1], array[2], array[3] * 255 + '');
  return color;
};
TheKit.rgba2str = function (r, g, b, a) {
  function componentToHex(c) {
    c = TheKit.trim(c);
    var hex = parseInt(c, 10).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(a);
};
TheKit.str2array = function (str) {
  return [parseInt(str.substr(1, 2), 16), parseInt(str.substr(3, 2), 16), parseInt(str.substr(5, 2), 16), parseInt(str.substr(7, 2), 16)];
};
TheKit.array2str = function (array) {
  function f(v) {
    var s = v.toString(16);
    if (s.length === 1) {
      s = '0' + s;
    }
    return s;
  }
  var str = '#' + f(array[0]) + f(array[1]) + f(array[2]) + f(array[3]);
  return str;
};
TheKit.rel2abs = function (currentUrl, url) {
  if (url.startsWith('/')) {
    return url.substring(1);
  }
  // //////////////////
  var folder = void 0;
  if (currentUrl.indexOf('/') >= 0) {
    folder = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);
    if (folder.startsWith('/')) {
      folder = folder.substring(1);
    }
  } else {
    folder = '';
  }
  url = url.trim();
  if (url.startsWith('./')) {
    url = url.substring('./'.length);
  }
  while (url.startsWith('../')) {
    folder = folder.substring(0, folder.length - 1);
    folder = folder.substring(0, folder.lastIndexOf('/') + 1);
    url = url.substring('../'.length);
  }

  return folder + url;
};
TheKit.abs2rel = function (currentUrl, url) {
  url = TheKit.rel2abs(currentUrl, url);
  if (currentUrl.startsWith('/')) {
    currentUrl = currentUrl.substring(1);
  }
  var array = currentUrl.split('/');
  var result = '';
  if (array.length > 1) {
    for (var i = 0; i < array.length; i++) {
      result += '../';
    }
  } else {
    result += './';
  }
  result += url;
  return result.toString();
};
module.exports = TheKit;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./animation-view.js": 7
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 12;

/***/ })
/******/ ]);