
import React from 'react'
import {IGoogleWeatherContext} from '../../types'

export const GoogleWeatherContext = React.createContext<IGoogleWeatherContext>({
  data: {},
  circleIndex: 0,
  update: () => {},
  geo: null
}) 