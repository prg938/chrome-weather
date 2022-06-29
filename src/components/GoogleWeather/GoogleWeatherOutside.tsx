
import {useContext} from 'react'
import {GoogleWeatherContext} from './Contexts'
import Loading from './Loading'

interface IGoogleWeatherOutside {
  name: string
  prefix?: string
}

const GoogleWeatherOutside: React.FunctionComponent<IGoogleWeatherOutside> = ({name, prefix}) => {
  const gwc = useContext(GoogleWeatherContext)
  return <div className={name}>
    <div>{name.toUpperCase()}</div>
    <div><b>{'outside' in gwc.data ? gwc.data.outside[0] : <Loading text='...' />}</b></div>
  </div>
}
export default GoogleWeatherOutside