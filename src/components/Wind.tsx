
import {useResult} from '../customHooks'
import {WiStrongWind} from 'react-icons/wi'

interface IWind {
  name: string
  prefix?: string
}

const Wind: React.FunctionComponent<IWind> = ({name, prefix}) => {
  const result = useResult('wind', 'ws')
  return <div className={name}>
    <WiStrongWind title="wind" />
    <div><b>{result}</b></div>
  </div>
}
export default Wind