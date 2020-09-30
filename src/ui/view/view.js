/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],

  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {

    hoverClass: {
      type: String,
      value: 'none'
    },
    hoverStarTime: {
      type: Number,
      value: 50
    },
    hoverStayTime: {
      type: Number,
      value: 400
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  methods: {
  },
  lifetimes: {
    attached() {
    }
  },
})
