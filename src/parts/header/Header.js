import React from 'react'
import './header.css'
// import { Breadcrumb } from 'react-bootstrap'
import Bread from '../bread/Bread'
// import { useSelector/*, useDispatch */} from 'react-redux'
import { useSelector } from 'react-redux'

const Header = () => {

	// const dispatch = useDispatch()
	const pageTitle = useSelector(state => state.title.titleText)
	// console.log(pageTitle)

	return (
		<header id="Header">
			<nav className="mini-header">
				
				<div className="container-fluid d-flex flex-wrap align-items-center justify-content-between px-4">
					{/* <Breadcrumb/> */}
					<Bread />
					<ul className="nav">
						<li className="nav-item"><a href="#" className="nav-link link-dark">Placeholder</a></li>
						<li className="nav-item"><a href="#" className="nav-link link-dark">Some link</a></li>
					</ul>
				</div>
			</nav>
			<div className="py-3 border-bottom">
				<div className="container-fluid d-flex flex-wrap justify-content-center align-items-center px-4">
					<div className="d-flex align-items-center me-lg-auto text-dark text-decoration-none">
						<h1 className="fs-4 m-0">{pageTitle}</h1>
					</div>
					<form className="col-12 col-lg-auto mb-3 mb-lg-0">
						<input type="search" className="form-control" placeholder="Search…" aria-label="Search" disabled />
					</form>
				</div>
			</div>
		</header>
	)
}

export default Header