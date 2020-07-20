// onekit/ui/picker-view/picker-view.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    value:{type:Array},
    indicatorStyle:{type:String},
    indicatorClass:{type:String},
    maskStyle:{type:String},
    maskClass:{type:String}
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
    pickerView_change(e){
      this.triggerEvent("Change",{})
    }
  }
})
