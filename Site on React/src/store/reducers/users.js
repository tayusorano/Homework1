import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserLogged: false,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        removeUser(state) {
            state.isUserLogged = false;
        },
        logIn (state) {
            state.isUserLogged = true;
        }
    }
})

export const { removeUser, logIn} = userSlice.actions;

export default userSlice.reducer;