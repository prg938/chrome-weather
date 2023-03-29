
import {useResult} from "../customHooks"
import {WiCloudDown} from 'react-icons/wi'

interface IPrecipitation {
  name: string
  prefix?: string
}

const Precipitation: React.FunctionComponent<IPrecipitation> = ({name, prefix}) => {
  const result = useResult('precipitation', 'p')
  return <div className={name}>
    <WiCloudDown title="precipitation" />
    <div><b>{result}</b></div>
  </div>
}
export default Precipitation