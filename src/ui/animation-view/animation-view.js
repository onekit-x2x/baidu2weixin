/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import lottie from 'lottie-miniprogram'
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'
// import TheKit from '../../js/TheKit'

Component({
  behaviors: [onekit_behavior, baidu_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    path: {
      type: Object
    },
    loop: {
      type: Boolean,
      value: false
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    action: {
      type: String,
      value: 'play'
    },
    hidden: {
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

  },
  lifetimes: {
    ready() {
      const that = this
      // 在组件实例进入页面节点树时执行
      wx.createSelectorQuery().in(this).select('.onekit-animation-view')
        .fields({node: true, size: true})
        .exec((res) => {
          const canvas = res[0].node
          const context = canvas.getContext('2d')
          const dpr = wx.getSystemInfoSync().pixelRatio
          canvas.width = res[0].width * dpr
          canvas.height = res[0].height * dpr
          lottie.setup(canvas)
          //
          const path = that.properties.path // TheKit.abs2rel('baidu2weixin/ui/animation-view/animation-view.js', that.properties.path)
          that.ani = lottie.loadAnimation({
            loop: that.properties.loop,
            animationData: path, // require(`${path}.js`),
            autoplay: that.properties.autoplay,
            rendererSettings: {
              context
            }
          })
          that.ani.play()
        })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

})
