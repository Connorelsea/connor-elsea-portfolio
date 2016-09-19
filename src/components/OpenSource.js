import React, { Component } from 'react'
import WorkItem from "./WorkItem"

class OpenSource extends Component {
  render() {
    return (
      <div className="OpenSource">
        <WorkItem
          company="JavaScript Air"
          dates="Summer 2016"
          title=""
        >
          <p>- Designed and implemented new branding for JavaScript Air Podcast using React</p>
        </WorkItem>
      </div>
    )
  }
}

export default OpenSource
