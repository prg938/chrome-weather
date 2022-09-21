
import React from 'react'
import {IChartProps, IGoogleWeatherParserData, IInitialClickState} from '../../types'
import {GoogleWeatherContext} from './Contexts'
import {style, selector, className, es, px, computed} from '../../utils'
import settings from '../../settings'

interface ICoordinates {
  x: number
  xNext: number
  y: number
  yNext: number
  textX: number
  textY: number
  p1x: number
  p1y: number
  p2x: number
  p2y: number
  p3x: number
  p3y: number
  p4x: number
  p4y: number
}

class Chart extends React.Component<IChartProps> {

  constructor(props: IChartProps) {
    super(props)
    this.circleEvent = this.circleEvent.bind(this)
    this.viewboxEvent = this.viewboxEvent.bind(this)
  }

  initialClickState: React.MutableRefObject<IInitialClickState | null | undefined> = React.createRef()
  viewboxRef = React.createRef<HTMLDivElement>()
  chartRef = React.createRef<SVGSVGElement>()
  W = settings.chartW  
  H = settings.chartH
  mW = settings.windowW
  mH = settings.chartMinifiedH
  animation = {frameId: 0, duration: 1000, fn: (t: number) => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t}
  fetchedData = false
  
  coordinates = {
    large: [] as ICoordinates[][],
    minified: [] as ICoordinates[][]
  }

  state = {
    coordinates: {
      large: [] as ICoordinates[],
      minified: [] as ICoordinates[]
    }
  }

  styles = {
    dasharrayLine: {style: {stroke: 'black', strokeWidth: 1, strokeDasharray: '3', opacity: 0}, prefix: '__dasharray-'},
    tooltip: {class: 'chart-container__tooltip', prefix: '__tooltip'},
    line: {style: {stroke: '#FFCC00', strokeWidth: 3}},
    lineMinified: {style: {stroke: '#FFCC00', strokeWidth: 1}},
    circle: {r: 6, style: {fill: '#FFCC00', cursor: 'pointer'}},
    text: {style: {fill: '#b3b3b3', font: 'bold 14px "Roboto"'}},
    polygon: {style: {fill: '#4D431D', strokeWidth: 1, stroke: '#4D431D'}},
    viewbox: {class: 'chartminified-container__viewbox'},
    grabbing: {class: 'grabbing'}
  }

  diff(min: number, max: number) {
    const {abs, sign} = Math
    return sign(min) === sign(max) ? abs(abs(min) - abs(max)) : abs(min - max)
  }

  minmax(numbers: number[]) {
    let min, max
    min = max = numbers[0]
    if (min === undefined || numbers.length === 1) return []
    for (let i = 1; i < numbers.length; i++) {
      const n = numbers[i]
      if (n < min) min = n
      if (n > max) max = n
    }
    return [min, max]
  }

  cx(i: number, W: number, L: number) {
    const dx = W / L
    return i * dx
  }

  cy(y: number, ymin: number, ymax: number, H: number) {
    const dy = H / (this.diff(ymin, ymax) || Infinity)
    return dy * this.diff(ymin, y)
  }

  generateCoordinates(temperatureList: number[], W: number, H: number): ICoordinates[] {
    const L = settings.chartDotLimit - 1
    const isEmpty = temperatureList.length === 0
    const [ymin, ymax] = this.minmax(temperatureList)
    const [circleR, circleD] = [this.styles.circle.r, this.styles.circle.r * 2]
    const coordinates = []
    H = H - circleD
    for (let i = 0; i < L; i++) {
      const x = this.cx(i, W, L)
      const xNext = this.cx(i + 1, W, L)
      const textX = x - 12
      const textY = H - 4
      let y, yNext
      if (isEmpty) {
        y = yNext = H
      }
      else {
        y = H - this.cy(temperatureList[i], ymin, ymax, H) + circleR
        yNext = H - this.cy(temperatureList[i + 1], ymin, ymax, H) + circleR
      }
      const [p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y] = [x, y, x, H + circleD, xNext, H + circleD, xNext, yNext]
      coordinates[coordinates.length] = {x, y, xNext, yNext, textX, textY, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y}
    }
    return coordinates
  }
  
  generateChartElements(coordinates: ICoordinates[], minified: boolean) {
    const {gwc: {data}} = this.props
    const containsTrange = 'trange' in data
    const {dasharrayLine, line, lineMinified, circle, text, polygon} = this.styles
    const [circles, lines, texts, polygons, dasharrayLines]: any = [[], [], [], [], [], []]
    for (let i = 0; i < coordinates.length; i++) {
      const {x, xNext, y, yNext, textX, textY, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y} = coordinates[i]
      const notMinifiedAndGreaterZero = !minified && i > 0
      const tm = containsTrange ? data.trange[i].tm : 0
      polygons.push(<polygon style={polygon.style} points={`${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y} ${p4x},${p4y}`} />)
      lines.push(<line style={minified ? lineMinified.style : line.style} x1={x} y1={y} x2={xNext} y2={yNext} />)
      if (notMinifiedAndGreaterZero) {
        dasharrayLines.push(<line style={dasharrayLine.style} x1={x} y1={y} x2={x} y2={this.H} id={`${dasharrayLine.prefix}${i}`} />)
        circles.push(<circle style={circle.style} cx={x} cy={y} r={circle.r} data-index={i} onMouseOver={this.circleEvent} onMouseOut={this.circleEvent} onClick={this.circleEvent} />)
        texts.push(<text style={text.style} x={x - 5} y={y < 25 ? y + 25 : y - 15}>{tm}{'°'}</text>)
      }
    }
    return {circles, lines, texts, polygons, dasharrayLines}
  }

  viewboxEvent(event: any) {
    const [MOUSEUP, MOUSEDOWN, MOUSEMOVE] = ['mouseup', 'mousedown', 'mousemove'] as const
    const {viewbox, grabbing} = this.styles
    const {W, mW} = this
    const viewboxGrabbing = `${viewbox.class} ${grabbing.class}`
    const eventType = event.type
    const body = document.body
    const viewboxElement = this.viewboxRef.current as HTMLDivElement
    const chartRef = this.chartRef.current as SVGSVGElement
    event.preventDefault()
    event.stopPropagation()
    switch (eventType) {
      case MOUSEUP:
        className(viewboxElement, viewbox.class)
        className(body, es)
        body.removeEventListener(MOUSEUP, this.viewboxEvent)
        body.removeEventListener(MOUSEMOVE, this.viewboxEvent)
        this.initialClickState.current = undefined
        break
      case MOUSEDOWN:
        className(viewboxElement, viewboxGrabbing)
        className(body, grabbing.class)
        body.addEventListener(MOUSEUP, this.viewboxEvent)
        body.addEventListener(MOUSEMOVE, this.viewboxEvent)
        this.initialClickState.current = {pgx: event.pageX, left: computed(viewboxElement, 'left')}
        break
      case MOUSEMOVE:
        const {pgx, left} = this.initialClickState.current as IInitialClickState
        const {offsetWidth} = viewboxElement
        const cpgx = event.pageX
        const currentLeft = left + (cpgx - pgx)
        const viewboxElementL = currentLeft
        const viewboxElementR = currentLeft + offsetWidth
        let computedLeft, computedTranslateX
        if (viewboxElementR > mW) computedLeft = mW - offsetWidth
        else if (viewboxElementL < 0) computedLeft = 0
        else computedLeft = currentLeft
        computedTranslateX = -computedLeft * ((W - mW) / (mW - (mW * (mW / W))))
        style(viewboxElement, {left: px(computedLeft)})
        style(chartRef, {transform: `translate(${computedTranslateX}px, 0)`})
        break
    }
  }

  circleEvent(event: React.MouseEvent<SVGCircleElement>) {
    const [MOUSEOVER, MOUSEOUT, CLICK] = ['mouseover', 'mouseout', 'click']
    const {gwc: {data}} = this.props
    const {dasharrayLine, tooltip} = this.styles
    const eventType = event.type
    const circleElement = event.currentTarget
    const circleIndex = Number(circleElement.dataset.index)
    const [dasharrayElement, tooltipElement] = [selector(`${dasharrayLine.prefix}${circleIndex}`) as HTMLElement, selector(tooltip.prefix) as HTMLElement]
    if (eventType === MOUSEOVER) {
      const {dts, tm, p, h, ws, c} = (data as IGoogleWeatherParserData).trange[circleIndex]
      tooltipElement.innerText = dts
      const tw = tooltipElement.offsetWidth
      const th = tooltipElement.offsetHeight
      const cx = Number(circleElement.getAttribute('cx'))
      const cy = Number(circleElement.getAttribute('cy'))
      style(dasharrayElement, {opacity: 1})
      style(tooltipElement, {opacity: 1, visibility: 'visible', left: px(cx - tw / 2), top: px(cy - th - 10)})
    }
    else if (eventType === MOUSEOUT) {
      style(dasharrayElement, {opacity: 0})
      style(tooltipElement, {opacity: 0, visibility: 'hidden'})
    }
    else if (eventType === CLICK) {
      console.log((data as IGoogleWeatherParserData) )
    }
  }

  render() {
    const {gwc: {data}} = this.props
    const containsData = 'trange' in data
    const {tooltip, viewbox} = this.styles
    const {W, H, mW, mH} = this
    const chartContainerStyle = {width: px(mW)}
    const chartminifiedContainerStyle = {width: px(mW), height: px(mH)}
    const viewboxStyle = {width: px(mW * (mW / W))}
    const SVGNS = 'http://www.w3.org/2000/svg'
    
    const chartWrapper = ({circles, lines, texts, polygons, dasharrayLines, polygonsMinified, linesMinified}: any) => <div>
      <div className="chart-container" style={chartContainerStyle}>
        <svg width={W} height={H} xmlns={SVGNS} ref={this.chartRef}>
          <g>{polygons}{lines}{dasharrayLines}{circles}{texts}</g>
        </svg>
        <div className={tooltip.class} id={tooltip.prefix}></div>
      </div>
      <div className="chartminified-container" style={chartminifiedContainerStyle}>
        <svg width={mW} height={mH} xmlns={SVGNS}>
          <g>{polygonsMinified}{linesMinified}</g>
        </svg>
        <div className={viewbox.class} style={viewboxStyle} onMouseDown={this.viewboxEvent} onMouseUp={this.viewboxEvent} ref={this.viewboxRef}></div>
      </div>
    </div>

    if (containsData === false) {
      const {large, minified} = this.coordinates
      large.push(this.generateCoordinates([], W, H))
      minified.push(this.generateCoordinates([], mW, mH))
      const {circles, lines, texts, polygons, dasharrayLines} = this.generateChartElements(large[0], false)
      const {polygons: polygonsMinified, lines: linesMinified} = this.generateChartElements(minified[0], true)
      return chartWrapper({circles, lines, texts, polygons, dasharrayLines, polygonsMinified, linesMinified})
    }
    else if (!this.fetchedData) {
      const tlist = (data as IGoogleWeatherParserData).trange.map(object => +object.tm).slice(0, settings.chartDotLimit)
      const {large, minified} = this.coordinates
      large.push(this.generateCoordinates(tlist, W, H))
      minified.push(this.generateCoordinates(tlist, mW, mH))
      const {circles, lines, texts, polygons, dasharrayLines} = this.generateChartElements(large[0], false)
      const {polygons: polygonsMinified, lines: linesMinified} = this.generateChartElements(minified[0], true)
      return chartWrapper({circles, lines, texts, polygons, dasharrayLines, polygonsMinified, linesMinified})
    }
    else {
      const {large, minified} = this.state.coordinates
      const {circles, lines, texts, polygons, dasharrayLines} = this.generateChartElements(large, false)
      const {polygons: polygonsMinified, lines: linesMinified} = this.generateChartElements(minified, true)
      return chartWrapper({circles, lines, texts, polygons, dasharrayLines, polygonsMinified, linesMinified})
    }
  }

  componentDidUpdate() {
    // launch animation once
    if (!this.fetchedData) {
      this.fetchedData = true
      const initialTime = Date.now()
      const {duration, fn} = this.animation
      const {large, minified} = this.coordinates
      const initialLargeCoordinates = large[0]
      const initialMinifiedCoordinates = minified[0]
      const endLargeCoordinates = large[1]
      const endMinifiedCoordinates = minified[1]
      const compute = (initialCoordinates: ICoordinates[], endCoordinates: ICoordinates[], dx: number): ICoordinates[] => {
        const coordinates = []
        for (let i = 0; i < initialCoordinates.length; i++) {
          const {x, xNext, textX, textY, p1x, p2x, p3x, p4x, p2y, p3y, y: y1, yNext: yNext1, p1y: p1y1, p4y: p4y1} = initialCoordinates[i]
          const {y: y2, yNext: yNext2, p1y: p1y2, p4y: p4y2} = endCoordinates[i]
          const y = y1 + dx * (y2 - y1)
          const yNext = yNext1 + dx * (yNext2 - yNext1)
          const p1y = p1y1 + dx * (p1y2 - p1y1)
          const p4y = p4y1 + dx * (p4y2 - p4y1)
          coordinates.push({x, y, xNext, yNext, textX, textY, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y})
        }
        return coordinates
      }
      const animate = () => {
        const currentTime = Date.now()
        let animationComplete = false
        let dx = (currentTime - initialTime) / duration
        if (dx >= 1) {
          dx = 1
          animationComplete = true
        }
        const newState = {coordinates: {large: [], minified: []}} as typeof this.state
        newState.coordinates.large = compute(initialLargeCoordinates, endLargeCoordinates, fn(dx))
        newState.coordinates.minified = compute(initialMinifiedCoordinates, endMinifiedCoordinates, fn(dx))
        
        this.setState(state => newState)
        if (!animationComplete) this.animation.frameId = requestAnimationFrame(animate)
      }
      animate()
    }
  }

}

const component = (props: any) => <GoogleWeatherContext.Consumer>{gwc => <Chart {...props} gwc={gwc} />}</GoogleWeatherContext.Consumer>
export default component