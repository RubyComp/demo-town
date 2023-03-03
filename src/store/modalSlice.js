import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		show: false,
		mode: '',
		url: '',
		title: '',
		showFooter: false,
		fullscreen: false
	},
	reducers: {
		showModal(state, action) {
			state.show = true
			state.mode = action.payload.mode
			state.url = action.payload.url
			state.title = action.payload.title
			state.showFooter = action.payload.showFooter
			state.fullscreen = action.payload.fullscreen
		},
		closeModal(state/*, action*/) {
			state.show = false
		}
	}
})

export const {showModal, closeModal} = modalSlice.actions
export default modalSlice.reducer