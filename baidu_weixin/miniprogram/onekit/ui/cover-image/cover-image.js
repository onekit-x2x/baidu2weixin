// onekit/ui/cover-image/cover-image.js
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
    Id: {
      type: String,
      value: ""
    },
    src:{type:String,value:''}
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
    coverImage_load:function(e){
      this.triggerEvent('load',e)
    },
    coverImage_error:function(e){
      this.triggerEvent('error',e)
    }
  }
})
