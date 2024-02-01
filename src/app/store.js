import { configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import navReducer from '../features/navSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        nav: navReducer
    }
});