// onekit/ui/progress/progress.js
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
    percent: {
      type: Number,
      value: 0,
    },
    showInfo: {
      type: Boolean,
      value: false
    },
    strokeWidth: {
      type: Number,
      value: 2
    },
    borderRadius: {
      type: Number,
      value: 0
    },
    fontSize: {
      type: Number,
      value: 16
    },
    color: {
      type: String,
      value: '#09BB07'
    },
    activeColor: {
      type: String,
      value: '#09BB07'
    },
    backgroundColor: {
      type: String,
      value: '#E6E6E6'
    },
    active: {
      type: Boolean,
      value: false
    },
    activeMode: {
      type: String,
      value: 'backwards'
    },
    duration: {
      type: Number,
      value: 20
    }
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
