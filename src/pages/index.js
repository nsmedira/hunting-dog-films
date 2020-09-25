import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import dogSilhouette from "../videos/dog-silhouette.mp4"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="background-video-container">
      <video id="background-video" autoPlay muted loop>
        <source src={dogSilhouette} type="video/mp4"/>
      </video>
    </div>
    <div class="content">
      <h1>Welcome to Hunting Dog Films</h1>
      <p>Lorem ipsum...</p>
      {/* Use a button to pause/play the video with JavaScript */}
      <button id="myBtn" onclick="myFunction()">Pause</button>
    </div>
  </Layout>
)

export default IndexPage
