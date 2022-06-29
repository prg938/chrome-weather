
(() => {
/** https://www.npmjs.com/package/ansi-regex */
const ansiRegex = ({onlyFirst = false} = {}) => new RegExp(['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|'), onlyFirst ? undefined : 'g')
const stripAnsi = string => typeof string === 'string' ? string.replace(ansiRegex(), es) : string
const tmap = {'&': '&amp;', '<': '&lt;', '>': '&gt;'}
const escapeHTMLTags = string => string.replace(/[&<>]/g, tag => tmap[tag])
const es = ''
const webpackDevServerHostname = 'localhost'
const webpackDevServerPort = '3000'
const webpackDevServerHostnamePort = `${webpackDevServerHostname}:${webpackDevServerPort}`
const webpackDevServerWSOrigin = `ws://${webpackDevServerHostnamePort}`
const webpackDevServerHost = `http://${webpackDevServerHostnamePort}`
const chromeExtensionScheme = 'chrome-extension://'
const chromeExtensionID = chrome.runtime.id
const ET1 = `Cannot request <b>webpack-dev-server at: ${webpackDevServerHost}</b>`
const ET2 = 'Bootstrap Chrome Extension forbids appending IFRAME\'s to BODY. To avoid this problem set data-allowiframe attribute: <iframe data-allowiframe ...>'
const [WSOK, WSERRORS] = ['ok', 'errors']

const writeDocumentStream = text => {
  document.open()
  document.write(text)
  document.close()
}

const responseText = async path => {
  const response = await fetch(path)
  const responseBody = response.body
  if (responseBody === null) return es
  return await response.text()
}

const initWebpackHotDevClientInterception = () => {
  let wsFirst = false
  const {WebSocket} = window
  const NodeAppendChild = Node.prototype.appendChild
  const WebSocketOnmessageSetter = WebSocket.prototype.__lookupSetter__('onmessage')
  const wsFirstResponse = () => {
    if (!wsFirst) wsFirst = true
    else window.location.reload()
  }
  window.WebSocket = function () {
    const args = Array.from(arguments)
    const URL = args[0]
    if (URL.indexOf(chromeExtensionID) != -1) {
      args[0] = URL.replace(chromeExtensionID, webpackDevServerHostnamePort)
    }
    return new WebSocket(...args)
  }
  WebSocket.prototype.__defineSetter__('onmessage', function (callback) {
    const self = this
    WebSocketOnmessageSetter.apply(self, [messageEvent => {
      if (messageEvent.origin === webpackDevServerWSOrigin) {
        const webpackEvent = messageEvent
        const data = JSON.parse(webpackEvent.data || '{}')
        switch (data.type) {
          case WSOK:
            wsFirstResponse()
            break
          case WSERRORS:
            const errors = data.data
            const errorsFormatted = stripAnsi(errors[0])
            document.body.innerHTML = `<pre>${escapeHTMLTags(errorsFormatted)}</pre>`
            console.clear()
            console.warn(errorsFormatted)
            wsFirstResponse()
            break
        }
      }
      else callback.apply(self, [messageEvent])
    }])
  })
  Node.prototype.appendChild = function() {
    const child = arguments[0]
    if (child && child.nodeName === 'IMG' && child.src && child.src.indexOf('static/media') !== -1) {
      child.src = child.src.replace(`${chromeExtensionScheme}${chromeExtensionID}`, `${webpackDevServerHost}`)
    }
    NodeAppendChild.apply(this, arguments)
  }
  HTMLBodyElement.prototype.appendChild = function () {
    const child = arguments[0]
    const isIFRAME = child && child.nodeName === 'IFRAME'
    const containsAllowIframeAttribute = child && child.dataset && child.dataset.allowiframe
    // Forbid <body>.appendChild(<iframe>) because webpack-dev-server scripts will append IFRAME to BODY and will break user-interaction
    if (isIFRAME && !containsAllowIframeAttribute) {
      console.warn(ET2)
      return
    }
    NodeAppendChild.apply(this, arguments)
  }
}

const writeDocumentWithPesolvedAssets = async () => {
  let webpackResponsePage
  try {
    webpackResponsePage = await responseText(webpackDevServerHost)
  }
  catch (caught) {
    writeDocumentStream(ET1)
    console.warn(ET1, caught)
    return false
  }
  const linkRE = /(href=\")(\/static\/css)/g
  const imgRE = /(src=\")(\/static\/media)/g
  const scriptRE = /(\<script)([\s\S]+?)(src\s*=\s*)\"(.+?)\"([\s\S]*?\>)(\<\/script\>)/g
  const scriptsWebpack = []
  const pushWebpackScript = src => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = src
    scriptsWebpack[scriptsWebpack.length] = script
  }
  // Prefix webpack-img
  // webpackResponsePage = webpackResponsePage.replace(imgRE, (match, CG1, CG2) => `${CG1}${webpackDevServerHost}${CG2}`)
  // Prefix webpack-links
  webpackResponsePage = webpackResponsePage.replace(linkRE, (match, CG1, CG2) => `${CG1}${webpackDevServerHost}${CG2}`)
  // Strip webpack-scripts
  // Prefix
  // Append
  // Chrome v>54 forbids <script> elements injected via document.write
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/write
  webpackResponsePage = webpackResponsePage.replace(scriptRE, (match, CG1, CG2, CG3, CG4, CG5, CG6) => {
    let path = CG4
    if (path.startsWith('/')) path = `${webpackDevServerHost}${CG4}`
    pushWebpackScript(path)
    return es
  })
  writeDocumentStream(webpackResponsePage)
  for (let script of scriptsWebpack) document.body.appendChild(script)
}

initWebpackHotDevClientInterception()
writeDocumentWithPesolvedAssets()
})()