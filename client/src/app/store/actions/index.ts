import { PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { incrementByAmount } from '../slices/counterSlice';

export const sendRequest =
  (data: number) => async (dispatch: Dispatch<PayloadAction<number>>) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const responseData = await res.json();
    console.log(responseData);
    dispatch(incrementByAmount(data));
  };
