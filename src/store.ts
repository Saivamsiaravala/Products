import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Pages/Cart/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
