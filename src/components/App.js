import React, { Component } from 'react'

import { Match } from "react-router"

import '../styles/index.sass'
import About from './About'
import ActionCall from "./ActionCall"

import JuniorDeveloper from "./JuniorDeveloper"
import Student from "./Student"
import Elsea from "./Elsea"
import Experience from "./Experience"
import OpenSource from "./OpenSource"

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App__Container App__Container--Upper">
          <About />
          <ActionCall />
        </div>

        <div className="App__Container App__Container--Lower">
          <Match pattern="/current"    component={JuniorDeveloper} />
          <Match pattern="/school"     component={Student} />
          <Match pattern="/company"    component={Elsea} />
          <Match pattern="/experience" component={Experience} />
          <Match pattern="/opensource" component={OpenSource} />
        </div>

      </div>
    )
  }
}

export default App;
