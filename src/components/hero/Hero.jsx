import React from 'react'
import './Hero.css'
import ReactIcon from '../../../assets/images/icons8-php-64.png'
// import MeImg from '../../../assets/images/me.jpeg'
import html from '../../../assets/images/html-5-48.png'
import css from '../../../assets/images/css3-48.png'
import wordpress from '../../../assets/images/wordpress-96.png'
import mongodb from '../../../assets/images/icons8-bootstrap-48.png'
import mySql from '../../../assets/images/icons8-mysql-48.png'
import javaScript from '../../../assets/images/javascript.png'
import anushka from '../../../assets/images/Zaman.jpg'

function Hero() {
  return (
    <section className="hero-container" id='home'>
        <div className="hero-content">
            <h2>Building Digital Experience That Inspire</h2>
            <p>Passionate Frontend Developer | Transforming Ideas into Seamless 
                and Visually Stunning Web Solutions
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src={ReactIcon} />
                </div>
                <img src={anushka} className='rounded'/>
            </div>
            <div>
                <div className="tech-icon">
                    <img src={html} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={css} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={javaScript} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={wordpress} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={mySql} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={mongodb} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero