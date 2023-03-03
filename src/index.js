import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter as Router/*, Routes, Route */} from 'react-router-dom'

// import { createStore } from 'redux'
import store from './store/store'
import { Provider } from 'react-redux'

// const emptyPage = {
// 	title: '…',
// }

// const reducer = (state = emptyPage, action) => {

// 	switch (action.type) {

// 		case 'SET_PAGE_TITLE':
// 			return {...state, title: action.payload}

// 		default:
// 			return state
// 	}

// }

// const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	</React.StrictMode>
)