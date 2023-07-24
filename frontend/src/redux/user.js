import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: 0,
    loggedIn: false,
    name: null,
    email: null,
    identity: null,
  },
  reducers: {
    logInHR: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const {name, email} = action.payload
      state.loggedIn = true;
      state.name = name;
      state.email = email;
      state.identity = 'HR'
    },
    logInEmloyee: (state, action) => {
        const {name, email} = action.payload
        state.loggedIn = true;
        state.name = name;
        state.email = email;
        state.identity = 'Employee'
    },
    logOut: (state) => {
      state.loggedIn = false;
      state.name = null;
      state.email = null;
      state.identity = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logInHR, logInEmloyee, logOut } = userSlice.actions;

export default userSlice.reducer;

// export const currentUser = (state) => state.user.name

// export const currentStatus = (state) => state.user.loggedIn

// export const currentEmail = (state) => state.user.email

// export const currentIdentity = (state) => state.user.identity