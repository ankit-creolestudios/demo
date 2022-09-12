import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  loading: false,
  isLoggedIn: false,
  user: {},
  newUser: {},
};

const authSlice = createSlice({
  name: "signin/signup",
  initialState: initialValues,
  reducers: {
    signUp: () => {},
    signUpSuccess: (state, action) => {
      state.loading = false;
      state.newUser = action.payload;
    },
    signUpFailed: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
    login: () => {},
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.loading = false;
      state.user = action.payload;
    },
    loginFailed: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
    signOut: () => {},
    signOutSuccess: (state, action) => {
      state.isLoggedIn = false;
      state.loading = true;
      state.user = {};
    },
    signOutFail: (state) => {
      state.loading = false;
    },
  },
});
export const actions = authSlice.actions;
export default authSlice.reducer;
