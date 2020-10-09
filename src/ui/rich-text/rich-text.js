// onekit/ui/rich-text/rich-text.js
Component({
  options: {
    virtualHost: true

  },
  /**
   * 组件的属性列表
   */
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
    nodes:{
      type:String||Array,
      value:''
    }
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
