import { combineReducers } from 'redux'

import { base } from './base'
import { temp } from './temp'


const rootReducres = combineReducers({
  base,
  temp
})

export default rootReducres
