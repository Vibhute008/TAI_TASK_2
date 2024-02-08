import React from 'react'
import Section from '../shared/section'
import "./style.scss"
import Blog1 from "../../images/blogs/blog-thumb-1.jpg"
import Blog2 from "../../images/blogs/blog-thumb-2.jpg"
import Blog3 from "../../images/blogs/blog-thumb-3.jpg"
import Blogcard from './blog-card'
const Blog = () => {
  return (
   <Section id="blogs" title="blogs & Articles" background="dark">
    <div className="blogs-content-wrapper">
      <Blogcard 
        user="Jhon Doe"
        date="8 march 2022"
        image={Blog1}
        title="Lorem ipsum dolor sit amet consectetur adipisicing."
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero laboriosam sit sapiente? Odit sequi sed debitis quasi, nisi deserunt dolores ab omnis similique. Exercitationem, dolorum?"
      />
      <Blogcard 
        user="Jhon Doe"
        date="8 march 2022"
        image={Blog2}
        title="Lorem ipsum dolor sit amet consectetur adipisicing."
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero laboriosam sit sapiente? Odit sequi sed debitis quasi, nisi deserunt dolores ab omnis similique. Exercitationem, dolorum?"
      />
      <Blogcard 
        user="Jhon Doe"
        date="8 march 2022"
        image={Blog3}
        title="Lorem ipsum dolor sit amet consectetur adipisicing."
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero laboriosam sit sapiente? Odit sequi sed debitis quasi, nisi deserunt dolores ab omnis similique. Exercitationem, dolorum?"
      />
    </div>
   </Section>
  )
}

export default Blog
