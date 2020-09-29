import React from "react"
import { Link } from 'gatsby'
import SEO from "../components/seo"

const Tour = () => {

  return (  
    <>
      <SEO title="Tour" />

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
                Tour Page
              </Link>
            </h1>
            
        </div>

      </div>

    </>
  )
}

export default Tour
