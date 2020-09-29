import PropTypes from "prop-types"
import React from "react"
import Navbar from "../nav/navbar"

const Header = ({ siteTitle, pathname }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
      // marginTop: "8vh"
    }}
  >
    <Navbar pathname={pathname}/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
