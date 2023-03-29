
import {attr} from '../utils'
import {useState, memo} from 'react'

interface ITabber {
  list: any[]
  pure?: boolean
}

// <Tabber list={[['A', <div></div>], ['B', <div></div>]]} />
const Tabber: React.FunctionComponent<ITabber> = memo(({list}) => {
  
  const [currentId, setId] = useState<string>('0')
  
  const specifyClass = (id: string) => id === currentId ? 'tabber__tab tabber__tab_current' : 'tabber__tab'

  const findDataTabId = (target: HTMLElement): string => {
    if (target) {
      const dataTab = attr(target)('data-tab')
      return dataTab ? dataTab : findDataTabId(target.parentElement as HTMLElement)
    }
    else return '0'
  }
  
  const containerEvent = (event: React.MouseEvent<HTMLElement>) => setId(findDataTabId(event.target as any))

  let content = undefined

  const tabs = list.map((value, index) => {
    const [name, _content] = value
    const indexStringified = String(index)
    if (indexStringified === currentId) {
      content = _content
    }
    return <div className={specifyClass(indexStringified)} data-tab={indexStringified} key={indexStringified}>
      <div className="tabber__text" data-tab-text>{name}</div>
    </div>
  })

  return <div className="tabber">
    <div className="tabber__tabs" onClick={containerEvent}>{tabs}</div>
    <div className="tabber__content">{content}</div>
  </div>
})

export default Tabber