import { createSlice } from "@reduxjs/toolkit";

export const userListSlice = createSlice({
  name: "userList",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getuserListStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getuserListSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getuserListFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteuserListStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteuserListSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteuserListFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    // updateuserListStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // updateuserListSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.userLists[
    //     state.userLists.findIndex((item) => item._id === action.payload.id)
    //   ] = action.payload.userList;
    // },
    // updateProductFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
    //UPDATE
    // addUserStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // addUserSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.users.push(action.payload);
    // },
    // addProductFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
  },
});

export const {
  getuserListFailure,getuserListStart,getuserListSuccess,deleteuserListFailure,deleteuserListStart,deleteuserListSuccess
  
} = userListSlice.actions;

export default userListSlice.reducer;