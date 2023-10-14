import React from 'react'
import './projects.css'
import Calculator from '../../assets/calculator-app.png'

const Projects = () => {
  return (
    <section id='Projects'>
        <h2 className='projectTitle'>Projects</h2>
        <div className='ProjectsList'>
        <div className='project_one'>
                <img src={Calculator} alt='Calc-Img' className='calculatorImg'/>
                <h3 className='project1Heading'>Calculator App</h3>
                <p>
                   The React Calculator is a versatile and user-friendly web application designed to perform basic
                   mathematical operations with ease and efficiency. Built using the React.js library, this calculator
                   project showcases the power of modern web development and provides users with a seamless calculation
                   experience.
                </p>
        </div>
        </div>
    </section>
  )
}

export default Projects