/* eslint-disable no-console */
import swan from '../../swan'

Component({
  options: {virtualHost: true},
  properties: {
    onekitClass: {
      type: String,
      value: ''
    },
    onekitStyle: {
      type: String,
      value: ''
    },
    onekitId: {
      type: String,
      value: ''
    },
    // 在哪个目标上发生跳转，默认当前小程序
    target: {
      type: String,
      value: 'self'
    },
    // 当前小程序内的跳转链接
    url: {
      type: String,
      value: ''
    },
    redirect: {
      type: Boolean,
      value: ''
    },
    // 跳转方式
    openType: {
      type: String,
      value: 'navigate',
    },
    // 当 open-type 为 'navigateBack' 时有效，表示回退的层数
    delta: {
      type: Number,
      value: 1,
    },
    // 当target="miniProgram"时有效，要打开的小程序 appId
    appId: {
      type: String,
      value: ''
    },
    path: {
      type: String,
      value: ''
    },
    extraData: {
      type: Object,
      value: ''
    },
    version: {
      type: String,
      value: 'release',
    },
    hoverClass: {
      type: String,
      value: 'navigator-hover',
    },
    hoverStartTime: {
      type: Number,
      value: 50,
    },
    hoverStayTime: {
      type: Number,
      value: 600,
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false,
    },
    bindsuccess: {
      type: String,
      value: ''
    },
    bindfail: {
      type: String,
      value: ''
    },
    bindcomplete: {
      type: String,
      value: ''
    },

    // 这里定义了 headerText 属性，属性值可以在组件使用时指定
    headerText: {
      type: String,
      value: '默认值',
    },
  },
  data: {
    // 组件内部数据
    defaultStates: {}
  },
  methods: {
    // 自定义方法
    view_tap() {
      console.log('dddddd', this.properties.openType)
      // eslint-disable-next-line camelcase
      const app_id = this.properties.appId
      const version = this.properties.version

      console.log('appid:', app_id)
      console.log('version:', version)
      // eslint-disable-next-line default-case
      switch (this.properties.target) {
        case 'self':
          this._target_self()
          break

        case 'miniProgram':
          console.log('aaa')
          this._target_miniProgram()
          break
      }
    },
    _target_self() {
      const url = this.properties.url
      switch (this.properties.openType) {
        case 'redirectTo':
          swan.redirectTo({
            url
          })
          break
        case 'navigateBack':
          swan.navigateBack()
          break
        case 'navigate':
          if (this.properties.redirect) {
            console.log('sss')
            swan.redirectTo({
              url,

            })
          } else {
            swan.navigateTo({
              url
            })
          }

          break
        default:
          break
      }
    },
    _target_miniProgram() {
      const appId = this.properties.appId
      console.log('xxxxx:', appId)
      //  "tta6cdd07039e72db5"
      swan.navigateToMiniProgram({
        appId: 'tta6cdd07039e72db5',
        success(e) {
          console.log('ddddd', e)
        },
        fail(e) {
          console.log(e)
        }
      })
    }

  }


})
