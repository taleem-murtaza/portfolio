import React from 'react'
import './ContactMe.css'
import email from '../../../assets/images/email.png';
import github from '../../../assets/images/github.png';
import phone from '../../../assets/images/phone.png';
import { ContactInfoCard } from './ContactInfoCard/ContactInfoCard';
import { ContactForm } from './ContactForm/ContactForm';

export const ContactMe = () => {
  return (
   <section className="contact-container" id='contact'>
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{flex:1}}>
          <div style={{display:'flex', gap:'1.5rem'}}>
          <ContactInfoCard
          iconUrl={phone}
          text="9455055915"
          style={{with:'100%'}}
          />
          <ContactInfoCard
          iconUrl={email}
          style={{with:'100%'}}
          text="taleemmurtaza0786@gmail.com"
          />
          </div>
        
          <ContactInfoCard
          iconUrl={github}
          text="https://github.com/taleem-murtaza"
          />

        </div>
        <div style={{flex:1}}>
          <ContactForm/>
        </div>
      </div>
   </section>
  )
}
