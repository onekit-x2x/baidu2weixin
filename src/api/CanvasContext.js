export default class CanvasContext {
  constructor(weixinCanvasContext) {
    this.weixinCanvasContext = weixinCanvasContext
  }

  beginPath(a) {
    return this.weixinCanvasContext.beginPath(a)
  }

  save() {
    return this.weixinCanvasContext.save()
  }

  restore() {
    return this.weixinCanvasContext.restore()
  }

  setGlobalAlpha(alpha) {
    return this.weixinCanvasContext.setGlobalAlpha(alpha)
  }

  setFillStyle(color) {
    return this.weixinCanvasContext.setFillStyle(color)
  }

  setStrokeStyle(color) {
    return this.weixinCanvasContext.setStrokeStyle(color)
  }

  setShadow(offsetX, offsetY, blur, color) {
    return this.weixinCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  setLineCap(lineCap) {
    return this.weixinCanvasContext.setLineCap(lineCap)
  }

  setLineJoin(lineJoin) {
    return this.weixinCanvasContext.setLineJoin(lineJoin)
  }

  setLineWidth(lineWidth) {
    return this.weixinCanvasContext.setLineWidth(lineWidth)
  }

  setMiterLimit(miterLimit) {
    return this.weixinCanvasContext.setMiterLimit(miterLimit)
  }

  setFontSize(fontSize) {
    return this.weixinCanvasContext.setFontSize(fontSize)
  }

  rotate(rotate) {
    return this.weixinCanvasContext.rotate(rotate)
  }

  scale(scaleWidth, scaleHeight) {
    return this.weixinCanvasContext.scale(scaleWidth, scaleHeight)
  }

  translate(x, y) {
    return this.weixinCanvasContext.translate(x, y)
  }

  moveTo(x, y) {
    return this.weixinCanvasContext.moveTo(x, y)
  }

  lineTo(x, y) {
    return this.weixinCanvasContext.lineTo(x, y)
  }

  closePath() {
    return this.weixinCanvasContext.closePath()
  }

  fillText(text, x, y, maxWidth) {
    return this.weixinCanvasContext.fillText(text, x, y, maxWidth)
  }

  drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    return this.weixinCanvasContext.drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }

  arc(x, y, r, sAngle, eAngle, counterclockwise) {
    return this.weixinCanvasContext.arc(x, y, r, sAngle, eAngle, counterclockwise)
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    return this.weixinCanvasContext.quadraticCurveTo(cpx, cpy, x, y)
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.weixinCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  }

  rect(x, y, width, height) {
    return this.weixinCanvasContext.rect(x, y, width, height)
  }

  clearRect(x, y, width, height) {
    return this.weixinCanvasContext.clearRect(x, y, width, height)
  }

  stroke() {
    return this.weixinCanvasContext.stroke()
  }

  fill() {
    return this.weixinCanvasContext.fill()
  }

  draw(reserve, callback) {
    return this.weixinCanvasContext.draw(reserve, callback)
  }

  fillRect(x, y, width, height) {
    return this.weixinCanvasContext.fillRect(x, y, width, height)
  }

  getActions() {
    return this.weixinCanvasContext.getActions()
  }
}
