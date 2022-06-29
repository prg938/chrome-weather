
import {useContext} from 'react'
import {GoogleWeatherContext} from './Contexts'
import Loading from './Loading'

interface IGoogleWeatherGeo {
  name: string
  prefix?: string
}

const GoogleWeatherGeo: React.FunctionComponent<IGoogleWeatherGeo> = ({name, prefix}) => {
  const gwc = useContext(GoogleWeatherContext)
  return <div className={name}>
    <div>{name.toUpperCase()}</div>
    <div><b>{'geo' in gwc.data ? (gwc.data.geo || 'unknown') : <Loading text='...' />}</b></div>
  </div>
}
export default GoogleWeatherGeo