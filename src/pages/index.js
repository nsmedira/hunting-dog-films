import React from "react"
import { Link } from 'gatsby'
import SEO from "../components/seo"

const IndexPage = () => {

  return (  
    <>
      <SEO title="Home" />

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
              Hunting Dog Films
            </Link>
          </h1>

          <div className="row">
            <div className="col s12">
              <h2 className="hunting-dog-font">Coming soon to a city near you:</h2>
              <h1 
                className="hunting-dog-font"
                // style={{
                //   marginBottom: 0,
                // }}
              >
                The Hunting Dog Film Tour
              </h1>
            </div>
          </div>

          {/* ENTER EMAIL FOR UPDATES */}
          <div className="row">
            <form className="col s12">
              <div className="row">
                <h3 className="hunting-dog-font">Enter your email for updates about the tour!</h3>
                <div className="input-field col s12">
                  <input 
                    id="email" 
                    type="email" 
                    className="validate hunting-dog-font" 
                    style={{
                      color: "white" ,
                      fontSize: "3rem"
                    }}/>
                  <label 
                    htmlFor="email" 
                    className="hunting-dog-font"
                    style={{
                      fontSize: "1rem"
                    }}
                  >Enter your email</label>
                </div>
              </div>
            </form>
          </div>

        </div>

      </div>

    </>
  )
}

export default IndexPage
