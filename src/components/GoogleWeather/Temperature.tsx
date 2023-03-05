
import {useResult} from "../../customHooks"
import {useContext} from 'react'
import {GoogleWeatherContext} from './Contexts'
import Outside from "./Outside"
import {BsGeoAltFill} from 'react-icons/bs'

const Temperatute: React.FunctionComponent<{}> = () => {

  const temperature = useResult('temperature', 'tm')
  let icon = useResult('outside', 'iu')
  const gwc = useContext(GoogleWeatherContext)

  const getImageWithHTTPPrefix = (link: string) => <img src={link.replace(/^/, 'http:')} alt="" />
  const geo = gwc.geo ? (gwc.geo.country + ', ' + gwc.geo.city) : '...'
  
  if (Array.isArray(icon)) 
    icon = getImageWithHTTPPrefix(icon[1])
  if (typeof icon === 'string')
    icon = getImageWithHTTPPrefix(icon)
  
  return <div className="gw-temperature__wrapper">
    <div className="gw-temperature__value">
      <div className="gw-temperature__t">{temperature}{'°C'}</div>
      <div className="gw-temperature__geo">
        <BsGeoAltFill /> &nbsp;
        <span>{geo}</span>
      </div>
    </div>
    <div className="gw-temperature__icon-wrapper">
      <div className="gw-temperature__icon">{icon}</div>
      <Outside name={'outside'} />
    </div>
  </div>
}
export default Temperatute