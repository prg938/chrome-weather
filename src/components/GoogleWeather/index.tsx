
import '@fontsource/roboto'
import '../../styles/index.css'
import {useState, useEffect} from 'react'
import {GoogleWeatherContext} from './Contexts'
import {IGoogleWeatherContext} from '../../types'
import GoogleWeatherTemperature from './GoogleWeatherTemperature'
import GoogleWeatherGeo from './GoogleWeatherGeo'
import GoogleWeatherPrecipitation from './GoogleWeatherPrecipitation'
import GoogleWeatherHumidity from './GoogleWeatherHumidity'
import GoogleWeatherWind from './GoogleWeatherWind'
import GoogleWeatherOutside from './GoogleWeatherOutside'
import GoogleWeatherTabs from './GoogleWeatherTabs'
import GoogleWeatherParser from './GoogleWeatherParser'
import {px} from '../../utils'
import settings from '../../settings'

const GoogleWeather: React.FunctionComponent = () => {
  const [googleWeatherContext, updateGoogleWeatherContext] = useState<IGoogleWeatherContext>({data: {}})
  
  useEffect(() => {
    (async () => updateGoogleWeatherContext({data: await GoogleWeatherParser.get()}))()
  }, [])

  return <GoogleWeatherContext.Provider value={googleWeatherContext}>
    <div style={{width: px(settings.windowW), height: px(settings.windowH)}}>
      <div className="gw-top">
        <div className="gw-temperature">
          <GoogleWeatherTemperature />
        </div>
        <div className="gw-stats">
          <GoogleWeatherGeo name="geo" />
          <GoogleWeatherPrecipitation name="precipitation" />
          <GoogleWeatherHumidity name="humidity" />
          <GoogleWeatherWind name="wind" />
          <GoogleWeatherOutside name="outside" />
        </div>
      </div>
      <div>
        <GoogleWeatherTabs />
      </div>
    </div>
  </GoogleWeatherContext.Provider>
}

export {GoogleWeather}