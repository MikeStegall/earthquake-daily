import React, { Component } from 'react'
import moment from 'moment'
import earthquakes from '../data/quakeinfo.js'

class EarthquakeList extends Component {
  render () {
    const earthquakeInfo = earthquakes.features.map(earthQuakeData => {
      return (
        <div className='col-sm-6' key={earthQuakeData.id}>
          <div className='card' >
            <div className='card-block'>
              <h4 className='card-title'>{earthQuakeData.properties.place}</h4>
              <h6 className='card-subtitle mb-2 text-muted'>Magnitude: {earthQuakeData.properties.rmag}</h6>
              <h6 className='card-subtitle mb-2 text-muted'>Time: {moment(earthQuakeData.time).format('llll')}</h6>
              <p className='card-text'>Coordinates: {earthQuakeData.geometry.coordinates}</p>

              <a href={earthQuakeData.properties.url} className='card-link'>USGS Event Link</a>

            </div>
          </div>
        </div>
      )
    }
)
    return (
      <div className='quake-list'>
        <div className='row'>
          {earthquakeInfo}
        </div>
      </div>
    )
  }
}
export default EarthquakeList
