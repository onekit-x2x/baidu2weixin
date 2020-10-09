// onekit/ui/input/input.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field'],
  options: {  virtualHost: true
  },
  properties: {
    onekitClass: {
      type: String,
      value: ""
    },
    onekitStyle: {
      type: String,
      value: ""
    },
    onekitId: {
      type: String,
      value: ""
    },
    value:{type:String},
    checked:{type:Boolean,value:false},
    disabled:{type:Boolean,value:false},
    color:{type:String}
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

  }
})