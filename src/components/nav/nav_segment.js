import React from 'react' ;
import { Link } from 'gatsby' ;

const NavSegment = ({url, label, pathname}) => {

	let path = pathname.split("/")[1]
	let urlPath = url.split("/")[1]
		
	return (
		
		<li 
			className={`sidenav-close${path === urlPath ? ' active' : '' }`}
		>

			<Link 
				className="hunting-dog-font" 
				to={url}
				style={{
					fontSize: "2rem"
				}}
			>
				{label}
			</Link>

		</li>

	)

} ;

export default NavSegment ;