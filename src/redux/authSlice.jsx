import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from '../services/api';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export const register = (credentials) => async (dispatch) => {
  const user = await registerUser(credentials);
  dispatch(setUser(user));
};

export const login = (credentials) => async (dispatch) => {
  const user = await loginUser(credentials);
  dispatch(setUser(user));
};

export const logout = () => async (dispatch) => {
  await logoutUser();
  dispatch(clearUser());
};

export default authSlice.reducer;
