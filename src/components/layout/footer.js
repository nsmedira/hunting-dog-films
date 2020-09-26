import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'

const Footer = () => (

    <footer className="fixed-footer hunting-dog-font">
        <p style={{position: "absolute", top: "27px", marginBottom: 0, marginLeft: "15px"}}>© {new Date().getFullYear()}, Hunting Dog Films, LLC</p>
        
        <ul className="social-icons">
            
            <li>
                <Link to="https://www.instagram.com/huntingdogfilms/">
                    <FontAwesomeIcon icon={faInstagram} size="1x"/>
                </Link>
            </li>

        </ul>

    </footer>
)

export default Footer