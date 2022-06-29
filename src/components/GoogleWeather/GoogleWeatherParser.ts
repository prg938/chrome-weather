
import {UTF8ArrayToString} from '../../utils'
import {IGoogleWeatherParserData} from '../../types'
import {es} from '../../utils'

export default class GoogleWeatherParser {

  private static URI = 'https://www.google.com/search?q=google+weather&oq=google+wea&aqs=chrome.0.69i59j69i57j0j0i20i263j0l2j69i60l2.2745j0j7&sourceid=chrome&ie=UTF-8'
  private static dataPromise: Promise<IGoogleWeatherParserData> 
  
  public static get(): Promise<IGoogleWeatherParserData> {
    if (!this.dataPromise) this.dataPromise = this.parsePageFromGoogle()
    return this.dataPromise
  }

  private static async parsePageFromGoogle(): Promise<IGoogleWeatherParserData> {
    const fetch = await this.fetchPageFromGoogle()
    const data = this.parse(fetch)
    return {
      'temperature': data.wobnm.wobct.tm,
      'geo': data.dvl.uul_text,
      'precipitation': data.wobnm.wobhl[0].p,
      'humidity': data.wobnm.wobhl[0].h,
      'wind': data.wobnm.wobhl[0].ws,
      'outside': [data.wobnm.wobhl[0].c, data.wobnm.wobhl[0].iu],
      'trange': data.wobnm.wobhl
    }
  }

  private static parse(page: string) {
    const xsequenceToCharacter = (sequence: string) => String.fromCharCode(parseInt(sequence, 16))
    const xsequenceRE = /\\x([0-9a-fA-F]{2})/g
    const backslashes = [/\\\\\"/g, '\\"']
    const pmcContainment = page.match(/var pmc=\'([\s\S]*?)\'/)
    const string = (pmcContainment && pmcContainment[1]) || '{}'
    const parsed = string
      .replace(xsequenceRE, (_, sequence) => xsequenceToCharacter(sequence))// \x46 -> F
      .replace(backslashes[0], backslashes[1] as string)// \\" => \"
    const data = JSON.parse(parsed)
    return data
  }

  private static async fetchPageFromGoogle(): Promise<string> {
    const methodError = 'Error at GoogleWeatherParser.fetchDataFromGoogle:'
    const response = await fetch(this.URI)
    const body = response.body
    if (body === null) return es
    const reader: ReadableStreamDefaultReader<Uint8Array> = body.getReader()
    let arr: number[] = []
    let readerDone = false
    try {
      while (!readerDone) {
        const {done, value} = await reader.read()
        arr = arr.concat(value === undefined ? [] : Array.from(value))
        readerDone = done
      }
    }
    catch (caught) {
      console.warn(methodError, caught)
    }
    finally {
      reader.releaseLock()
    }
    return UTF8ArrayToString(arr)
  }
}