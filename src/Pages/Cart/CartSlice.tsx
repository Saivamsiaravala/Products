import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { wishListDupeItem, wishListItem } from "../../Types";
interface StateType {
  cartItems: wishListItem[];
  cartItemsId: number[];
  totalCartItems: number;
  totalCost: number;
}
const initialState: StateType = {
  cartItems: [],
  cartItemsId: [],
  totalCartItems: 0,
  totalCost: 0,
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
      state.totalCost += action.payload.Item.price;
    },
    addSameItem: (state, action: PayloadAction<number>) => {
      const num = state.cartItems.findIndex(
        (item) => item.Item.id === action.payload
      );
      state.cartItems[num].Count += 1;
      state.totalCartItems += 1;
      state.totalCost += state.cartItems.filter(
        (item) => item.Item.id === action.payload
      )[0].Item.price;
    },
    increaseCartItemCount: (state, action: PayloadAction<number>) => {
      const num = state.cartItems.findIndex(
        (item) => item.Item.id === action.payload
      );
      state.cartItems[num].Count += 1;
      state.totalCartItems += 1;
      state.totalCost += state.cartItems.filter(
        (item) => item.Item.id === action.payload
      )[0].Item.price;
    },
    decreaseCartItemCount: (state, action: PayloadAction<number>) => {
      const num = state.cartItems.findIndex(
        (item) => item.Item.id === action.payload
      );
      state.totalCost -= state.cartItems.filter(
        (item) => item.Item.id === action.payload
      )[0].Item.price;
      state.cartItems[num].Count -= 1;
      if (state.cartItems[num].Count === 0) {
        state.cartItems.splice(num, 1),
          state.cartItemsId.splice(num, 1),
          (state.totalCartItems -= 1);
      }
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
