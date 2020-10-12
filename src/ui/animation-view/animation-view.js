/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import lottie from 'lottie-miniprogram'
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

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
  lifetimes: {
    attached() {
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
          const path = that.properties.path
          that.ani = lottie.loadAnimation({
            loop: that.properties.loop,
            animationData: path,
            autoplay: that.properties.autoplay,
            rendererSettings: {
              context
            }
          })
        })
    },
  },
  observers: {
    action(action) {
      if (this.ani) {
        switch (action) {
          case 'play': this.ani.play(); break
          case 'pause': this.ani.pause(); break
          case 'stop': this.ani.stop(); break
          default: break
        }
      }
    },
  }
})
