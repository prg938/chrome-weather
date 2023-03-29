import {useResult} from "../customHooks"


interface IOutside {
  name: string
  prefix?: string
}

const Outside: React.FunctionComponent<IOutside> = ({name, prefix}) => {
  let result = useResult('outside', 'c', ' ')
  if (Array.isArray(result)) result = result[0]
  return <div className={name}>
    <div><b>{result}</b></div>
  </div>
}
export default Outside