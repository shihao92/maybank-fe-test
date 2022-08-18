import { combineReducers } from 'redux'

import ResultsReducer from './Results'
import SearchReducer from './Search'

export default combineReducers({
  ResultsReducer,
  SearchReducer
})