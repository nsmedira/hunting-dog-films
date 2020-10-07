import React from "react"

// COMPONENTS
import SEO from "../../components/seo"
import FilmSubmissionForm from '../../components/film-submission-form.js'

const Tour = () => {

  return (  
    <>
      <SEO 
        title="Tour"
        description={`Learn about the Hunting Dog Film tour and submit your film using our Film Submission Form.`}
        path="/tour"
      />

      <div className="container info">

        <div className="row">

          <h1 
            id="site-title" 
            className="hunting-dog-font" 
            style={{ 
              textAlign: "center"        
            // margin: 0,
            }}
          >
            The Hunting Dog Film Tour
          </h1>

        </div>

        <FilmSubmissionForm />

        <div className="row">
          <div className="col s12">
            <h2>* Rough Cut Film Submissions Due: March 1, 2021</h2>
          </div>
        </div>

      </div>

    </>
  )
}

export default Tour
