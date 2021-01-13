import {OnekitPage} from "../baidu2weixin/index"
OnekitPage({
data:{
"x":0
},
  onLoad() {
setTimeout(()=>{
this.setData({x:1})
setTimeout(()=>{
  this.setData("x",2)
  },3000)
},3000)
  },

})