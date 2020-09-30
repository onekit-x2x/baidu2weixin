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

  requestFullScreen() {
    return this.weixinVideoContext.requestFullScreen()
  }

  exitFullScreen() {
    return this.weixinVideoContext.exitFullScreen()
  }
}
