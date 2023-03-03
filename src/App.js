import React from 'react'
import Sidebar from './parts/sidebar/Sidebar'
import Main from './parts/Main'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SignIn from './pages/SignIn'
import { Container, Row } from 'react-bootstrap'
import AppModal from './parts/appModal/AppModal'


const appContent = () => {
	let isUser = true

	if (isUser) {
		return <>
			<Sidebar />
			<Main />
			<AppModal />
		</>
	} else {
		return <SignIn/>
	}
}

const App = () => {

	return (
		<Container fluid id="App">
			<Row>
				{appContent()}
			</Row>
		</Container>
	)
}

export default App
