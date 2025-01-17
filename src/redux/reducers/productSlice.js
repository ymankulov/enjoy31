import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const productSlice = createSlice({
  name: "PRODUCTS",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products = action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
