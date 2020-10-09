export default class VideoContext {
  constructor(weixinVideoContext) {
    this.weixinVideoContext = weixinVideoContext
  }

  play() {
    return this.weixinVideoContext.play()
  }

  pause() {
    return this.weixinVideoContext.pause()
  }

  stop() {
    return this.weixinVideoContext.stop()
  }

  seek(position) {
    return this.weixinVideoContext.seek(position)
  }

  sendDanmu(data) {
    return this.weixinVideoContext.playbackRate(data)
  }

  playbackRate(rate) {
    return this.weixinVideoContext.playbackRate(rate)
  }

  requestFullScreen(direction) {
    return this.weixinVideoContext.requestFullScreen(direction)
  }

  exitFullScreen() {
    return this.weixinVideoContext.exitFullScreen()
  }

  showStatusBar() {
    return this.weixinVideoContext.showStatusBar()
  }

  hideStatusBar() {
    return this.weixinVideoContext.hideStatusBar()
  }
}
