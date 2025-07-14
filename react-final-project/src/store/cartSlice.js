import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, { payload }) => {
      const { id } = payload;
      if (state.some((item) => item.id === id)) {
        const item = state.find((item) => item.id === id);
        item.qty++;
      } else {
        state.push({ ...payload, qty: 1 });
      }
    },

    clearCart: () => [],

    increaseQuantity: (state, { payload }) => {
      const id = payload;
      const item = state.find((item) => item.id === id);
      item.qty++;
    },

    decreaseQuantity: (state, { payload }) => {
      const id = payload;
      const item = state.find((item) => item.id === id);

      if (item.qty === 1) {
        return state.filter((item) => item.id !== id);
      } else {
        item.qty--;
      }
    },
  },
});

export const { addToCart, clearCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
