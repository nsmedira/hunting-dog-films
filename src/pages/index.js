import React from "react"
import Helmet from 'react-helmet'

// COMPONENTS
import SEO from "../components/seo"

// VIDEO
// import jager from "../videos/jager.mp4"
import dogSilhouette from "../videos/dog-silhouette.mp4"

// CSS
import "../styles/pages/index.css"

const IndexPage = () => {

  return (  
    <>
    
      <SEO 
        title="Home" 
        path="/"
      />

      <Helmet>
        <body className="body-index" />
      </Helmet>

      <video id="background-video" autoPlay muted loop>
        <source 
          src={dogSilhouette} 
          type="video/mp4"
        />
      </video>

      <div className="container index">

        <div className="coming-soon">

          <div className="row">
            <div className="col s12">
              <h2 className="hunting-dog-font">Coming soon to a city near you:</h2>
              <h1 
                className="hunting-dog-font site-title"
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
