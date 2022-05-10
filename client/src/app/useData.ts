import { useDispatch, useSelector } from 'react-redux';
import { sendRequest } from './store/actions';
import { State } from './store/slices/counterSlice';

export const useData = () => {
  const dispatch = useDispatch();

  const counter = useSelector<State>((state) => {
    return state.counter.value;
  });

  const setCounter = () => dispatch<any>(sendRequest(6));

  return { counter, setCounter };
};
