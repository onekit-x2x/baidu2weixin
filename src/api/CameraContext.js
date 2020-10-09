export default class VideoContext {
  constructor(weixinCameraContext) {
    this.weixinCameraContext = weixinCameraContext
  }

  takePhoto() {
    return this.weixinCameraContext.takePhoto()
  }

  startRecord(timeout) {
    return this.weixinCameraContext.startRecord(timeout)
  }

  stopRecord(compressed) {
    return this.weixinCameraContext.stopRecord(compressed)
  }
}
