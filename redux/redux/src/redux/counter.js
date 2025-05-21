import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset:(state)=>{
        state.count=0
    },
     incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    }
  }
});
export const { increment, decrement ,reset,incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
