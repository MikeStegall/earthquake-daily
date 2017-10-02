import React, { Component } from 'react'
import '../App.css'
import EarthquakeInfo from './Quakeinfo.js'
import EarthquakeList from './Quakelist.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='title'>
          <div className='my-header'>Earthquakes!</div>
          <EarthquakeInfo />
          <EarthquakeList />
        </div>

      </div>
    )
  }
}

export default App
