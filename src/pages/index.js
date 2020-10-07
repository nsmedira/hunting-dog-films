import React from "react"
import Helmet from 'react-helmet'

// COMPONENTS
import SEO from "../components/seo"

// VIDEO
// import jager from "../videos/jager.mp4"
import dogSilhouette from "../videos/dog-silhouette.mp4"

// CSS
import "../styles/pages/index.css"

const IndexPage = ({location}) => {

  let search = {}
  let searchSplit = location.search.substring(1).split("&")

  for ( let i = 0 ; i < searchSplit.length ; i++ ) {
    let query = searchSplit[i].split("=")
    search[query[0]] = query[1]
  }

  let emailSignUp
  if (search.signup === "success"){

    emailSignUp = (
      <div id="email-success" className="hunting-dog-font">
        <h3 className="hunting-dog-font" style={{fontSize: "3rem"}}>Thanks for signing up!</h3>
        <p style={{fontSize: "2rem"}}>Check your email to confirm</p>
      </div>
    )
  
  } else {

    emailSignUp = (
      <>
        <h3 className="hunting-dog-font">Enter your email for updates about the tour!</h3>
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
        <form 
          action="https://app.convertkit.com/forms/1725009/subscriptions"
          className="col s12 seva-form formkit-form"
          method="post"
          data-sv-form="1725009"
          data-uid="7614219ba9"
          data-format="inline"
          data-version="5"
          data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":"https://huntingdogfilms.com/?signup=success"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        >
          <div className="row">
            <div id="email-signup-form">
              {/* <h3 className="hunting-dog-font">Enter your email for updates about the tour!</h3> */}
              <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              <div data-element="fields" class="seva-fields formkit-fields">
                <div 
                  className="input-field col s12 m8 l6 offset-l2 formkit-field"
                  style={{marginTop: 0}}
                >
                  <input 
                    id="email" 
                    type="email" 
                    className="validate hunting-dog-font formkit-input"
                    name="email_address"
                    required 
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
                  >
                    Enter your email
                  </label>
                </div>
                <div className="col s12 m4 l2">
                  <div className="center">
                    <button 
                      className="btn waves-effect waves-light" 
                      data-element="submit"
                      // form="film-submission-form" 
                      // type="submit" 
                      // name="action"
                    >
                      Submit
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    )

  }

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
            {emailSignUp}
          </div>

        </div>

      </div>

    </>
  )
}

export default IndexPage
