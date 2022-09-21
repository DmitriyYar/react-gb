import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: 'gb',
  visible: true,
  name2: 'ewwe',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleProfile: (state) => {
      console.log(state);
      state.visible = !state.visible;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      console.log(state);
      console.log(action);
    },
  },
});

export const { toggleProfile, changeName } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;