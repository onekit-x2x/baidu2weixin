// onekit/ui/input/input.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field'],
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
    input_input(e){
      console.log("input_input",e)
      this.triggerEvent("input",e.details)
    },
    input_focus(e){
      console.log("input_focus",e)
      this.triggerEvent("focu",e.details)
    },
    input_blur(e){
      console.log("input_blur",e)
      this.triggerEvent("blur",e.details)
    },
    input_confirm(e){
      console.log("input_confirm",e)
      this.triggerEvent("confirm",e.details)
    },


  }
})