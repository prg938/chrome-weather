
import {useContext} from 'react'
import {GoogleWeatherContext} from './Contexts'
import Loading from './Loading'

const GoogleWeatherTemperatute: React.FunctionComponent = () => {
  const gwc = useContext(GoogleWeatherContext)
  let cmp = undefined
  
  if ('outside' in gwc.data)
    cmp = <img src={gwc.data.outside[1].replace(/^/, 'http:')} alt="icon" />

  return <div className="gw-temperature__wrapper">
    <div className="gw-temperature__value">{ 'temperature' in gwc.data ? `${gwc.data.temperature}°`: <Loading text="..." /> }</div>
    <div className="gw-temperature__icon">{cmp}</div>
  </div>
}
export default GoogleWeatherTemperatute