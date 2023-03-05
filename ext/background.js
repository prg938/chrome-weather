/* eslint-disable no-undef */

// If you remove this import your extension won't auto-update
import _ from './auto-update.js'
import GoogleWeatherParser from './weatherParser.js'

const fetcher = async url => await (await fetch(url)).text()

// your code here
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'data') {
    fetcher('https://www.google.com/search?q=google+weather&ie=UTF-8').then(text => {
      const data = GoogleWeatherParser.parsePage(text)
      let lang = /[а-я]/.test(data.outside[0]) ? 'ru' : 'en'
      fetcher('http://ip-api.com/json/?lang=' + lang).then(geo => sendResponse({data, geo: JSON.parse(geo)}))
    })
    return true
  }
})