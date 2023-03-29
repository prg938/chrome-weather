
export interface IWeatherData {
  temperature: any
  geo: any
  precipitation: any
  humidity: any
  wind: any
  outside: any
  trange: {tm: any, dts: any, p: any, h: any, c: any, ws: any, iu: any}[]
}

export interface IWeatherContext {
  data: IWeatherData | {}
  ci: number
  geo: any
  update: (ci: number) => any
}