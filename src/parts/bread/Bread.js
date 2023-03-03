import React from 'react'
import './bread.css'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { NavLink } from 'react-router-dom'

const Breadcrumbs = () => {

	const breadcrumbs = useBreadcrumbs()

	return (
		<div className="breadcrumb mb-1">
			{breadcrumbs.map(
				({ match, breadcrumb }) => (
					<NavLink key={match.pathname} to={match.pathname} className="breadcrumb-item">
						{breadcrumb}
					</NavLink>
				))
			}
		</div>
	)
}

export default Breadcrumbs

