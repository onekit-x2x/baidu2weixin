// onekit/ui/input/input.js
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
    value:{type:String},
    name:{type:String},
    type:{type:String,value:"text"},
    password:{type:Boolean,value:false},
    placeholder:{type:String,value:""},
    placeholderStyle :{type:String,value:""},
    placeholderClass :{type:String,value:""},
    disabled :{type:Boolean,value:false},
    maxlength :{type:Number,value:"140"},
    cursorSpacing:{type:Number,value:0},
    focus :{type:Boolean,value:false},
    confirmType :{type:String,value:"done"},
    onfirmHold :{type:Boolean,value:false},
    cursor :{type:Number},
    selectionStart:{type:Number,value:-1},
    selectionEnd :{type:Number,value:-1},
    adjustPosition:{type:Boolean,value:true}
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