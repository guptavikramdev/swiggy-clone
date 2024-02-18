import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    isLoding: false,
  },
  reducers: {
    addItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItems: (state, action) => {},
    clearItems: (state) => {},
  },
});
export const { addItems, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
