import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'

// CSS
import "../../styles/layout/footer.css"

const Footer = ({pathname}) => {

    let className = `fixed-footer hunting-dog-font ${pathname === "/" ? "footer-index" : "footer"}`

    return (    

        <footer className={className}>
            
            <p>© {new Date().getFullYear()}, Hunting Dog Films, LLC</p>
            
            <ul className="social-icons">
                
                <li>
                    <Link to="https://www.instagram.com/huntingdogfilms/">
                        <FontAwesomeIcon icon={faInstagram} size="1x"/>
                    </Link>
                </li>

            </ul>

        </footer>

    )

}

export default Footer