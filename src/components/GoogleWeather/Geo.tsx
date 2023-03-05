
/*
import {useContext} from 'react'
import {GoogleWeatherContext} from './Contexts'
import {IGoogleWeatherParserData} from '../../types'
import Loading from './Loading'
*/

interface IGeo {
  name: string
  prefix?: string
}

const Geo: React.FunctionComponent<IGeo> = ({name, prefix}) => {
  /*
  const gwc = useContext(GoogleWeatherContext)
  const data = gwc.data as IGoogleWeatherParserData
  const result = data.geo || <Loading text='...' />
  
  return <div className={name}>
    <div>{name.toUpperCase()}</div>
    <div><b>{result}</b></div>
  </div>*/
  return <></>
}
export default Geo