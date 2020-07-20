export default class LivePlayerContext{
  constructor(weixinLivePlayerContext) {
    this.weixinLivePlayerContext = weixinLivePlayerContext;
  }
  play(){
    return  this.weixinLivePlayerContext.play();
  }
  pause(){
    return  this.weixinLivePlayerContext.pause();
  }
  stop(){
    return  this.weixinLivePlayerContext.stop();
  }

  mute(){
    return this.weixinLivePlayerContext.mute();
  }
  resume(){
    return this.weixinLivePlayerContext.resume();
  }
  requestFullScreen(direction){
    return this.weixinLivePlayerContext.requestFullScreen(direction);
  }
  exitFullScreen(){
      return this.weixinLivePlayerContext.exitFullScreen();
    }
 


}