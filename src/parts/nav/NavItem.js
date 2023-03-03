import React from 'react'
import ImgPlaceholder from '../ImgPlaceholder'
import {NavLink} from 'react-router-dom'

import propTypes from 'prop-types'

const NavItem = ({name}) => {
	return (
		<li>
			<NavLink to={`/${name}`} className="nav-link text-white">
				<ImgPlaceholder/>
				<span>{name}</span>
			</NavLink>
		</li>
	)
}

NavItem.propTypes = {
	name: propTypes.string
}
{/* <li>
	<a href="#" className="nav-link d-flex align-items-center text-white">
		<ImgPlaceholder/>
		<span>Objects</span>
	</a>
</li> */}
export default NavItem