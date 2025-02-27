import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Pages/Cart/CartSlice";
import loginReducer from "./Pages/LoginSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
