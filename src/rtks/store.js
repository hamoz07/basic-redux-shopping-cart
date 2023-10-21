import { configureStore } from "@reduxjs/toolkit";
import ProductsSlicer from "./slices/products-slice";
import CartReducer from "./slices/cart-slice.js";

export const store = configureStore({
  reducer: {
    products: ProductsSlicer,
    cart:CartReducer
  },
});
