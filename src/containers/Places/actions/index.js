import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Get } from 'utils/axios'

const HOC = ( WrappedComponent ) => {
  class WithHOC extends Component {
    state = {
      loading: false,
      places: []
    }

    // getting data from own nodejs BE server which link to the rapidAPI - google Map API
    // doing this way to protect the key from being used by someone else 
    getPlaces = ( search ) => Get(
      `/places/${ search }`,
      payload => this.setState({ places: payload }),
      error => {},
      payload => this.setState({ loading: payload })
    )

    render = () => {
      return (
        <WrappedComponent
          { ...this.props }
          onLoadPlaces={ this.state.loading }
          places={ this.state.places }
          getPlaces={ this.getPlaces } />
      )
    }
  }
  const mapStateToProps = state => ({ data: state })
  return connect( mapStateToProps )( WithHOC )
}

export default HOC