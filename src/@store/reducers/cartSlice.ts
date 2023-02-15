import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    addItem(state, action: PayloadAction<IProduct>) {
      if (state.cart.some((x) => x.id === action.payload.id)) {
        state.cart = state.cart.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteItem(state, action: PayloadAction<IProduct>) {
      state.cart = state.cart.filter((x) => x.id !== action.payload.id);
    },
  },
  extraReducers: () => {},
});

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
