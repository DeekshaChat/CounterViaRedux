import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'Auth',
    initialState: { isLoggedIn: false},
    reducers: {
      login:(state) => {
        state.isLoggedIn = true 
      },
      logout:(state) => {
        state.isLoggedIn = false
      }
    }
});

export const { login, logout } =  AuthSlice.actions;

export default AuthSlice.reducer;