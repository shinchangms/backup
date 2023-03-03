import { createSlice } from '@reduxjs/toolkit';
import { ActionTypes } from './action/action_types';
import { register } from './action/register';


interface UserState {
  type: string;
  error: any;
  loggerUser: any;
  isLoggedIn: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  type: "INIT",
  error: null,
  loggerUser: null,
  isLoggedIn: false,
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {

      /* Performing logout by clearing local storage */
      // sessionExpired();

      /* Setting type as Logout */
      // state.type = ActionTypes.LOGOUT;
    },
  },
  extraReducers: (builder) => {
    /* Register Reducer */
    builder.addCase(register.pending, (state, action) => {
      console.log(action.type)
      state.type = ActionTypes.REGISTER_PENDING;
      state.isLoggedIn = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action.type)
      state.type = ActionTypes.REGISTER_FULFILLED;
      state.loggerUser = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      console.log(action.type)
      state.type = ActionTypes.REGISTER_REJECTED;
      state.isLoggedIn = false;
    });
  }
})

// Action creators are generated for each case reducer function
export const { logoutUser } = userSlice.actions

export default userSlice.reducer