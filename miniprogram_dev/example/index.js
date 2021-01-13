import{swan} from '../baidu2weixin/index'
import{OnekitPage} from '../baidu2weixin/index'
OnekitPage({
  onLoad(e){
    const a = !!e.data
    console.log(e, a)
  }
});
