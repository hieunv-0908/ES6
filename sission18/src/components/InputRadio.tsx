import React, { useReducer } from 'react';

interface Action {
  type: string;
  payload?: string;
}

const reducer = (state: string, action: Action): string => {
  switch (action.type) {
    case 'SET_GENDER':
      return action.payload || state; 
    default:
      return state;
  }
};

const InputRadio: React.FC = () => {
  const [gender, dispatch] = useReducer(reducer, 'Nam');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_GENDER', payload: e.target.value });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Chọn giới tính</h2>

      <div>
        <label style={{ marginRight: '10px' }}>
          <input
            type="radio"
            name="gender"
            value="Nam"
            checked={gender === 'Nam'}
            onChange={handleChange}
          />
          Nam
        </label>

        <label style={{ marginRight: '10px' }}>
          <input
            type="radio"
            name="gender"
            value="Nữ"
            checked={gender === 'Nữ'}
            onChange={handleChange}
          />
          Nữ
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Khác"
            checked={gender === 'Khác'}
            onChange={handleChange}
          />
          Khác
        </label>
      </div>

      <p style={{ marginTop: '20px' }}>Giới tính đang chọn: {gender}</p>
    </div>
  );
};

export default InputRadio;
