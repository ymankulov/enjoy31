import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./reducers/adminSlice";
import addProduct from "./reducers/productSlice";

export const store = configureStore({
  reducer: {
    admin: AdminSlice,
    products: addProduct,
  },
});
