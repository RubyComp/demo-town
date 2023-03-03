import React from 'react'
import useTitle from '../hooks/useTitle'

const NotFound = () => {

	useTitle('404')

	return (
		<div className="alert alert-danger" role="alert">Page not found. Check URL.</div>
	)
}

export default NotFound