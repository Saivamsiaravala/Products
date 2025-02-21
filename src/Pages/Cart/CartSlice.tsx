import { createSlice } from "@reduxjs/toolkit";
interface StateType {
  cartItems: number;
  isEmpty: boolean;
}
const initialState: StateType = { cartItems: 0, isEmpty: true };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state) => {
      state.cartItems += 1;
    },
    removeItem: (state) => {
      state.cartItems -= 1;
    },
    clearCart: (state) => {
      (state.cartItems = 0), (state.isEmpty = true);
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;
