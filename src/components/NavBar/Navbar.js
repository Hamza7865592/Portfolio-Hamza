import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'
function Navbar() {
  return (
    <nav className='Navbar'>
       <div className='Name'>
        M.Hamza Rehman
       </div>
       <div className='Menu'>
       <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={600} className='MenuListItems'>Home</Link>
       <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={600} className='MenuListItems'>About</Link>
       <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-50} duration={600} className='MenuListItems'>Projects</Link>
       <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={600} className='MenuListItems'>Contact Me</Link>    
       </div> 
       <button className='MenuButton'>
           <img src={contactImg} alt='contact' className='MenuImg' onClick={()=>{document.getElementById('contactPage').scrollIntoView({behavior:'smooth'})}}/>Contact Me
       </button>
    </nav>
   
  )
}

export default Navbar
