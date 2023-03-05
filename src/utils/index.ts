
export const es = ''

export const UTF8ArrayToString = (() => {
  // Preallocate the cache for the common single byte chars
  const isFromCodePointDefined = !!String.fromCodePoint
  const charCache = new Array(128)
  const charFromCodePt = String.fromCodePoint || String.fromCharCode
  const result: number[] = []
  return (array: number[]) => {
    const buffLen = array.length  
    let codePt, byte1
    let i = 0
    result.length = 0
    while (i < buffLen) {
      byte1 = array[i++]
      if (byte1 <= 0x7F) codePt = byte1
      else if (byte1 <= 0xDF) codePt = ((byte1 & 0x1F) << 6) | (array[i++] & 0x3F)
      else if (byte1 <= 0xEF) codePt = ((byte1 & 0x0F) << 12) | ((array[i++] & 0x3F) << 6) | (array[i++] & 0x3F)
      else if (isFromCodePointDefined) codePt = ((byte1 & 0x07) << 18) | ((array[i++] & 0x3F) << 12) | ((array[i++] & 0x3F) << 6) | (array[i++] & 0x3F)
      else {
        // Cannot convert four byte code points, so use "?" instead
        codePt = 63
        i = i + 3
      }
      result.push(charCache[codePt] || (charCache[codePt] = charFromCodePt(codePt)))
    }
    return result.join(es)
  }
})();

// @ts-ignore
export const scroll = (axis: 'X' | 'Y' = 'Y'): number => Number((window.pageYOffset !== undefined) ? window[`page${axis}Offset`] : (document.documentElement || document.body.parentNode || document.body)[`scroll${axis === 'Y' ? 'Top' : 'Left'}`])

export const attr = (node: HTMLElement) => (qualifiedName: string) => node.getAttribute(qualifiedName)

export const px = (value: any) => `${value}px`

export const computed = (node: any, property: string) => parseInt(document.defaultView?.getComputedStyle(node).getPropertyValue(property) as string)

export const selector = (selector: string) => document.querySelector(`#${selector}`)

export const className = (node: any, className: string) => node.setAttribute('class', node.className = className)

export const style = (node: any, styleSet: {[key: string]: any}) => Object.keys(styleSet).forEach(property => node.style[property] = styleSet[property])

export const isArray = (array: any) => Object.prototype.toString.call(array) === '[object Array]'

export const isBoolean = (bool: boolean) => bool === true || bool === false

export const merge = (...objects: any[]) => objects.reduce((pv, cv) => ({...pv, ...cv}), {})