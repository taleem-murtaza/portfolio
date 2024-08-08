import React from 'react'
import './ContactForm.css'
export const ContactForm = () => {
  return (
    <div className="contact-form-content">
        <form action="">
            <div className="name-container">
                <input type="text" name="firstname" placeholder='firstname' />
                <input type="text" name="lastname" placeholder='lastname'  />
            </div>
            <input type="email" name="email" placeholder='email' />
            <textarea name="" id="" rows="3" placeholder='Message'></textarea>
            <button>Send</button>
        </form>
    </div>
  )
}
