import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.carts = action.payload;
    },
    removeCart: (state, action) => {
      const id = action.payload;
      state.carts = state.carts.filter((item) => item.id !== id);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingProduct = state.carts.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingProduct = state.carts.find((item) => item.id == id);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
      }
    },
  },
});

export const { addCart, removeCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
