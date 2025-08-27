import React, { useReducer } from 'react';

interface Action {
  type: string;
  payload?: string;
}

const reducer = (state: string, action: Action): string => {
  switch (action.type) {
    case 'SET_TEXT':
      return action.payload || ''; 
    default:
      return state; 
  }
};

const InputText: React.FC = () => {
  const [text, dispatch] = useReducer(reducer, '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_TEXT', payload: e.target.value });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Input Text Example</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập chuỗi tại đây"
        style={{ padding: '5px', width: '250px' }}
      />
      <p style={{ marginTop: '20px' }}>Bạn đã nhập: {text}</p>
    </div>
  );
};

export default InputText;
