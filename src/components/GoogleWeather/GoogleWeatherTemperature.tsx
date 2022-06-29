
import {useContext} from 'react'
import {GoogleWeatherContext} from './Contexts'
import Loading from './Loading'

interface IGoogleWeatherTemperatute { name?: string }

const GoogleWeatherTemperatute: React.FunctionComponent<IGoogleWeatherTemperatute> = ({name}) => {
  const gwc = useContext(GoogleWeatherContext)
  return <div className={name}>
    { 'temperature' in gwc.data ? `${gwc.data.temperature}°C`: <Loading text="..." /> }
  </div>
}
export default GoogleWeatherTemperatute