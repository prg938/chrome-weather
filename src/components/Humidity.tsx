
import {useResult} from '../customHooks'
import {WiHumidity} from 'react-icons/wi'

interface IHumidity {
  name: string
  prefix?: string
}

const Humidity: React.FunctionComponent<IHumidity> = ({name, prefix}) => {
  const result = useResult('humidity', 'h')
  return <div className={name}>
    <WiHumidity title='humidity' />
    <div><b>{result}</b></div>
  </div>
}
export default Humidity