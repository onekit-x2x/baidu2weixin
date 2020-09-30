const TheKit = {}
TheKit.firstUpper = function (str) {
  return str.substr(0, 1).toUpperCase() + str.substr(1)
}
TheKit.trim = function (str) {
  return str.replace(/^\s+|\s+$/gm, '')
}
TheKit.color = function (string) {
  let str = string
  if (!str) {
    return null
  }
  switch (str) {
    case 'transparent':
      return '#00000000'
    case 'black':
      return '#000000FF'
    default:
      break
  }
  if (str.indexOf('rgb') < 0) {
    if (str.length === 7) {
      str += 'FF'
    }
    return str
  }
  str = str.substring(str.indexOf('(') + 1, str.indexOf(')'))
  const array = str.split(',')
  if (array.length === 3) {
    array.push(1)
  }
  const color = TheKit.color.rgba2str(array[0], array[1], array[2], array[3] * 255 + '')
  return color
}
TheKit.rgba2str = function (r, g, b, a) {
  function componentToHex(c) {
    c = TheKit.trim(c)
    const hex = parseInt(c, 10).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(a)
}
TheKit.str2array = function (str) {
  return [parseInt(str.substr(1, 2), 16),
    parseInt(str.substr(3, 2), 16),
    parseInt(str.substr(5, 2), 16),
    parseInt(str.substr(7, 2), 16)]
}
TheKit.array2str = function (array) {
  function f(v) {
    let s = v.toString(16)
    if (s.length === 1) { s = '0' + s }
    return s
  }
  const str = '#' + f(array[0]) + f(array[1]) + f(array[2]) + f(array[3])
  return str
}
TheKit.fixurl = function (currentUrl, url) {
  if (url.startsWith('/')) {
    return url.substring(1)
  }
  // //////////////////
  let folder
  if (currentUrl.indexOf('/') >= 0) {
    folder = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1)
    if (folder.startsWith('/')) {
      folder = folder.substring(1)
    }
  } else {
    folder = ''
  }
  url = url.trim()
  if (url.startsWith('./')) {
    url = url.substring('./'.length)
  }
  while (url.startsWith('../')) {
    folder = folder.substring(0, folder.length - 1)
    folder = folder.substring(0, folder.lastIndexOf('/') + 1)
    url = url.substring('../'.length)
  }

  return folder + url
}
module.exports = TheKit
