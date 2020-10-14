/* eslint-disable max-len */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  behaviors: [onekit_behavior, baidu_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    width: {
      type: Number,
      value: 800
    },
    height: {
      type: Number,
      value: 400
    },
    style: {
      type: String,
      value: 'width:400px;height:400px'
    },
    path: {
      type: String
    },
    loop: {
      type: Boolean,
      value: false
    },
    autoplay: {
      type: Boolean,
      value: false
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
    // animationVideo_started() {
    //   this.triggerEvent('animationVideo_started')
    // },
    // animationVideo_ended() {
    //   this.triggerEvent('animationVideo_ended')
    // },
    // ui_tap(e) {
    //   const that = this;
    //   const style = e.detail;
    //   wx.createSelectorQuery().in(this).select('.onekit-animation-video')
    //   .select('.onekit-img').boundingClientRect()
    //   .exec(function (res) {
    //     var WIDTH = res[0].width
    //     var HEIGHT = res[0].height

    //     var data2 = {}
    //     if (!that.properties.width && !that.properties.height) {

    //       data2.weixin_width = style.width + "px";
    //       data2.weixin_height = style.height + "px";
    //     } else if (!that.properties.width && that.properties.height) {
    //       console.log(WIDTH, HEIGHT, style)
    //       // data2.weixin_width = style.width*this.properties.height/style.height+"px";
    //       data2.weixin_width = style.width * HEIGHT / style.height + "px";
    //     } else if (that.properties.width && !that.properties.height) {
    //       // data2.weixin_height = style.height*this.properties.width/style.width+"px";
    //       data2.weixin_height = style.height * WIDTH / style.width + "px";
    //     }
    //     that.setData(data2)
    //   }
    // }

    // wx.createSelectorQuery().in(this).select('.onekit-animation-video')
    //     .fields({node: true, style: true})
    //     .exec((res) => {
    //       const canvas = res[0].node
    //       const dpr = wx.getSystemInfoSync().pixelRatio
    //       canvas.width = res[0].width * dpr
    //       canvas.height = res[0].height * dpr
    //       this.setData({
    //         resourceWidth: canvas.width,
    //         resourceHeight: canvas.height
    //       })
    //     })
    //   this.setData({
    //     resourceStyle: this.properties.resourceStyle
    //   })
  },
  lifetimes: {
    attached() {
    //   wx.createSelectorQuery().in(this).select('.onekit-animation-video')
    //     .fields({node: true, style: true})
    //     .exec((res) => {
    //       const canvas = res[0].node
    //       const dpr = wx.getSystemInfoSync().pixelRatio
    //       canvas.width = res[0].width * dpr
    //       canvas.height = res[0].height * dpr
    //       this.setData({
    //         resourceWidth: canvas.width,
    //         resourceHeight: canvas.height
    //       })
    //     })
    //   this.setData({
    //     resourceStyle: this.properties.resourceStyle
    //   })
    // const weixin_width =this.properties.width?(this.properties.width.indexOf("%")?this.properties.width:(this.properties.width+"px")):"auto";
    // const weixin_height =this.properties.height?(this.properties.height.indexOf("%")?this.properties.height:(this.properties.height+"px")):"auto";
    // this.setData({weixin_width,weixin_height});
    }
  }
})
