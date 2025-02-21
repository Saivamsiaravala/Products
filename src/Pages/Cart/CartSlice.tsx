import {  createSlice } from "@reduxjs/toolkit";
interface StateType{
    cartItems:number

}
const initialState:StateType={cartItems:0}

const cartSlice = createSlice({
      name:'cart',
    initialState,
    reducers:{
        addItem:(state)=>{
            return state.cartItems=state.cartItems+1
        }
        removeItem:(state)=>{
            return state.cartItems=state.cartItems-1
        }
        clearCart:(state)=>{
            return state.cartItems=0;
        }
    }   
}
  )

export default cartSlice.reducer

export const {addItem,returnItem,clearCart}= cartSlice.actions;