import React, { useState } from "react";

export default function CheckBox() {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value: val } = e.target;
    if (checked) {
      setValue((prev) => [...prev, val]);
    } else {
      setValue((prev) => prev.filter((v) => v !== val));
    }
  };

  return (
    <div>
      <span>Sở thích: {value.join(", ")}</span>
      <br />
      <label>
        <input type="checkbox" value="Đi chơi" onChange={handleChange} />
        Đi chơi
      </label>
      <label>
        <input type="checkbox" value="Code" onChange={handleChange} />
        Code
      </label>
      <label>
        <input type="checkbox" value="Bơi lội" onChange={handleChange} />
        Bơi lội
      </label>
      <label>
        <input type="checkbox" value="Nhảy dây" onChange={handleChange} />
        Nhảy dây
      </label>
    </div>
  );
}
