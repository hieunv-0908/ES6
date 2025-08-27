import React, { useState, useCallback } from 'react';

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('');
  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value); 
    },
    [] 
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Color Picker</h2>
      <input type="color" value={color} onChange={handleChangeColor} />
      <div
        style={{
          marginTop: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: color || '#ffffff',
          border: '1px solid #000',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      ></div>

      <p>Selected Color: {color || 'None'}</p>
    </div>
  );
};

export default ColorPicker;
