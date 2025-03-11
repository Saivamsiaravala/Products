import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { wishListDupeItem, wishListItem } from "../../Types";
interface StateType {
  cartItems: wishListItem[];
  cartItemsId: number[];
  totalCartItems: number;
}
const initialState: StateType = {
  cartItems: [],
  cartItemsId: [],
  totalCartItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<wishListDupeItem>) => {
      state.cartItems = [
        ...state.cartItems,
        { Item: action.payload.Item, Count: action.payload.Count },
      ];
      state.cartItemsId = [...state.cartItemsId, action.payload.id];
      state.totalCartItems += 1;
    },
    addSameItem: (state, action: PayloadAction<number>) => {
      const num = state.cartItems.findIndex(
        (item) => item.Item.id === action.payload
      );
      state.cartItems[num].Count += 1;
      state.totalCartItems += 1;
    },
    increaseCartItemCount: (state, action: PayloadAction<number>) => {
      // console.log(action.payload);
      const num = state.cartItems.findIndex(
        (item) => item.Item.id === action.payload
      );
      state.cartItems[num].Count += 1;
      state.totalCartItems += 1;
    },
    decreaseCartItemCount: (state, action: PayloadAction<number>) => {
      const num = state.cartItems.findIndex(
        (item) => item.Item.id === action.payload
      );
      state.cartItems[num].Count -= 1;
      state.cartItems[num].Count === 0 &&
        (state.cartItems.splice(num, 1),
        state.cartItemsId.filter((item) => item !== action.payload));
      state.totalCartItems -= 1;
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

export const {
  addItem,
  addSameItem,
  increaseCartItemCount,
  decreaseCartItemCount,
  removeItem,
  clearCart,
} = cartSlice.actions;
