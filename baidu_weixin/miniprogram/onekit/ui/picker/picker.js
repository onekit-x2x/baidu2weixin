// onekit/ui/picker/picker.js
Component({
  /**
   * 组件的属性列表
   */
  options: {  virtualHost: true
  },
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    value:{type:String,value:""},
    disabled:{type:Boolean,value:false},
    mode:{type:String,value:"selector"},
    
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
   
    piker_change(e){
      this.triggerEvent("Change",{})
    },
    piker_cancel(e){
      this.triggerEvent("cancel",{})
    },
  }
})


