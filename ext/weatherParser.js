

class GoogleWeatherParser {
  static parse(page) {
    const sequenceToCharacter = (sequence) => String.fromCharCode(parseInt(sequence, 16))
    const xsequenceRE = /\\x([0-9a-fA-F]{2})/g
    const usequenceRE = /\\\\u([0-9a-fA-F]{4})/g
    const backslashes = [/\\\\\"/g, '\\"']
    const pmcContainment = page.match(/var pmc=\'([\s\S]*?)\'/)
    const string = (pmcContainment && pmcContainment[1]) || '{}'
    const parsed = string
      .replace(xsequenceRE, (_, sequence) => sequenceToCharacter(sequence))// \x46 -> F
      .replace(usequenceRE, (_, sequence) => sequenceToCharacter(sequence))// \\u042f -> Я
      .replace(backslashes[0], backslashes[1])// \\" => \"
    const data = JSON.parse(parsed)
    return data
  }
  static parsePage(page) {
    const data = this.parse(page)
    return {
      'temperature': data.wobnm.wobct.tm,
      'geo': data.dvl?.uul_text,
      'precipitation': data.wobnm.wobhl[0].p,
      'humidity': data.wobnm.wobhl[0].h,
      'wind': data.wobnm.wobhl[0].ws,
      'outside': [data.wobnm.wobhl[0].c, data.wobnm.wobhl[0].iu],
      'trange': data.wobnm.wobhl
    }
  }
}
GoogleWeatherParser.parsePage = GoogleWeatherParser.parsePage.bind(GoogleWeatherParser)

export default GoogleWeatherParser