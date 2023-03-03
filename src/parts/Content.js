import React from 'react'

import Footer from './footer/Footer'
import { Container } from 'react-bootstrap'
import Page from './Page'

const Content = () => (
	<Container fluid id="Content" className="d-flex flex-column justify-content-between px-4 pt-3">
		<Page />
		<Footer />
	</Container>
)
 
export default Content