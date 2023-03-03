import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/logo/Logo'
import Nav from '../../components/nav/Nav'
import './sidebar.css'

const Sidebar = () => {

	const [showDropdown, setShowDropdown] = React.useState(false)

	let dropdownClasses = 'dropdown-menu dropdown-menu-dark text-small shadow'

	if (showDropdown) dropdownClasses += ' show'

	return (
		<aside id="Sidebar" className="col-sm-3 col-md-2 d-flex flex-column flex-shrink-0 p-3  text-white bg-dark">
			<Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none logo">
				<Logo/>
				<span className="fs-4">Title</span>
			</Link>
			<hr/>
			<Nav name="Test"/>
			<hr/>
			<div onMouseLeave={() => {setShowDropdown(false)}} className="dropdown">
				<a onMouseEnter={() => {setShowDropdown(true)}} href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
					<strong>Demo User</strong>
				</a>
				<ul className={dropdownClasses}>
					<li><a className="dropdown-item" href="#">New project...</a></li>
					<li><a className="dropdown-item" href="#">Settings</a></li>
					<li><a className="dropdown-item" href="#">Profile</a></li>
					<li><hr className="dropdown-divider"/></li>
					<li><a className="dropdown-item" href="#">Sign out</a></li>
				</ul>
			</div>
		</aside>


	)
}

export default Sidebar