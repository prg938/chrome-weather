
import {useContext} from 'react'
import {GoogleWeatherContext} from "../components/GoogleWeather/Contexts"
import Loading from '../components/GoogleWeather/Loading'
import {IGoogleWeatherParserData} from '../types'

type S = keyof IGoogleWeatherParserData['trange'][0]
type F = keyof IGoogleWeatherParserData | 'dts'

const useResult = (propertyFull: F, propertyShort: S, loadingText = '...') => {
  const {data, circleIndex} = useContext(GoogleWeatherContext)
  let result
  if ('trange' in data) {
    if (circleIndex) result = (data as IGoogleWeatherParserData).trange[circleIndex][propertyShort]
    else {
      if (propertyFull === 'dts') result = null
      else result = (data as IGoogleWeatherParserData)[propertyFull]
    }
  }
  else result = <Loading text={loadingText} />

  return result
}

export {useResult}