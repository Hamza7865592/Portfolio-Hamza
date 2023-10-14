import React from 'react';
import './intro.css';
import {Link} from 'react-scroll'
import Himg from '../../assets/hireme.png'
const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='Hello'>Hello,</span>
        <span className='introText'><h2>I am, <span className='introName'>Hamza</span></h2></span>
        <span><h2>a Web Developer</h2></span>
        <p className='introPara'>I am a skilled Web Developer with experience in creating <br/>visually appealing and user frindly Websites </p>
        
        <Link><button className='hireMe'><img src={Himg} alt='Hire Me' className='Himg'/>Hire Me</button></Link>
      </div>
    
      
    
    </section>
  )
}

export default Intro
