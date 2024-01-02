"use client"

import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Contact.css';

const Footer = () => {
    return (
    <>
    <h2 className="head-text dark:text-white">Take a <span className='dark:text-yellow-bg'>coffee & chat</span> with me</h2>

    <div className="app__footer-cards">
      <div className="app__footer-card bg-pink-500 dark:bg-light-dark-bg">
        <img src={'/email.png'} alt="email" />
        <a href="mailto:ahtasham1802@gmail.com" className="p-text text-black">ahtasham1802@gmail.com</a>
      </div>
      {/* <div className="app__footer-card">
        <img src={'mobile.png'} alt="phone" />
        <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
      </div> */}
    </div>
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text bg-primary-color dark:bg-light-dark-bg" type="text" placeholder="Your Name" name="username"/>
        </div>
        <div className="app__flex">
          <input className="p-text bg-primary-color dark:bg-light-dark-bg" type="email" placeholder="Your Email" name="email"/>
        </div>
        <div className='app__flex bg-light-dark-bg'>
          <textarea
            className="p-text bg-primary-color dark:bg-light-dark-bg"
            placeholder="Your Message"
            name="message"
          />
        </div>
        <button type="button" className="p-text">Send Message</button>
      </div>
      {/* <div>
        <h3 className="head-text">
          Thank you for getting in touch!
        </h3> */}
      {/* </div> */}
    
  </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);