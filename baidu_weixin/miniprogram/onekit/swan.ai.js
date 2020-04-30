export default class swan_ai
{
    static run(api,object){
    wx.request({
      data: object,
      url: `https://${getApp().onekit.baidu}ai.${api}`,
      success(res){
        console.log(res);
        var res = JSON.parse(res.data);
        if(object.success){
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }, fail(res) {
        console.error(res);
        var res = {Msg:res};
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    })
  }
}