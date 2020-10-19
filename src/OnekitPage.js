/* eslint-disable no-console */
/* eslint-disable camelcase */
export default function OnekitPage(swan_object) {
  const wx_object = {
    getData(key) {
      return this.data[key]
    }
  }
  for (const key of Object.keys(swan_object)) {
    switch (key) {
      case 'onLoad':
        wx_object.onLoad = function (query) {
          this.query = query
          swan_object.onLoad.call(this, query)
        }
        break
      default:
        wx_object[key] = swan_object[key]
        break
    }
  }

  return Page(wx_object)
}
