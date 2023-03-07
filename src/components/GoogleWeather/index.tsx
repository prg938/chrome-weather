
import '../../styles/index.css'
import {useState, useEffect, useMemo} from 'react'
import {GoogleWeatherContext} from './Contexts'
import {merge, px} from '../../utils'
import Temperature from './Temperature'
import Precipitation from './Precipitation'
import Humidity from './Humidity'
import Wind from './Wind'
import Time from './Time'
import Tabber from './Tabber'
import Chart from './Chart'
import settings from '../../settings'
import {LinkExternal, LinkGithub} from './Links'
import {GoLogoGithub, GoLinkExternal} from 'react-icons/go'

const GoogleWeather: React.FunctionComponent = () => {
  
  const [data, update] = useState<any>({
    data: {},
    circleIndex: null,
    geo: null
  })
  const upd = (data: any) => update((prevData: any) => merge(prevData, data))
  const gwc = merge(data, {update: (circleIndex: number) => upd({circleIndex})})

  const links = useMemo(() => [
    [<GoLinkExternal />, <LinkExternal />],
    [<GoLogoGithub />, <LinkGithub />]
  ], [])

  useEffect(() => {
    chrome.runtime.sendMessage({type: 'data'}, response => {
      if (response) {
        const {data, geo} = response
        chrome.action.setBadgeText({text: data.temperature + '°'})
        upd({data, geo})
      }
      else document.write('Cannot fetch data from background.js')
    })
  }, [])

  return <GoogleWeatherContext.Provider value={gwc}>
    <div style={{width: px(settings.windowW), height: px(settings.windowH)}}>
      <div className="gw-top">
        <div className="gw-temperature">
          <Temperature />
        </div>
        <div className="gw-stats">
          <Time name={'time'} />
          <Precipitation name={'precipitation'} />
          <Humidity name={'humidity'} />
          <Wind name={'wind'} />
        </div>
      </div>
      <Chart />
      <Tabber list={links} />
    </div>
  </GoogleWeatherContext.Provider>
}

export {GoogleWeather}