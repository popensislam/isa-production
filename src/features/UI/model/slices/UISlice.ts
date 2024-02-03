import { UISchema } from '../types/UISchema';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: UISchema = { scroll: {} };

export const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number}>) => {
      state.scroll[ payload.path ] = payload.position;
    }
  },
});

// Action creators are generated for each case reducer function
export const { actions: uiActions } = UISlice;
export const { reducer: uiReducer } = UISlice;
