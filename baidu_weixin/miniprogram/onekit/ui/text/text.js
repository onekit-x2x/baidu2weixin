// onekit/ui/text/text.js
Component({
  /**
   * 组件的属性列表
   */
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
    selectable:{
      type:Boolean,
      value:false},
    space:{
      type:String,
      value:''
    },
    decode:{
      type:Boolean,
      value:false},
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
