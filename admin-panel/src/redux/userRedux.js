import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    users:[],
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getuserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getuserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getuserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // delete user
    //DELETE
    deleteuserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteuserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteuserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
     //UPDATE
     updateuserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateuserSuccess: (state, action) => {
      state.isFetching = false;
      state.users[
        state.users.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.user;
    },
    updateuserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, registerFailure, registerStart,registerSuccess,getuserFailure,getuserStart,getuserSuccess,deleteuserFailure,deleteuserStart,deleteuserSuccess,updateuserFailure,updateuserStart,updateuserSuccess } = userSlice.actions;
export default userSlice.reducer;