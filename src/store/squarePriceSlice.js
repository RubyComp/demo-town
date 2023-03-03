import { createSlice } from '@reduxjs/toolkit'

const squarePriceSlice = createSlice({
	name: 'square-price',
	initialState: {
		price: 0,
		currency: ''
	},
	reducers: {
		changeSquarePrice(state, action) {
			state.value = action.payload
		}
	}
})

export const {changeSquarePrice} = squarePriceSlice.actions
export default squarePriceSlice.reducer