import React from 'react'
import "./style.scss"
import logo from "../../../images/logo.png"
import CallToAction from '../../shared/CallToAction'

import {scrollToSection} from "../../utils/helper"
const Navigation = () => {
  return (
    <div className='top-navigation-bar'>
      <div className="app-logo">
        <img src={logo} alt="" />
      </div>
      <div className="navigation">
        <span className="navigation-item" onClick={()=> scrollToSection("skills")}>Skills</span>
        <span className="navigation-item" onClick={()=> scrollToSection("portfolio")}>Portfolio</span>
        <span className="navigation-item" onClick={()=> scrollToSection("blogs")}>Blogs and Articles</span>
        <CallToAction text="Contact Me" action={()=> scrollToSection("contact")}/>
      </div>
    </div>
  )
}
export default Navigation
