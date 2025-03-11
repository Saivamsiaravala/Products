import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type wishListDupeItem, wishListItem } from "../../Types";
interface StateType {
  wishListItems: wishListItem[];
  wishListItemsId: number[];
  totalWishListItems: number;
}

const initialState: StateType = {
  wishListItems: [],
  wishListItemsId: [],
  totalWishListItems: 0,
};

const WishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishListItem: (state, action: PayloadAction<wishListDupeItem>) => {
      state.wishListItems = [
        ...state.wishListItems,
        { Item: action.payload.Item, Count: 1 },
      ];
      state.wishListItemsId = [...state.wishListItemsId, action.payload.id];
      state.totalWishListItems += 1;
      // console.log(state.totalWishListItems);
    },

    increaseWishListItemCount: (state, action: PayloadAction<number>) => {
      const num = state.wishListItems.findIndex((item) => {
        return item.Item.id === action.payload;
      });
      state.wishListItems[num].Count += 1;
      state.totalWishListItems += 1;

      // console.log(
      //   state.wishListItems.filter((item) => item.Item.id === action.payload)
      // );
    },
    removeWishListItem: (state) => {
      state.wishListItems = [];
    },
    removeWishListItemCount: (state, action: PayloadAction<number>) => {
      const num = state.wishListItems.findIndex((item) => {
        return item.Item.id === action.payload;
      });
      state.wishListItems[num].Count -= 1;
      state.wishListItems[num].Count === 0 &&
        (state.wishListItems.splice(num, 1),
        (state.wishListItemsId = state.wishListItemsId.filter(
          (item) => item !== action.payload
        )));
      state.totalWishListItems -= 1;
    },
    addWishListItemCount: (state, action) => {
      const num = state.wishListItems.findIndex((item) => {
        return item.Item.id === action.payload;
      });
      state.wishListItems[num].Count += 1;
      state.totalWishListItems += 1;
    },

    clearWishListItem: (state) => {
      state.wishListItems = [];
    },
  },
});

export default WishListSlice.reducer;

export const {
  addWishListItem,
  increaseWishListItemCount,
  removeWishListItem,
  clearWishListItem,
  removeWishListItemCount,
  addWishListItemCount,
} = WishListSlice.actions;
