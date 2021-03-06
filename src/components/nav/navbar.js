import React, { useEffect } from 'react' ;
import { Link } from 'gatsby' ;
import NavList from './nav_list'
import M from 'materialize-css'

// CSS
import '../../styles/layout/navbar.css'

const Navbar = ({pathname}) => {

	useEffect(() => {

		let options = {closeOnClick: true}
		let elems = document.querySelectorAll('.sidenav')
		M.Sidenav.init(elems, options)

	})

	return (
		
		<div>

			<ul className='sidenav' id='mobile-links'>
				{/* <NavList activeTab={this.state.activeTab} action={this.handler}/> */}
				<NavList pathname={pathname} />
			</ul>

			<div className="navbar-fixed">
				
				<nav style={{background: "rgba(0, 0, 0, 0.5)"}}>
					
					{/* 'NAV-WRAPPER' IS A MATERIALIZED CLASS (THE MATERIALIZE CSS FRAMEWORK) */}
					<div className='nav-wrapper'>
						{/*'CONTAINER' IS A MATERIALIZED CLASS*/}
						<div className="container">
							
							{/*'BRAND-LOGO' IS A MATERIALIZED CLASS*/}
							<Link 
								to='/' 
								className='brand-logo hunting-dog-font'
								style={{
									fontSize: "3rem"
								}}
							>
								Hunting Dog Films
							</Link>
			
							<a href="/#" className="sidenav-trigger" data-target='mobile-links'>
								<i className="material-icons left hide-on-large-only">menu</i>
							</a>
							
							
							<ul className='right hide-on-med-and-down'>
								{/* <NavList activeTab={this.state.activeTab} action={this.handler}/> */}
								<NavList pathname={pathname} />
							</ul>
			
							{/* <ul className='sidenav' id='mobile-links'>
								<NavList />
							</ul> */}
							
						</div>
					</div>
					
				</nav>	
	
			</div>

		</div>
	)
}

export default Navbar ;