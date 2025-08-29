import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvide";

export default function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Nội dung chính</h2>
      <p>
        Theme hiện tại là: <b>{theme}</b>
      </p>
    </div>
  );
}