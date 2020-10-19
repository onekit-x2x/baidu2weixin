
const onekit = {}
onekit.current = function () {
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}
onekit.currentUrl = function () {
  const pages = getCurrentPages()
  return pages[pages.length - 1].route
}
export default onekit
