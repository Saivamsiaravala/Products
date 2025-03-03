import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, type ProductsType } from "../../Types";
interface StateType {
  wishListItems: ProductsType;
}
const initialState: StateType = { wishListItems: [] };

const WishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishListItem: (state, action: PayloadAction<Item>) => {
      state.wishListItems = [...state.wishListItems, action.payload];
    },
    removeWishListItem: (state) => {
      state.wishListItems = [];
    },
    clearWishListItem: (state) => {
      state.wishListItems = [];
    },
  },
});

export default WishListSlice.reducer;

export const { addWishListItem, removeWishListItem, clearWishListItem } =
  WishListSlice.actions;
