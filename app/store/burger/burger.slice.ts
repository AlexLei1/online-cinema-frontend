import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBurgerState } from './burger.interface';

const initialState: IBurgerState = {
	isShow: false
}

export const burgerSlice = createSlice({
	name: 'burger',
	initialState,
	reducers: {
		toggleBurger: (state, {payload: isShow}: PayloadAction<IBurgerState>) => {
			if (state.isShow === true) {
				state.isShow = false
			} else {
				state.isShow = true
			}
		}
	},
})

export const {actions, reducer} = burgerSlice