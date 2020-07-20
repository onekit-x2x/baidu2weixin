// onekit/ui/movable-view/movable-view.js
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
    direction: {
      type: String,
      value: 'none'
    },
    inertia: {
      type: Boolean,
      value: false
    },
    outOfBounds: {
      type: Boolean,
      value: false
    },
    x: {
      type: Number,
      value: 0
    },
    y: {
      type: Number,
      value: 0
    },
    damping: {
      type: Number,
      value: 20
    },
    friction: {
      type: Number,
      value: 2
    },
    disabled: {
      type: Boolean,
      value: false
    },
    scale: {
      type: Boolean,
      value: false
    },
    scaleMin: {
      type: Number,
      value: 0.5
    },
    scaleMax: {
      type: Number,
      value: 10
    },
    scaleValue: {
      type: Number,
      value: 1
    },
    animation: {
      type: Boolean,
      value: true
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
    movable_Change(e) {
      this.triggerEvent('change', {})
    },
    movable_scale(e) {
      this.triggerEvent('scale', {})
    }
  }
})