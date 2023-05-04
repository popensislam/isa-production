import { createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User, UserSchema } from '../types/userSchema';

const initialState: UserSchema = { };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    initAuthData: (state) => {
      const user = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));

      if (!user) return;

      state.userData = user;
    },
    logout: (state) => {
      state.userData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;