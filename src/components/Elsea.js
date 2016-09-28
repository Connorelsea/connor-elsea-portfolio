import React, { Component } from 'react'
import WorkItem from "./WorkItem"

const data = [
  {
    company: "Elsea Labs",
    dates: "February 2011 - Present",
    title: "Founder, CEO, Softare Developer",
    tech: ["React", "Redux", "JavaScript/ES6", "CSS/BEM", "Node.JS", "MySQL"],
    bullets: [
      "Founded in January 2011 to work with clients to create business software solutions",
      "Provided development and graphic design services to local and regional clients",
      "Desktop Development: Java 8, Scala, JVM Technologies, JavaFX",
      "Web Development: Node.JS, JavaScript (ES6), React, Redux, Flux, HTML, CSS",
    ]
  }
]

class Elsea extends Component {
  render() {
    return (
      <div className="Elsea">
        {data.map((item, i) => <WorkItem key={i} {...item} />)}
      </div>
    )
  }
}

export default Elsea
