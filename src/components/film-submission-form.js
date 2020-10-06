import React, { useState } from 'react'

const FilmSubmissionForm = () => {

    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);
  
    // your generated URL here //
    const baseURL = `https://app.convertkit.com/forms/1720634/subscriptions`;
  
    const handleSubmit = async (e) => {

        // i added this
        e.persist()

        e.preventDefault();
        const formData = new FormData(e.target.value);

        // try {
        //     const res = await fetch(baseURL, {
        //         method: 'post',
        //         body: formData,
        //         headers: {
        //             accept: 'application/json',
        //         },
        //     });
        //     setEmail('');
        //     const json = await res.json();
        //     if (json.status === 'success') {
        //         setStatus('SUCCESS');
        //         return;
        //     }
        // } catch (err) {
        //     setStatus('ERROR');
        // }
        
    };
  
    const handleInputChange = (e) => {
      const { value } = e.target;
      setEmail(value);
    };

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

            <form 
                id="film-submission-form"
                method="post"
                action="https://app.convertkit.com/forms/1720634/subscriptions"
                onSubmit={handleSubmit}
            >

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
                    <input 
                        id="email" 
                        type="email" 
                        className="validate" 
                        onChange={handleInputChange}
                        value={email}
                        required 
                    />
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
              >
                Submit
                <i class="material-icons right">send</i>
              </button>
            </div>

            {status === 'SUCCESS' && <p>Thank you for your submission. Please check your email for confirmation and instructions for next steps.</p>}
            {status === 'ERROR' && <p>Oops, Something went wrong! please try again.</p>}

          </div>

        </div>
    )

}

export default FilmSubmissionForm