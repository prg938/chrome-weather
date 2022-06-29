
interface IChartProps {
  settings?: {[key: string]: any}
  gwc: IGoogleWeatherContext
}

interface IGoogleWeatherParserData {
  temperature: any
  geo: any
  precipitation: any
  humidity: any
  wind: any
  outside: any
  trange: {tm: any, dts: any, p: any, h: any, c: any, ws: any}[]
}

interface IGoogleWeatherContext {
  data: IGoogleWeatherParserData | {}
}

interface IInitialClickState {
  left: number,
  pgx: number
}

export type {IGoogleWeatherContext, IGoogleWeatherParserData, IChartProps, IInitialClickState}