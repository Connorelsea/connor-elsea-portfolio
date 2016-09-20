import React, { Component } from 'react'
import WorkItem from "./WorkItem"

class OpenSource extends Component {
  render() {
    return (
      <div className="Open-Source">

        <p>
          This online resume is made with React and React Router v4. Check it, and my other projects, out on <a href="https://github.com/Connorelsea/connor-elsea-portfolio">Github!</a>
        </p>

        <WorkItem
          company="JavaScript Air"
          dates="Summer 2016"
          title=""
        >
          <div className="Work-Item__Content__Github">View on <a href="https://github.com/javascriptair/site">Github!</a></div>
          <p>Designed and implemented new branding for JavaScript Air Podcast using React</p>
        </WorkItem>

        <WorkItem
          company="Board"
          dates="Summer 2016"
          title=""
        >
          <div className="Work-Item__Content__Github">View on <a href="https://github.com/Connorelsea/lsmsa-board-backend">Github!</a></div>
          <p>- Created student tracking and sign out system for local boarding school system</p>
          <p>- Offline-capable web application using ES6, React, Redux, MySQL, Node 6.x+, Babel, Webpack, etc.</p>
          <p>- Custom REST API utilities built alongside Knex and Bookshelf ORM to allow for rapid iteration on Node REST APIs</p>
        </WorkItem>

        <WorkItem
          company="LSMSA SGO"
          dates="Summer 2015"
          title=""
        >
          <div className="Work-Item__Content__Github">View on <a href="https://github.com/Connorelsea/LSMSA-SGO-Website">Github!</a></div>
          <p>Created a interactive student government voting platform for my school, with cafeteria ratings, legislation discussion. All at the request of the administration</p>
        </WorkItem>

        <p>
          These are only my most recent projects. There are many more on my <a href="https://github.com/Connorelsea/connor-elsea-portfolio">Github!</a>
        </p>
      </div>
    )
  }
}

export default OpenSource
