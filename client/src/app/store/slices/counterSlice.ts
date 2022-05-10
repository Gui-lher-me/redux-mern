import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Counter {
  value: number;
}

export interface State {
  counter: Counter;
}

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, incrementByAmount, decrement } = counterSlice.actions;

export default counterSlice.reducer;
