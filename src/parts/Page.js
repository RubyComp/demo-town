import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Residents from '../pages/Residents'

import Intro from '../pages/Intro'
import NotFound from '../pages/NotFound'
import Objects from '../pages/Objects'
import Latest from '../pages/Latest'
import Preferences from '../pages/Preferences'
import Users from '../pages/Users'
import ResidentEdit from '../pages/ResidentEdit'
import ObjectEdit from '../pages/ObjectEdit'

const Page = () => (
	<div id="Page">
		<Routes>
			{/* <Route path="/" element={<Intro/>}></Route> */}
			<Route path="/" element={<Navigate to="/residents" />}></Route>
			<Route path="/residents" element={<Residents/>}></Route>
			<Route path="/residents/:slug" element={<ResidentEdit/>}></Route>
			<Route path="/objects" element={<Objects/>}></Route>
			<Route path="/objects/:slug" element={<ObjectEdit/>}></Route>
			<Route path="/latest" element={<Latest/>}></Route>
			<Route path="/preferences" element={<Preferences/>}></Route>
			<Route path="/users" element={<Users/>}></Route>
			<Route path="*" element={<NotFound/>}></Route>
		</Routes>
	</div>
)
 
export default Page