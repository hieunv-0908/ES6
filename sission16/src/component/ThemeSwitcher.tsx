import React, { Component } from "react";

interface typeState {
  isDarkMode: boolean;
}

export default class ThemeSwitcher extends Component<{}, typeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkMode: false, // mặc định là chế độ sáng
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;

    const themeStyle: React.CSSProperties = {
      backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
      color: isDarkMode ? "#fff" : "#000",
      minHeight: "150px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "12px",
      padding: "20px",
    };

    return (
      <div style={themeStyle}>
        <h2>
          {isDarkMode ? "🌙 Chế độ Tối đang bật" : "☀️ Chế độ Sáng đang bật"}
        </h2>
        <button
          onClick={this.toggleTheme}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Chuyển theme
        </button>
      </div>
    );
  }
}
