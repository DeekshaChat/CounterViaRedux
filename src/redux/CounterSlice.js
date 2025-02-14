import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
      toggleCounter(state) {
        state.counter = 0;
      },
      increment(state) {
          state.counter++;
      },
      decrement(state) {
          state.counter--;
      },
      increaseByNo(state, action) {
        state.counter += action.payload;
      },
      decreaseByNo(state, action) {
          state.counter -= action.payload;
      },
  },
});

export const {toggleCounter, increment, decrement, increaseByNo, decreaseByNo} = CounterSlice.actions;
// export const CounterActions = CounterSlice.actions; // or by this way, both are allowed

export default CounterSlice.reducer;