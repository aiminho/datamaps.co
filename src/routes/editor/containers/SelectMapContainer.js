import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { setMapType } from 'redux/actions'

class SelectMapContainer extends Component {
  handleMapSelect(e, mapType) {
    e.preventDefault()
    const { dispatch } = this.props

    if (this.props.mapType !== mapType) {
      dispatch(setMapType(mapType))
    }

    dispatch(push(`/editor/${mapType}`))
  }

  render() {
    return (
      <div>
        <h1>SelectMapContainer</h1>

        <a href="#" className="button" onClick={(e) => this.handleMapSelect(e, 'usa')}>USA</a>
        <a href="#" className="button" onClick={(e) => this.handleMapSelect(e, 'world')}>WORLD</a>
      </div>
    )
  }
}

SelectMapContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mapType: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    mapType: state.mapType,
  }
}

export default connect(mapStateToProps)(SelectMapContainer)
