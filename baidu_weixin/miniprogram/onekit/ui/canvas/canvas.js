// onekit/ui/canvas/canvas.js
Component({
  options: {  virtualHost: true
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
    canvasId:{
      type:String,
      value:""
    },
    disableScroll:{
      type:Boolean,
      value:false
    },

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
