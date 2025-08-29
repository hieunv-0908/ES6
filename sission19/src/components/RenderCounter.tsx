import React, { useState, useRef, useEffect } from "react";

export default function RenderCounter() {
  const [value, setValue] = useState("");

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Render Counter</h2>
      <input
        type="text"
        value={value}
        placeholder="Nhập giá trị"
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: "6px", fontSize: "16px" }}
      />
      <p>Giá trị nhập: {value}</p>
      <p>Số lần render: {renderCount.current}</p>
    </div>
  );
}