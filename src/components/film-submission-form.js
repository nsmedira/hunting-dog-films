import React from 'react'

const FilmSubmissionForm = () => {

    return (

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

            <h2>Submit Your Film!</h2>

            <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
            <form 
              id="film-submission-form"

              // copied from create kit embed
              action="https://app.convertkit.com/forms/1720634/subscriptions"
              className="seva-form formkit-form"
              method="post"
              data-sv-form="1720634"
              data-uid="f2d112bf1f"
              data-format="inline"
              data-version="5"
              data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":"http://huntingdogfilms.com/tour/submission-thank-you"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
            >

              {/* from create kit */}
              <div data-style="full">
                <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" className="seva-fields formkit-fields">

                  <div className="row">
                    <div className="input-field col s6">
                      <input 
                        id="first_name" 
                        type="text" 
                        className="validate formkit-input" 
                        name="fields[first_name]"
                      />
                      <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                      <input 
                        id="last_name" 
                        type="text" 
                        className="validate"
                        name="fields[last_name]"
                      />
                      <label htmlFor="last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input 
                        id="phone" 
                        type="tel" 
                        className="validate" 
                        name="fields[phone]"
                      />
                      <label htmlFor="phone">Phone</label>
                    </div>
                  </div>
      
                  <div className="row">
                    <div className="input-field col s12">
                        <input 
                            id="email" 
                            type="email" 
                            className="validate" 
                            name="email_address"
                            required 
                        />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
      
                  <div className="row">
                    <div className="input-field col s12">
                      <input 
                        id="website-url" 
                        type="text" 
                        className="validate" 
                        name="fields[website_url]"
                      />
                      <label htmlFor="website-url">Website URL</label>
                    </div>
                  </div>
      
                  <div className="row">
                    <div className="input-field col s12">
                      <input 
                        id="submission-url" 
                        type="text" 
                        className="validate" 
                        required
                        name="fields[submission_url]"
                      />
                      <label htmlFor="submission-url">Submission Link</label>
                    </div>
                  </div>
      
                  <div className="row">
                    <div className="input-field col s12">
                      <input 
                        id="password" 
                        type="password" 
                        className="validate" 
                        name="fields[video_submission_password]"
                      />
                      <label htmlFor="password">Video Submission Password</label>
                    </div>
                  </div>
                </div>

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

            </form>

          </div>

        </div>
    )

}

export default FilmSubmissionForm