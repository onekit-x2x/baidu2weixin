export default class URL {
  constructor(url) {
    if (!url) {
      url = location.href
    }
    //
    const p1 = url.indexOf(':')
    if (p1 > 0) {
      const temp = url.substring(p1 + 1)
      const flag = temp.startsWith('//') ? 3 : 1
      //
      this.scheme = url.substring(0, p1)
      const p2 = url.indexOf('/', p1 + flag)
      if (p2 > 0) {
        this.host = url.substring(p1 + flag, p2)
        var p3 = url.indexOf('?')
        if (p2 < url.length) {
          if (p3 > 0) {
            this.path = url.substring(p2, p3)
          } else {
            this.path = url.substring(p2)
          }
        }
      } else {
        this.host = url.substring(p1 + flag)
      }
    }
    //
    this.params = {}
    var p3 = url.indexOf('?')
    if (p3 > 0) {
      this.querystring = url.substring(p3 + 1)
      const querys = this.querystring.split('&')
      for (const query of querys) {
        const pair = query.split('=')
        this.params[pair[0]] = decodeURIComponent(pair[1])
      }
    }
  }
}
