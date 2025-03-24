import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Item,
  // type wishListDupeItem,
  // wishListItem,
  wishListItemAndId,
} from "../../Types";
interface StateType {
  wishListItems: Item[];
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
    addWishListItem: (state, action: PayloadAction<wishListItemAndId>) => {
      state.wishListItems = [...state.wishListItems, action.payload.Item];
      state.wishListItemsId = [...state.wishListItemsId, action.payload.Id];
      state.totalWishListItems += 1;
    },

    // increaseWishListItemCount: (state, action: PayloadAction<number>) => {
    //   const num = state.wishListItems.findIndex((item) => {
    //     return item.Item.id === action.payload;
    //   });
    //   state.wishListItems[num].Count += 1;
    //   state.totalWishListItems += 1;

    //   // console.log(
    //   //   state.wishListItems.filter((item) => item.Item.id === action.payload)
    //   // );
    // },
    removeWishListItem: (state, action: PayloadAction<number>) => {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload
      );
      // console.log(action.payload);

      state.wishListItemsId = state.wishListItemsId.filter(
        (id) => id !== action.payload
      );
    },
    // removeWishListItemCount: (state, action: PayloadAction<number>) => {
    //   const num = state.wishListItems.findIndex((item) => {
    //     return item.Item.id === action.payload;
    //   });
    //   state.wishListItems[num].Count -= 1;
    //   state.wishListItems[num].Count === 0 &&
    //     (state.wishListItems.splice(num, 1),
    //     (state.wishListItemsId = state.wishListItemsId.filter(
    //       (item) => item !== action.payload
    //     )));
    //   state.totalWishListItems -= 1;
    // },
    // addWishListItemCount: (state, action) => {
    //   const num = state.wishListItems.findIndex((item) => {
    //     return item.Item.id === action.payload;
    //   });
    //   state.wishListItems[num].Count += 1;
    //   state.totalWishListItems += 1;
    // },

    clearWishListItem: (state) => {
      state.wishListItems = [];
    },
  },
});

export default WishListSlice.reducer;

export const {
  addWishListItem,
  // increaseWishListItemCount,
  removeWishListItem,
  clearWishListItem,
  // removeWishListItemCount,
  // addWishListItemCount,
} = WishListSlice.actions;
