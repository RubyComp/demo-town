import { createSlice } from '@reduxjs/toolkit'

const titleSlice = createSlice({
	name: 'title',
	initialState: {
		titleText: ''
	},
	reducers: {
		changeTitle(state, action) {
			state.titleText = action.payload
		}
	}
})

export const {changeTitle} = titleSlice.actions
export default titleSlice.reducer