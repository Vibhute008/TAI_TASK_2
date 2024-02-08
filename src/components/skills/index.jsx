import React from 'react'
import './style.scss'
import Section from "../shared/section"
import TechIcon from "../../images/tech-icons.png"
import CallToAction from "../shared/CallToAction"
import {AiOutlineCloudDownload} from 'react-icons/ai'
const Skills = () => {
  return (
    <Section
        background= "dark"
        id="skills"
    >
        <div className="skills-content-wrapper">
            <div className="left-col">
                <img src={TechIcon} alt="" />
            </div>
            <div className="right-col">
                <h2>Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloribus vitae, placeat mollitia reprehenderit eius illo voluptatum quisquam quibusdam accusantium, sunt ipsum cupiditate rem delectus.</p>
                <CallToAction text="Download CV" icon={<AiOutlineCloudDownload/>}/>
            </div>
        </div>
    </Section>
  )
}

export default Skills
