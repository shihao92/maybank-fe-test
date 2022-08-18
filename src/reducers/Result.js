import { STORE_RESULTS } from '../actions/types'

let initialState = {
  results: []
}

const ResultReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case STORE_RESULTS:
      return ({
        ...state,
        results: action.payload
      })
    default: return state
  }
}

export default ResultReducer