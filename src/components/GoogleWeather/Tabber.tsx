
import {useState} from 'react'
import {attr} from '../../utils'

// <Tabber list={[['CHART', <Chart />]]} />
// <Tabber list={[['DEVELOPER', <div>some text 1</div>], ['INFO', <div>some text 2</div>]]} />
interface TabberInterface {
  list: any[]
}
const Tabber: React.FunctionComponent<TabberInterface> = ({list}) => {
  
  const [tabCurrentId, setTabId] = useState<string>('0')
  
  const containerEvent = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    if (attr(target)('data-tab-text')) setTabId(attr(target.parentElement as HTMLElement)('data-tab') as string)
  }

  const specifyClass = (id: string) => id === tabCurrentId 
    ? 'tabber__tab tabber__tab_current' 
    : 'tabber__tab'

  let content = undefined

  const tabs = list.map((value, index) => {
    const [name, _content] = value
    const indexStringified = String(index)
    if (indexStringified === tabCurrentId) {
      content = _content
    }
    return <div className={specifyClass(indexStringified)} data-tab={indexStringified}>
      <span className="tabber__text" data-tab-text>{name}</span>
    </div>
  })

  return <div className="tabber">
    <div className="tabber__tabs" onClick={containerEvent}>{tabs}</div>
    <div className="tabber__content">{content}</div>
  </div>
} 

export default Tabber