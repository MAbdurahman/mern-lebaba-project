import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice.js';
import userAPI from './features/users/userAPI.js';
import userReducer from './features/users/userSlice.js';

export const store = configureStore({
   reducer: {
      cart: cartReducer,
      [userAPI.reducerPath]: userAPI.reducer,
      users: userReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userAPI.middleware)
});