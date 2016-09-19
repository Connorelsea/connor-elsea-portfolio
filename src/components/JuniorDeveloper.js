import React, { Component } from 'react'
import WorkItem from "./WorkItem"

class JuniorDeveloper extends Component {
  render() {
    return (
      <div className="JuniorDeveloper">
        <WorkItem
          company="New Aperio"
          dates="May 2016 - Present"
          title="Junior Developer"
        >
          <p>- Worked on an tight-knit, agile team developing medical software for LOPA, PBRC, and other large companies</p>
          <p>- Developed complex and performant React components using Redux, JSX, ES6</p>
          <p>- Used modern HTML 5, SCSS, and BEM to develop a easily-refactorable and easy-to-maintain frontend</p>
          <p>- Worked with PostgreSQL and Rails ActiveRecord to design and maintain databases</p>
          <p>- Worked with Ruby 2.3+ and Rails 5 to model data and create an JSON REST API-based backend</p>
        </WorkItem>
      </div>
    )
  }
}

export default JuniorDeveloper
