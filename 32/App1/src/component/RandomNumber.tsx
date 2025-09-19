import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const RandomNumber = () => {
  const numbers = useSelector((state: any) => state.randomNumbers);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Random Number Generator</h2>
      <p>{JSON.stringify(numbers)}</p>
      <button onClick={() => dispatch({ type: 'GENERATE_RANDOM' })}>
        Generate Random Number
      </button>
    </div>
  );
};

export default RandomNumber;