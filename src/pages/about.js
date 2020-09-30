import React from "react"
import { Link } from 'gatsby'
import SEO from "../components/seo"

const About = () => {

  return (  
    <>
      <SEO title="About" />

      <div className="container">

        <div className="coming-soon">

        <h1 
            id="site-title" 
            className="hunting-dog-font" 
            style={{ 
            textAlign: "center"        
            // margin: 0,
            }}
        >
            <Link
            to="/"
            style={{
                color: `white`,
                textDecoration: `none`,
            }}
            >
            About Page
            </Link>
        </h1>

        <div className="paragraph">
            <p className="flow-text">My name is Billy White, founder of Hunting Dog Films/The Hunting Dog Film Tour.  I started this company with a mission to provide high quality content focused on hunting dogs, their owners and the stories that we love to hear about about our 4 legged friends.  We, hunting dog owners, might pursue different game each year, but in the end we do it to watch our dogs do what they were born to do and learn some of life’s most important lessons from our friends that cannot say a word.  Thus, Hunting Dog Films was born.</p>
            
            <p className="flow-text">From pit-mixes in kevlar chasing pigs to mountain curs treeing squirrels we want to hear about your dog and their best stories from each Fall. Send us pictures, videos, and some text that can help paint a picture of what makes your dog so special.  We look forward to hearing from you!</p>
        </div>

        </div>

      </div>

    </>
  )
}

export default About
