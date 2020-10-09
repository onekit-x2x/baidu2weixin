// onekit/ui/slider/slider.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field-group'],
  options: {virtualHost: true},
  properties: {
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
    min: {type: String, value: 0},
    max: {type: Number, value: 100},
    step: {type: Number, value: 1},
    disabled: {type: Boolean, value: false},
    value: {type: Number, value: 0},
    showValue: {type: Boolean, value: false},
    activeColor: {type: String, value: '#108ee9'},
    backgroundColor: {type: String, value: '#ddd'},
    handleSize: {type: Number, value: 22},
    handleColor: {type: String, value: '#fff'}
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
    // eslint-disable-next-line no-unused-vars
    slider_change(e) {
      this.triggerEvent('Change', {})
    },
    // eslint-disable-next-line no-unused-vars
    slider_changing(e) {
      this.triggerEvent('Changing', {})
    }
  }
})