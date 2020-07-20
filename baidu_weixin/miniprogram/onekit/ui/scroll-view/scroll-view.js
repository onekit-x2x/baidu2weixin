// onekit/ui/scroll-view/scroll-view.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    Class:{type:String,value:''},
    Style:{type:String,value:''},
    scrollX: {
      type: Boolean,
      value: false,
    },
    scrollY: {
      type: Boolean,
      value: false
    },
    UpperThreshold: {
      type: Number,
      value: 50
    },
    LowerThreshold: {
      type: Number,
      value: 50
    },
    ScrollIntoView: {
      type: String,
      value: ''
    },
    ScrollTop: {
      type: Number,
      value: 0
    },
    ScrollLeft: {
      type: Number,
      value: 0
    },
    ScrollWithAnimation: {
      type: Boolean,
      value: false
    },
    EnableBackToTop: {
      type: Boolean,
      value: false
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
    on_toupper(e){
      this.triggerEvent('scrolltoupper',{})
    },
    on_tolower(e){
      this.triggerEvent('scrolltolower',{})
    },
    on_scroll(e){
      this.triggerEvent('scroll',{})
    }
  }
})
