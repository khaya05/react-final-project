import { createSlice } from '@reduxjs/toolkit';
import { plants } from '../data/data';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    plants,
    isCartShowing: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.isCartShowing = !state.isCartShowing;
    },

    toggleAddToCartBtn: (state, { payload }) => {
      const id = payload;
      const item = state.plants.find((item) => item.id === id);
      item.addedToCart = !item.addedToCart;
    },

    resetAddedToCartState: (state) => {
      return state.plants.forEach((item) => (item.addedToCart = false));
    },
  },
});

export const { toggleCart, toggleAddToCartBtn, resetAddedToCartState } =
  uiSlice.actions;

export default uiSlice.reducer;
