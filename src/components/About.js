import React, { Component } from 'react'
import { Link } from 'react-router'

const Highlight = ({ route, content, color }) =>
  <Link
    className={`About__Content__Link About__Content__Link--${color}`}
    to={route}
  >
    {content}
  </Link>

class About extends Component {
  render() {
    return (
      <div className="About">

        <div className="About__Header">
          <span className="bold">Hey, </span>
          <span className="italic">I'm Connor.</span>
        </div>

        <div className="About__Content">
          <span>I'm currently a </span>
          <Highlight route="/current" content="Junior Developer" color="Blue" />
          <span> at New Aperio, a </span>
          <Highlight route="/school" content="student" color="Light-Blue" />
          <span> at LSU </span>
          <span> majoring in </span>
          <span>Computer Science,</span>
          <span> and the </span>
          <Highlight route="/company" content="founder" color="Blue" />
          <span> of Elsea Labs.</span>
          <span> I have other</span>
          <span>past </span>
          <Highlight route="/experience" content="work experience" color="Light-Blue" />
          <span> and </span>
          <Highlight route="/opensource" content="open source" color="Blue" />
          <span> experience</span>
        </div>

      </div>
    )
  }
}

export default About
