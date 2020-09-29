import React from 'react' ;
import NavSegment from './nav_segment' ;

const NavList = ({pathname}) => {

    const tabs = [
        {
            url: '/',
            label: 'Home'
        },
        {
            url: '/tour',
            label: 'Tour'
        },
        {
            url: '/about',
            label: 'About'
        },
    ]
	
	return (
		
		<div>
            {
                tabs.map((tab, i) =>
                    <NavSegment
                        key={i}
                        url={tab.url}
                        label={tab.label}
                        pathname={pathname}
                    />
                )
            }
        </div>
    )
    
} ;

export default NavList ;