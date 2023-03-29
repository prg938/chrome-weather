
import {useResult} from "../customHooks"
import {useContext} from 'react'
import {WeatherContext} from './Contexts'
import Outside from "./Outside"

const Temperatute: React.FunctionComponent<{}> = () => {
  const s = ' '
  const wc = useContext(WeatherContext)
  const temperature = useResult('temperature', 'tm', 'Loading')
  let icon = useResult('outside', 'iu', s)

  const getImageWithHTTPPrefix = (link: string) => <img src={link.replace(/^/, 'http:')} alt="" />
  const geo = wc.geo ? (wc.geo.country + ', ' + wc.geo.city) : s
  
  if (Array.isArray(icon)) 
    icon = getImageWithHTTPPrefix(icon[1])
  if (typeof icon === 'string')
    icon = getImageWithHTTPPrefix(icon)
  
  return <div className="gw-temperature__wrapper">
    <div className="gw-temperature__value">
      <div className="gw-temperature__geo">
        <span>{geo}</span>
      </div>
      <div className="gw-temperature__t-wrapper">
        <div className="gw-temperature__t">{temperature}{typeof temperature === 'string' ? '°' : ''}</div>
        <div className="gw-temperature__icon">{icon}</div>
      </div>
      <Outside name={'outside'} />
    </div>
  </div>
}
export default Temperatute