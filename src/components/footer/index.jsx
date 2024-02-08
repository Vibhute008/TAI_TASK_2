import React from 'react'
import './style.scss'
import Section from "../shared/section"
import Logo from "../../images/logo.png"
import { FaYoutube, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import SocialIcon from './social-icon'
import {scrollToSection} from "../utils/helper"
const Footer = () => {
  return (
    <Section background="dark" className="footer">
        <div className="footer-content-wrapper">
            <div className="footer-logo">
                <img src={Logo} alt="" />
            </div>
            <ul className="footer_menu_items">
                <li className="footer_menu_item" onClick={()=> scrollToSection("skills")}>Skills</li>
                <li className="footer_menu_item" onClick={()=> scrollToSection("portfolio")}>Portfolio</li>
                <li className="footer_menu_item" onClick={()=> scrollToSection("blogs")}>Blog And Articles</li>
                <li className="footer_menu_item" onClick={()=> scrollToSection("contact")}>Contact</li>
            </ul>
            <div className="social-icons">
                <SocialIcon color="#ff0000" icon={<FaYoutube/>} link=""/>
                <SocialIcon color="#0D2636" icon={<FaGithub/>} link=""/>
                <SocialIcon color="#0A66c2" icon={<FaLinkedinIn/>} link=""/>
                <SocialIcon color="#E84C88" icon={<FaInstagram/>} link=""/>
            </div>
            <div className="bottom-bar">
                <div className="copyright-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Footer
