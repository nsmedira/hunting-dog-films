import React from "react"
import SEO from "../components/seo"

const Tour = () => {

  return (  
    <>
      <SEO title="Tour" />

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

        <div className="row">

          {/* TOUR DESCRIPTION */}
          <div className="col s12 m7">

              <h2>About the Tour</h2>
              
              <div className="paragraph">
                  <p className="flow-text">It’s not the size of the dog in the fight, but the size of the fight in the dog.</p> 
                  <p className="flow-text">The Hunting Dog Film Tour is a submission-based film festival highlighting hunting dogs, their owners and the stories made afield. Modeled off the successful Hunting and Fly Fishing Film tours, we figured everyone likes to show their dogs off and who isn’t a sucker for hunting dog stories…however fabricated they might be.</p>
                  <p className="flow-text">If you have a great hunting dog and story, we want to see it and share it on the big screen.</p>
              </div>
  
          </div>

          {/* SUBMISSION FORM */}
          <div className="col s12 m5">

            <form id="film-submission-form">

              <h2>Submit Your Film!</h2>
  
              <div className="row">
                <div className="input-field col s6">
                  <input id="first_name" type="text" className="validate" />
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" />
                  <label for="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="phone" type="tel" className="validate" />
                  <label for="phone">Phone</label>
                </div>
              </div>
  
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" required />
                  <label for="email">Email</label>
                </div>
              </div>
  
              <div className="row">
                <div className="input-field col s12">
                  <input id="website-url" type="text" className="validate" />
                  <label for="website-url">Website URL</label>
                </div>
              </div>
  
              <div className="row">
                <div className="input-field col s12">
                  <input id="submission-url" type="text" className="validate" />
                  <label for="submission-url">Submission Link</label>
                </div>
              </div>
  
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label for="password">Video Submission Password</label>
                </div>
              </div>

            </form>

            <div className="center">
              <button 
                class="btn waves-effect waves-light" 
                form="film-submission-form" 
                type="submit" 
                name="action"
                style={{
                  margin: "auto"
                }}
              >
                Submit
                <i class="material-icons right">send</i>
              </button>
            </div>

          </div>

        </div>

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
