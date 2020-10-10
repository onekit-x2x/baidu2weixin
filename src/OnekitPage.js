/* eslint-disable camelcase */
export default function OnekitPage(swan_object) {
  const wx_object = swan_object
  wx_object.animate = function () {

  }
  wx_object.getData = function (key) {
    return this.data[key]
  }


  return Page(wx_object)
}
