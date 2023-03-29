
import Loading from '../components/Loading'
import {WeatherContext} from "../components/Contexts"
import {IWeatherData} from '../types'
import {useContext} from 'react'

type TUseResult = (
  f: keyof IWeatherData | 'dts', 
  s: keyof IWeatherData['trange'][0],
  t?: string
) => any

const useResult: TUseResult = (propertyFull, propertyShort, loadingText = '-') => {
  const {data, ci} = useContext(WeatherContext)
  let result
  if (Object.prototype.hasOwnProperty.call(data, 'trange')) {
    if (ci) {
      result = (data as IWeatherData).trange[ci][propertyShort]
    }
    else {
      if (propertyFull === 'dts') result = null
      else result = (data as IWeatherData)[propertyFull]
    }
  }
  else result = <Loading text={loadingText} />

  return result
}

export {useResult}