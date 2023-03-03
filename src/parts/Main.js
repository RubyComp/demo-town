import React from 'react'
import Content from '../parts/Content'
import Header from './header/Header'

const Main = () => {

	return (
		<main id="Main" className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 d-flex flex-column p-0">
			<Header/>
			<Content/>
		</main>
	)
}

export default Main