import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Pages/Cart/CartSlice";
import loginReducer from "./Pages/LoginSlice";
import wishlistReducer from "./Pages/Wishlist/WishlistSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
    wishlist: wishlistReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
