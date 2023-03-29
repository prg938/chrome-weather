
import React from 'react'
import {IWeatherContext} from '../types'

export const WeatherContext = React.createContext<IWeatherContext>({
  data: {},
  ci: 0,
  geo: null,
  update: () => {}
}) 