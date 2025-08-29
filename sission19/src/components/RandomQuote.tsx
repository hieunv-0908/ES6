import React, { useState } from "react";

const quotes = [
  "Học, học nữa, học mãi.",
  "Thất bại là mẹ thành công.",
  "Không gì là không thể.",
  "Kiến tha lâu đầy tổ.",
  "Nếu không thể làm nó một mình, muốn ai đó cùng đi với bạn.",
];

function RandomQuote() {
  const [quote, setQuote] = useState<string>(quotes[2]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div
      style={{ padding: "20px", maxWidth: "400px", fontFamily: "sans-serif" }}
    >
      <h3>Câu nói truyền cảm hứng hôm nay:</h3>
      <p
        style={{ fontStyle: "italic", fontSize: "18px", color: "#333" }}
      >{`"${quote}"`}</p>
      <button
        onClick={getRandomQuote}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Lấy câu nói mới
      </button>
    </div>
  );
}

export default RandomQuote;