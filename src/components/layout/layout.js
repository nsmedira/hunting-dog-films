/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// COMPONENTS
import Header from "./header"
import Footer from "./footer"

// CSS
import "../../styles/layout/layout.css"
import "../../styles/materialize.css"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata?.title || `Title`} 
        pathname={location.pathname}
      />
      <main className="main-div">
        {children}
      </main>
      <Footer 
        pathname={location.pathname}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
