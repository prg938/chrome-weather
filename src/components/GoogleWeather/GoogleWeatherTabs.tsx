
import {useState} from 'react'
import {attr} from '../../utils'
import Chart from './Chart'

const GoogleWeatherTabs: React.FunctionComponent = () => {

  const [tab1, tab2, tab3, classTabCurrent, classTab, contentTabCurrent] = ['1', '2', '3', 'tab current', 'tab', 'tab-content current']
  const [tabCurrentId, setTabId] = useState<string>(tab1)
  const className = (id: string) => id === tabCurrentId ? classTabCurrent : classTab

  let tabContent
  if (tabCurrentId === tab1) tabContent = <div className={contentTabCurrent}><Chart /></div>
  if (tabCurrentId === tab2) tabContent = <div className={contentTabCurrent}>some text 1</div>
  if (tabCurrentId === tab3) tabContent = <div className={contentTabCurrent}>some text 2</div>

  const containerEvent = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    if (attr(target)('data-tab-text')) setTabId(attr(target.parentElement as HTMLElement)('data-tab') as string)
  }

  return <>
    <div className="tab-container" onClick={containerEvent}>
      <div className={className(tab1)} data-tab={tab1}>
        <span className="tab-text" data-tab-text>CHART</span>
      </div>
      <span className="tab-line"></span>
      <div className={className(tab2)} data-tab={tab2}>
        <span className="tab-text" data-tab-text>DEVELOPER</span>
      </div>
      <span className="tab-line"></span>
      <div className={className(tab3)} data-tab={tab3}>
        <span className="tab-text" data-tab-text>INFO</span>
      </div>
    </div>
    <div className="tabs-content">{tabContent}</div>
  </>
}

export default GoogleWeatherTabs