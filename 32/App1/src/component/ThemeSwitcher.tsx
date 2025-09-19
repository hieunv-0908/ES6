import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ThemeSwitcher = () => {
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  return (
    <label>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={() => dispatch({ type: 'TOGGLE_THEME' })}
      />
      {isDarkMode ? 'Tối' : 'Sáng'}
    </label>
  );
};

export default ThemeSwitcher;