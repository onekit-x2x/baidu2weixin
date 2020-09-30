const OneKit = {}
OneKit.current = function () {
  const pages = getCurrentPages()
  if (pages.length === 0) {
    return {}
  }
  return pages[pages.length - 1]
}
OneKit.currentUrl = function () {
  return OneKit.current().route
}
module.exports = OneKit
