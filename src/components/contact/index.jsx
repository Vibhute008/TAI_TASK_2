import React from 'react'
import Section from "../shared/section"
import "./style.scss"
import ContactInfo from './contact-info'
import Form  from '../contact/form'

const Contact = () => {
  return (
    <Section id="contact" title="Any uetion? Feel Free to Contact"
    background="light">
        <div className="contact-content-wrapper">
            <ContactInfo/>
            <Form/>
        </div>
    </Section>
  )
}

export default Contact
