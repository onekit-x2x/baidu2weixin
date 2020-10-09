/* eslint-disable vars-on-top */
/* eslint-disable no-var */
// eslint-disable-next-line camelcase
export default class swan_ai {
  static run(api, object) {
    wx.request({
      data: object,
      // eslint-disable-next-line no-undef
      url: `https://${getApp().onekit.baidu}ai.${api}`,
      success(res) {
        // eslint-disable-next-line no-console
        console.log(res)
        // eslint-disable-next-line no-redeclare
        var res = JSON.parse(res.data)
        if (object.success) {
          object.success(res)
        }
        if (object.complete) {
          object.complete(res)
        }
      },
      fail(res) {
        // eslint-disable-next-line no-console
        console.error(res)
        // eslint-disable-next-line no-redeclare
        var res = {Msg: res}
        if (object.fail) {
          object.fail(res)
        }
        if (object.complete) {
          object.complete(res)
        }
      }
    })
  }
}
