import React from 'react'
import "./style.scss"
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const ContactInfo = () => {
  return (
    <div className='contact-info-box'>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem rerum nulla! Sit facilis nostrum cum debitis, neque laboriosam quos?</h4>
      <div className="contact-option">
        <FaPhoneAlt/>
        <span className="text">934850983458</span>
      </div>
      <div className="contact-option">
        <MdEmail/>
        <span className="text">example@gmaikl.com</span>
      </div>
    </div>
  )
}

export default ContactInfo
