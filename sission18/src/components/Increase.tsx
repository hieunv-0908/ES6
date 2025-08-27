import React, { useReducer } from 'react';

const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1; 
    default:
      return state; 
  }
};

const Increase: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, 0); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increase
      </button>
    </div>
  );
};

export default Increase;
