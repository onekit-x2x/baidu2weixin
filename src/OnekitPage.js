/* eslint-disable no-console */
/* eslint-disable camelcase */

export default function OnekitPage(swan_object) {
  const wx_object = {
    onLoad(options) {
      this._setData = this.setData
      this.setData = function (keyOrData, value) {
        if (typeof (keyOrData) === 'string') {
          this._setData({
            [keyOrData]: value
          })
        } else {
          this._setData(keyOrData)
        }
      }
      if (swan_object.onLoad) {
        swan_object.onLoad.apply(this, options || {})
      }
    },
    getData(key) {
      return this.data[key]
    }
  }
  for (const key of Object.keys(swan_object)) {
    switch (key) {
      case 'onLoad':
        break
      default:
        wx_object[key] = swan_object[key]
        break
    }
  }

  return Page(wx_object)
}
