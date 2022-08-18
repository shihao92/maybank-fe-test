import Axios from 'axios'

import { API_URL, TOKEN_HEADER_AUTH } from './constants'

export const Get = ( url, res, error, load ) => {
  load( true )
  Axios.get(
    `${ API_URL }${ url }`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': TOKEN_HEADER_AUTH
      }
    }
  ).then( resp => {
    res( resp.data )
    load( false )
  }).catch( err => {
    if( err && err.response && err.response.status ) {
      if( err.response.data.message ){
        error( err.response.data.message )
      }
      if( err.response.data.Error ) {
        error( err.response.data.Error )
      }
    } else if( err && err.message ) {
      error( err.message )
    } else {
      error( 'You are disconnnected from the internet, please reconnect to use Junomax Search. If problem persists, please contact the system admin.' )
    }
    load( false )
  })
}