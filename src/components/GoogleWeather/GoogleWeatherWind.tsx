
import {useContext} from 'react'
import {GoogleWeatherContext} from './Contexts'
import Loading from './Loading'

interface IGoogleWeatherWind {
  name: string
  prefix?: string
}

const GoogleWeatherWind: React.FunctionComponent<IGoogleWeatherWind> = ({name, prefix}) => {
  const gwc = useContext(GoogleWeatherContext)
  return <div className={name}>
    <div>{name.toUpperCase()}</div>
    <div><b>{ 'wind' in gwc.data ? gwc.data.wind : <Loading text='...' /> }</b></div>
  </div>
}
export default GoogleWeatherWind