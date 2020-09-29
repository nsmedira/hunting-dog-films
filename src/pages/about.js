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

        </div>

      </div>

    </>
  )
}

export default About
