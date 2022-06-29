

import {useContext} from 'react'
import {GoogleWeatherContext} from './Contexts'
import Loading from './Loading'

interface IGoogleWeatherPrecipitation {
  name: string
  prefix?: string
}

const GoogleWeatherPrecipitation: React.FunctionComponent<IGoogleWeatherPrecipitation> = ({name, prefix}) => {
  const gwc = useContext(GoogleWeatherContext)
  return <div className={name}>
    <div>{name.toUpperCase()}</div>
    <div><b>{ 'precipitation' in gwc.data ? gwc.data.precipitation : <Loading text='...' /> }</b></div>
  </div>
}
export default GoogleWeatherPrecipitation