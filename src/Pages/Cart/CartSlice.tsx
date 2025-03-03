import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, type ProductsType } from "../../Types";
interface StateType {
  cartItems: ProductsType;
}
const initialState: StateType = { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeItem: (state) => {
      state.cartItems = [];
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;
