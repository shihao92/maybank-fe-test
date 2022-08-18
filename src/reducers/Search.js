import { STORE_USER_SEARCHES } from '../actions/types'

let initialState = {
  searches: []
}

const SearchReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case STORE_USER_SEARCHES:
      return ({
        ...state,
        searches: action.payload
      })
    default: return state
  }
}

export default SearchReducer