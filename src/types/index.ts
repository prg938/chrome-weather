
interface IGoogleWeatherParserData {
  temperature: any
  geo: any
  precipitation: any
  humidity: any
  wind: any
  outside: any
  trange: {tm: any, dts: any, p: any, h: any, c: any, ws: any, iu: any}[]
}

interface IGoogleWeatherContext {
  data: IGoogleWeatherParserData | {}
  circleIndex: number
  update: (circleIndex: number) => any
  geo: any
}
 
export type {IGoogleWeatherContext, IGoogleWeatherParserData}