import React, { Component } from 'react'
import WorkItem from "./WorkItem"

class Student extends Component {
  render() {
    return (
      <div className="Student">

        <WorkItem
          company="Louisiana State University"
          dates="April 2016 - Present"
          title="Undergraduate"
          subtitle="LSU Ogden Honors College, School of Engineering and Computer Science"
        >
          <p>- Member of ACM, LSU Competitive Programming, LSU Cycling Team</p>
        </WorkItem>

        <WorkItem
          company="LSMSA"
          dates="April 2013 - May 2016"
          title="Highschool"
          subtitle="LSU Ogden Honors College, School of Engineering and Computer Science"
        >
          <p>- President of LSMSA Computer Science Club</p>
          <p>- Member of FBLA, BETA, Robotics Team</p>
          <p>- Head Science and Math Editor of Folio Academic Journal</p>
          <p>- 1st in State, Verizon App Development Challenge Award</p>
          <p>- 1st in State, Nationally Qualifying, FBLA Computer Programming Competition</p>
          <p>- 1st in Region, FBLA Computer Programming Competition</p>
          <p>- Score of 5/5 on AP CS Exam</p>
          <p>- Two publications in the Folio Academic Journal</p>
        </WorkItem>

      </div>
    )
  }
}

export default Student
