import React, { Component } from 'react'
import WorkItem from "./WorkItem"

const data = [
  {
    company: "New Aperio",
    dates: "May 2016 - Present",
    title: "Junior Developer",
    tech: ["React", "Redux", "JavaScript/ES6", "CSS/BEM", "Ruby on Rails", "Node.JS", "PostgreSQL"],
    bullets: [
      "Worked on an tight-knit, agile team developing medical software for LOPA, PBRC, and other large companies",
      "Developed complex and performant React components using Redux, JSX, ES6",
      "Used modern HTML 5, SCSS, and BEM to develop a easily-refactorable and easy-to-maintain frontend",
      "Worked with PostgreSQL and Rails ActiveRecord to design and maintain databases",
      "Worked with Ruby 2.3+ and Rails 5 to model data and create an JSON REST API-based backend"
    ]
  }
]

class JuniorDeveloper extends Component {
  render() {
    return (
      <div className="Page">

        <div className="Page__Bubble">
          <h2>Note</h2>
          <p>This is my current and most recent position, but I'm still doing work on the side for freelance and open source. </p>
        </div>

        {data.map((item, i) => <WorkItem key={i} {...item} />)}
      </div>
    )
  }
}

export default JuniorDeveloper
