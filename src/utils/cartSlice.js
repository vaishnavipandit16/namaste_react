import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla(older) Redux => DON'T MUTATE STATE, returning was mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux Toolkit
      // WE Have to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
      //   state.items.slice(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
