import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: undefined,
    profile: undefined
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setProfile: (state, action) => {
            state.profile = action.payload
        }
    },
  })

  export const { setUser, setProfile } = userSlice.actions;

  export default userSlice.reducer;