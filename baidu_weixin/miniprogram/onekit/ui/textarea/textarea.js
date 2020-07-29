// onekit/ui/textarea/textarea.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field'],
  options: {  virtualHost: true
  },
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    value:{type:String},

    placeholder:{type:String,value:""},
    placeholderStyle :{type:String,value:""},
    placeholderClass :{type:String,value:""},
    disabled :{type:Boolean,value:false},
    maxlength :{type:Number,value:"140"},
    focus :{type:Boolean,value:false},
    autoHeight:{type:Boolean,value:false},
    cursor:{type:Number,value:-1},
    autoFocus:{type:Boolean,value:false},
    fixed:{type:Boolean,value:false},
    cursorSpacing:{type:Number,value:0},
    showConfirmBar:{type:Boolean,value:true},
    selectionStart:{type:Number,value:-1},
    selectionEnd:{type:Number,value:-1},
    adjustPosition:{type:Boolean,value:true},

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
            textarea_focus(e){
              console.log("textarea_focus", e);
              this.triggerEvent('focus',e.details)
              },
              textarea_blur(e){
              console.log("textarea_blur", e);
              this.triggerEvent('blur',e.details)
              },
              textarea_linechange(e){
              console.log("textarea_linechange", e);
              this.triggerEvent('linechange',e.details)
              },
              textarea_input(e){
              console.log("textarea_input", e);
              this.triggerEvent('input',e.details)
              },
              textarea_confirm(e){
              console.log("textarea_confirm", e);
               this.triggerEvent('confirm',e.details)
              },

  }
})
