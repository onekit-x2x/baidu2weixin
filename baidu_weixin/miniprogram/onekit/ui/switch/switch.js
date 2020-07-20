// onekit/ui/switch/switch.js
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
    checked:{type:Boolean,value:false},
    type:{type:String,value:"switch"},
    disabled:{type:Boolean,value:false},
    color:{type:String}

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
    switch_change(e) {
      this.triggerEvent("Change", {})
    }
  }
})