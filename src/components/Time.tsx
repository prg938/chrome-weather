
import {useResult} from "../customHooks"
import {WiTime3} from  'react-icons/wi'

interface ITime {
  name: string
}

const prefix = (time: number) => String(time).length === 1 ? '0' + time : time

const Time: React.FunctionComponent<ITime> = ({name}) => {
  let result = useResult('dts', 'dts')
  const date = new Date()
  const dtsFallback = prefix(date.getHours()) + ':' + prefix(date.getMinutes())
  if (result === null) result = dtsFallback
  return <div className={name}>
    <WiTime3 title="time" />
    <div><b>{result}</b></div>
</div>
}

export default Time