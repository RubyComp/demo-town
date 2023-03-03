import React from 'react'
import { Spinner } from 'react-bootstrap'
import './loader.css'

const Loader = () => (
	<div className="loader-container">
		<Spinner animation="border" variant="secondary" role="status">
			<span className="visually-hidden">Loading…</span>
		</Spinner>
	</div>
)

export default Loader