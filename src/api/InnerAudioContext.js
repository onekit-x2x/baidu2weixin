export default class InnerAudioContext {
  constructor(weixinInnerAudioContext) {
    this.weixinInnerAudioContext = weixinInnerAudioContext
  }

  play() {
    return this.weixinInnerAudioContext.play()
  }

  pause() {
    return this.weixinInnerAudioContext.pause()
  }

  stop() {
    return this.weixinInnerAudioContext.stop()
  }

  destroy() {
    return this.weixinInnerAudioContext.destroy()
  }

  seek(position) {
    return this.weixinInnerAudioContext.seek(position)
  }

  onCanplay(callback) {
    return this.weixinInnerAudioContext.onCanplay(callback)
  }

  offCanplay(callback) {
    return this.weixinInnerAudioContext.offCanplay(callback)
  }

  onPlay(callback) {
    return this.weixinInnerAudioContext.onPlay(callback)
  }

  offPlay(callback) {
    return this.weixinInnerAudioContext.offPlay(callback)
  }

  onPause(callback) {
    return this.weixinInnerAudioContext.onPause(callback)
  }

  offPause(callback) {
    return this.weixinInnerAudioContext.offPause(callback)
  }

  onStop(callback) {
    return this.weixinInnerAudioContext.onStop(callback)
  }

  offStop(callback) {
    return this.weixinInnerAudioContext.offStop(callback)
  }

  onEnded(callback) {
    return this.weixinInnerAudioContext.onEnded(callback)
  }

  offEnded(callback) {
    return this.weixinInnerAudioContext.offEnded(callback)
  }

  onTimeUpdate(callback) {
    return this.weixinInnerAudioContext.onTimeUpdate(callback)
  }

  offTimeUpdate(callback) {
    return this.weixinInnerAudioContext.offTimeUpdate(callback)
  }

  onError(callback) {
    return this.weixinInnerAudioContext.onError(callback)
  }

  offError(callback) {
    return this.weixinInnerAudioContext.offError(callback)
  }

  onWaiting(callback) {
    return this.weixinInnerAudioContext.onWaiting(callback)
  }

  offWaiting(callback) {
    return this.weixinInnerAudioContext.offWaiting(callback)
  }

  onSeeking(callback) {
    return this.weixinInnerAudioContext.onSeeking(callback)
  }

  offSeeking(callback) {
    return this.weixinInnerAudioContext.offSeeking(callback)
  }

  onSeeked(callback) {
    return this.weixinInnerAudioContext.onSeeked(callback)
  }

  offSeeked(callback) {
    return this.weixinInnerAudioContext.offSeeked(callback)
  }
}
