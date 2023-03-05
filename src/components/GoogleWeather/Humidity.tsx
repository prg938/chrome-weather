
import {useResult} from '../../customHooks'
import {WiHumidity} from 'react-icons/wi'

interface IGoogleWeatherHumidity {
  name: string
  prefix?: string
}

const GoogleWeatherHumidity: React.FunctionComponent<IGoogleWeatherHumidity> = ({name, prefix}) => {
  const result = useResult('humidity', 'h')
  return <div className={name}>
    <WiHumidity title='humidity' />
    <div><b>{result}</b></div>
  </div>
}
export default GoogleWeatherHumidity