import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "index.d";

export interface ICartStates {
  cart: IProduct[];
}

const initialState: ICartStates = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add(state, action) {
      state.cart.push(action.payload);
    },
  },
  extraReducers: () => {},
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
