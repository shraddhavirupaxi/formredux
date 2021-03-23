import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		users: []
	},
	reducers: {
		createUser: (state, action) => {
			state.users = [...state.users, action.payload];
			
		}
	}
});

export const { createUser } = userSlice.actions;
export const selectUsers = (state) => state.user.users;
export default userSlice.reducer;
