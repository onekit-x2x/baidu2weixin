// onekit/ui/picker/picker.js
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
    title:{type:String},
    range:{type:Array},
    rangeKey:{type:String},
    value:{type:Number,value:0},
    disabled:{type:Boolean,value:Boolean},
    start:{type:String},
    end:{type:String},
    fields:{type:String},
    mode:{type:String,value:"selector"},
    customItem:{type:String}
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
    }
  }
})
