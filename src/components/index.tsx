
import {GoLogoGithub} from 'react-icons/go'
import {merge, px} from '../utils'
import Temperature from './Temperature'
import Precipitation from './Precipitation'
import Humidity from './Humidity'
import Wind from './Wind'
import Time from './Time'
import Tabber from './Tabber'
import Chart from './Chart'
import settings from '../settings'
import {LinkGithub} from './Links'
import {useState, useEffect, useMemo} from 'react'
import {WeatherContext} from './Contexts'

const Weather: React.FunctionComponent = () => {
  const [data, update] = useState({
    data: {},
    ci: null,
    geo: null
  })
  const upd = (data: any) => update((prevData: any) => merge(prevData, data))
  const wc = merge(data, {update: (ci: number) => upd({ci})})
  
  const links = useMemo(() => [[<GoLogoGithub />, <LinkGithub />]], [])

  useEffect(() => {
    chrome.runtime.sendMessage({type: 'data'}, (response) => {
      if (response) {
        const {data, geo} = response
        chrome.action.setBadgeText({text: data.temperature + '°'})
        upd({data, geo})
      }
      else document.write('Cannot fetch data from background.js')
    })
  }, [])

  return <WeatherContext.Provider value={wc}>
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
  </WeatherContext.Provider>
}

export {Weather}