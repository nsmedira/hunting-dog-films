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
            
            <div className="paragraph">
                <p className="flow-text">It’s not the size of the dog in the fight, but the size of the fight in the dog.</p> 
                <p className="flow-text">The Hunting Dog Film Tour is a submission-based film festival highlighting hunting dogs, their owners and the stories made afield. Modeled off the successful Hunting and Fly Fishing Film tours, we figured everyone likes to show their dogs off and who isn’t a sucker for hunting dog stories…however fabricated they might be.</p>
                <p className="flow-text">If you have a great hunting dog and story, we want to see it and share it on the big screen.</p>
            </div>

        </div>

      </div>

    </>
  )
}

export default Tour
