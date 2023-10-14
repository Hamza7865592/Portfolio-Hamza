
import React, { useRef } from 'react'
import './contact.css'
import FacebookIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
    emailjs.sendForm('service_fr8vnol', 'template_xf1qrt9', form.current, 'xJRCOrpsEyyPllVdY')
        .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!')
        }, (error) => {
              console.log(error.text);
        });
    };
    

  return (
    <section id='contactPage'>
        <div className='contactMe'>
            <h1 className='contactTitle'>Contact Me</h1>
            <span className='contactDesc'>Please Fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>

                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
            
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
            
                <textarea name='message' rows={5} className='msg' placeholder='Write your Message'/>
            
                <button type='submit' value='Send' className='sendButton' >Submit</button>
            
                        <div className='images'>
            
                <img src={FacebookIcon} alt='Facebook' className='links'/>
            
                <img src={InstagramIcon} alt='Instagram' className='links'/>
            
            </div>
            </form>

        </div>

    </section>
  );
}

export default Contact
