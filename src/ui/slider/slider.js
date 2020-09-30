/* eslint-disable no-dupe-keys */
/* eslint-disable camelcase */

import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({

  /**
   * 组件的属性列表
   */
  behaviors: [onekit_behavior, toutiao_behavior, 'wx://form-field-group'],
  options: {
    virtualHost: true
  },
  properties: {
    min: {type: String, value: 0},
    max: {type: Number, value: 100},
    step: {type: Number, value: 1},
    disabled: {type: Boolean, value: false},
    value: {type: Number, value: 0},
    color: {type: String, value: '#e9e9e9'},
    showValue: {type: Boolean, value: false},
    activeColor: {type: String, value: '#f85959'},
    backgroundColor: {type: String, value: '#ddd'},
    blockSize: {type: Number, value: 22},
    blockColor: {type: String, value: '#fff'},
    selectedColor: {type: String, value: '#1aad19'}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    slider_change(wx_e) {
      const wx_detail = wx_e.detail
      const tt_e = {}// wx_e;
      const tt_detail = wx_detail// {};
      tt_e.detail = tt_detail
      this.triggerEvent('Change', tt_e)
    },
    slider_changing(wx_e) {
      const wx_detail = wx_e.detail
      const tt_e = {}// wx_e;
      const tt_detail = wx_detail// {};
      tt_e.detail = tt_detail
      this.triggerEvent('Changing', tt_e)
    }
  }
})
