export default class LivePlayerContext {
  constructor(weixinLivePlayerContext) {
    this.weixinLivePlayerContext = weixinLivePlayerContext
  }

  play() {
    return this.weixinLivePlayerContext.play()
  }
}
