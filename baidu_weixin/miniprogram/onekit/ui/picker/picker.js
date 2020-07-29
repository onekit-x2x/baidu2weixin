// onekit/ui/picker/picker.js
Component({
  /**
   * 组件的属性列表
   */
  options: {  virtualHost: true
  },
  properties: {
<<<<<<< HEAD
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    value:{type:String,value:""},
    disabled:{type:Boolean,value:false},
=======
    Class: {
      type: String,
      value: ""
    },
    Style: {
      type: String,
      value: ""
    },
    Id: {
      type: String,
      value: ""
    },
    title:{type:String},
    range:{type:Array},
    rangeKey:{type:String},
    value:{type:Number,value:0},
    disabled:{type:Boolean,value:Boolean},
    start:{type:String},
    end:{type:String},
    fields:{type:String},
>>>>>>> bfe817915d9d8e8e81548221f2cb69fc826d4c39
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


