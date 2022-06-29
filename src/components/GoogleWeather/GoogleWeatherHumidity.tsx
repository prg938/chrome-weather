


import {useContext} from 'react'
import {GoogleWeatherContext} from './Contexts'
import Loading from './Loading'

interface IGoogleWeatherHumidity {
  name: string
  prefix?: string
}

const GoogleWeatherHumidity: React.FunctionComponent<IGoogleWeatherHumidity> = ({name, prefix}) => {
  const gwc = useContext(GoogleWeatherContext)
  return <div className={name}>
    <div>{name.toUpperCase()}</div>
    <div><b>{'humidity' in gwc.data ? gwc.data.humidity : <Loading text='...' />}</b></div>
  </div>
}
export default GoogleWeatherHumidity