import React from 'react'
import CourseCard from '../components/CourseCard'

const Courses = () => {
  return (
    <div className="container mt-5">
        <p className="display-5 text-center" style={{fontFamily:"Poppins",fontWeight:"700"}}>
            Our Courses
        </p>
        <p className="fs-4 text-secondary text-center" style={{fontFamily:"Poppins"}}>
            Start your career on the right foot by getting skilled and become job-ready!
        </p>

        <div className="col-11 text-center">
            <div className="btn-group">
                <button className="btn btn-dark btn-sm" style={{fontFamily:"Poppins"}}>Ongoing</button>
                <button className="btn btn-outline-dark btn-sm" style={{fontFamily:"Poppins"}}>Upcoming</button>
            </div>
        </div>
        <div className="course-card mt-5">
            <div className="d-flex flex-wrap gap-5 justify-content-center" >
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </div>
        </div>
    </div>
  )
}

export default Courses