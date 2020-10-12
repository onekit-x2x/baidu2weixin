/* eslint-disable no-console */
/* eslint-disable camelcase */
// import onekit_behavior from '../../behavior/onekit_behavior'
// import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  behaviors: ['wx://form-field-button'/* , onekit_behavior, baidu_behavior */],
  // behaviors: [onekit_behavior, baidu_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    size: {type: String, value: 'default'},
    type: {type: String, value: 'default'},
    plain: {type: Boolean, value: false},
    formType: {type: String, value: 'buttonclick'},
    openType: {type: String, value: ''},
    hoverClass: {type: String, value: 'button-hover'},
    hoverStopPropagation: {type: Boolean, value: false},
    hoverStartTime: {type: Boolean, value: 20},
    hoverStayTime: {type: Number, value: 70},
    disabled: {type: Boolean, value: false},
    loading: {type: Boolean, value: false},

  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    button_bindtap(e) {
      const that = this
      if (that.properties.openType) {
        switch (that.properties.openType) {
          case 'share':
            break
          case 'contact':
            break
          case 'getPhoneNumber':
            break
          case 'getUserInfo':
            break
          case 'openSetting':
            break
          case 'chooseAddress':
            wx.chooseAddress({
              success: (res) => {
                this.setData({
                  addressInfo: res
                })
              },
              fail(err) {
                console.log(err)
              }
            })
            break
          case 'chooseInvoiceTitle':
            wx.chooseInvoiceTitle({
              success: (res) => {
                this.setData({
                  type: res.type,
                  title: res.title,
                  taxNumber: res.taxNumber,
                  companyAddress: res.companyAddress,
                  telephone: res.telephone,
                  bankName: res.bankName,
                  bankAccount: res.bankAccount
                })
              },
              // fail(err) {
              // console.error(err)
              // }
            })
            break
          default:
            throw new Error(that.properties.openType)
        }
      }
      if (!this.properties.formType) {
        that.triggerEvent('Tap', {})
      }
    },
  },
})
