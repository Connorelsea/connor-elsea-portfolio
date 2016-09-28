import React, { Component } from 'react'
import WorkItem from "./WorkItem"

const data = [
  {
    company: "Louisiana State University",
    dates: "April 2016 - Present",
    title: "Undergraduate",
    subtitle: "LSU Ogden Honors College, School of Engineering and Computer Science",
    bullets: [
      "Member of the LSU Ogden Honors College",
      "Member of the ACM",
      "Member of the Competitive Programming Team",
      "Member of the LSU Cycling Team"
    ]    
  },
  {
    company: "LSMSA",
    dates: "April 2013 - May 2016",
    title: "High School",
    bullets: [
      "President of LSMSA Computer Science Club",
      "Member of FBLA, BETA, Robotics Team",
      "Head Science and Math Editor of Folio Academic Journal",
      "1st in State, Verizon App Development Challenge Award",
      "1st in State, Nationally Qualifying, FBLA Computer Programming Competition",
      "1st in Region, FBLA Computer Programming Competition",
      "Score of 5/5 on AP CS Exam",
      "Two publications in the Folio Academic Journal"
    ]
  }
]

class Student extends Component {
  render() {
    return (
      <div className="Student">

        {data.map((item, i) => <WorkItem key={i} {...item} />)}

      </div>
    )
  }
}

export default Student
