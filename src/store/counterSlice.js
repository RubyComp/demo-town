import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			console.log('state.value: ', state.value)
			state.value++
		},
		decrement(state) {
			console.log('state.value: ', state.value)
			state.value--
		},
		incrementByAmount(state, action) {
			console.log('state.value: ', state.value)
			state.value += action.payload
		},
	},
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer