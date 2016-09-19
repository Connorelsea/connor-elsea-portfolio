import React, { Component } from 'react'
import WorkItem from "./WorkItem"

class Experience extends Component {
  render() {
    return (
      <div className="Experience">

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

        <WorkItem
          company="Teknarus"
          dates="May 2015 - April 2015"
          title="Software Developer, Intern"
        >
          <p>- Web development using C#, Ruby, Ruby on Rails, PHP, Wordpress, ASP.net</p>
          <p>- Service desk assistant, helping customers and clients with network solutions</p>
        </WorkItem>

        <WorkItem
          company="Pixel Dash"
          dates="May 2015 - June 2015"
          title="Game Developer, Intern"
        >
          <p>- Worked with artists and engineers using Unity, C#, and various Adobe design products</p>
        </WorkItem>

        <WorkItem
          company="Shopper's Choice"
          dates="May 2014 - June 2014"
          title="Web Developer, Intern"
        >
          <p>- Worked on backend team using PHP, Yii, MySQL</p>
          <p>- Worked on frontend team using PHP, HTML, CSS/Sass, JavaScript, JQuery</p>
          <p>- Helped deploy new content and fix existing bugs on an e-commerce platform serving tens of thousands of users every day</p>
        </WorkItem>

        <WorkItem
          company="Reputation Capital Media"
          dates="May 2014 - April 2014"
          title="Writer & Designer, Intern"
        >
        <p>- Worked to ghost write material for business blogs and company documents</p>
        <p>- Used Adobe design products, HTML, CSS, and JavaScript to create web solutions for local clients</p>
        </WorkItem>

      </div>
    )
  }
}

export default Experience
