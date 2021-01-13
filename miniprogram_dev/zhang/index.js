import {OnekitPage} from "../baidu2weixin/index"
OnekitPage({

  onLoad() {
setTimeout(()=>{
this.setData({x:1})
setTimeout(()=>{
  this.setData("x",2)
  },3000)
},3000)
  },

})