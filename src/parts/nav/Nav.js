import React from 'react'
import { pages } from '../../helpers/pagesList'
import {NavLink} from 'react-router-dom'
// import ImgPlaceholder from '../../components/ImgPlaceholder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './nav.css'

const Nav = () => {
	return (
		<ul className="nav nav-pills flex-column mb-auto">

			{pages.map((page) => {

				const {url} = page

				const icon = page.icon
				const title = page .title || url

				return (
					<NavLink to={`/${url}`} key={url} className="nav-link text-white">
						{/* <ImgPlaceholder/> */}
						<FontAwesomeIcon icon={icon} />
						<span>{title}</span>
					</NavLink>
				)

			})}

		</ul>
	)
}

export default Nav