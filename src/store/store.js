import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './titleSlice'
import modalReducer from './modalSlice'
import squarePriceReducer from './squarePriceSlice'

const store = configureStore({
	reducer: {
		title: titleReducer,
		modal: modalReducer,
		squarePrice: squarePriceReducer,
	}
})

export default store