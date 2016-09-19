import React, { Component } from 'react'

const name = "Work-Item__Header"

class WorkItem extends Component {
  render() {
    return (
      <div className="Work-Item">

        <div className={`${name}`}>

          <div className={`${name}__Item ${name}__Item--Company`}>
            {this.props.company}
          </div>

          <div className={`${name}__Item ${name}__Item--Dates`}>
            {this.props.dates}
          </div>

          <div className={`${name}__Item ${name}__Item--Title`}>
            {this.props.title}
          </div>

        </div>

        {this.props.subtitle ?
          <div className="Work-Item__Subtitle">
            {this.props.subtitle}
          </div> : undefined}

        <div className="Work-Item__Content">
          {this.props.children}
        </div>

      </div>
    )
  }
}

export default WorkItem
