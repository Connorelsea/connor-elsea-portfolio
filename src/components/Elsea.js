import React, { Component } from 'react'
import WorkItem from "./WorkItem"

class Elsea extends Component {
  render() {
    return (
      <div className="Elsea">
        <WorkItem
          company="Elsea Labs"
          dates="February 2011 - Present"
          title="Founder, CEO, Software Engineer"
        >
          <p>- Founded in January 2011 to work with clients to create business software solutions</p>
          <p>- Provided development and graphic design services to local and regional clients</p>
          <p>- Desktop Development: Java 8, Scala, JVM Technologies, JavaFX</p>
          <p>- Web Development: Node.JS, JavaScript (ES6), React, Redux, Flux, HTML, CSS</p>
        </WorkItem>
      </div>
    )
  }
}

export default Elsea
