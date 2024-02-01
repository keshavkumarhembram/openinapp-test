import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    active: false
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        toggle: (state) => {
            state.active = !state.active;
        }
    },
  })

  export const { toggle } = navSlice.actions;

  export default navSlice.reducer;