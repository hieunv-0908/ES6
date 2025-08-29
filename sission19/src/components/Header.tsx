import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvide";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ padding: "10px", borderBottom: "1px solid #aaa" }}>
      <button onClick={toggleTheme}>
        Chuyển sang {theme === "light" ? "Dark" : "Light"} mode
      </button>
    </header>
  );
}