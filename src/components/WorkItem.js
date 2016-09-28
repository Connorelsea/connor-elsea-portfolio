import React, { Component } from 'react'
import { Match } from "react-router"

const name = "Work-Item__Header"
const child = "Work-Item__Tech__Child"

function generateTechName(tech) {
  switch (tech) {
    case "React":
    case "Redux":
      return tech
    case "Unity":
      return "Redux"
    case "MySQL":
    case "PostgreSQL":
    case "Wordpress":
    case "PHP":
      return "SQL"
    case "JavaScript/ES6":
    case "C#":
    case "Yii":
      return "JavaScript"
    case "Ruby on Rails":
      return "Ruby"
    case "Node.JS":
      return "Node"
    case "CSS/BEM":
      return "CSS"
  }
}

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

        <Match pattern="tech" render={() => (

          <div className="Work-Item__Tech">
            {this.props.tech 
              
              ? this.props.tech.map((item, i) =>
                <div
                  key={i}
                  className={`${child} ${child}--${generateTechName(item)}`}
                > {item} </div> )

              : <div className={child}>No Tech Listed</div>
            }
          </div>

        )} />

        {this.props.subtitle ?
          <div className="Work-Item__Subtitle">
            {this.props.subtitle}
          </div> : undefined}

        <div className="Work-Item__Content">
          {this.props.bullets.map((bullet, i) => <p key={i}>{`- ${bullet}`}</p>)}
        </div>

      </div>
    )
  }
}

export default WorkItem
