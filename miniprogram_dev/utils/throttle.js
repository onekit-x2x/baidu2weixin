import {swan} from '../baidu2weixin/index';
export const throttle = (fn,interval)=>{
  var enterTime = 0
  var gapTime = (interval || 300)
  return function(){
    var context = this
    var backTime = new Date()
    if(((backTime - enterTime)) > gapTime){
    fn.call(context,arguments);
    enterTime = backTime;
  }
  }
}
