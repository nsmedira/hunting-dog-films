import React, { useEffect } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import M from 'materialize-css'

const IndexPage = () => {

  useEffect(() => {
    M.AutoInit()
  })

  return (  
    <Layout>
      <SEO title="Home" />

      {/* <div class="content">
        <h1>Welcome to Hunting Dog Films</h1>
        <p>Lorem ipsum...</p>
        <button id="myBtn" onclick="myFunction()">Pause</button>
      </div> */}

      <div className="container">

        <div className="coming-soon">

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

    </Layout>
  )
}

export default IndexPage
