import { useData } from './useData';

export const App = () => {
  const { counter, setCounter } = useData();

  return (
    <>
      {counter}
      <button
        style={{ fontFamily: 'inherit', cursor: 'pointer' }}
        onClick={setCounter}
      >
        Increment by 6
      </button>
    </>
  );
};
