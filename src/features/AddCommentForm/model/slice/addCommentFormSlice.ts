import { AddCommentFormSchema } from '../types/addCommentFormSchema';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: AddCommentFormSchema = {
  isLoading: false,
  text: '',
  error: '',
};

export const addCommentFormSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
