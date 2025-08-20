import React from "react";

function Header() {
  return (
    <div style={{ background: "#cfd8dc", padding: "10px", textAlign: "center" }}>
      Header
    </div>
  );
}

function Navbar() {
  return (
    <div style={{ background: "#90a4ae", padding: "10px", textAlign: "center" }}>
      Navigation
    </div>
  );
}

function Menu() {
  return (
    <div style={{ background: "green", color: "white", padding: "20px" }}>
      Menu
    </div>
  );
}

function Article() {
  return (
    <div style={{ background: "#90caf9", padding: "20px" }}>
      Article
    </div>
  );
}

function Cart() {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #eee",
        padding: "20px",
        margin: "10px",
        textAlign: "center",
        width: "100px",
        height: "80px",
        display: "inline-block",
      }}
    >
      Cart
    </div>
  );
}

function Main() {
  const carts: React.ReactNode[] = [];   
  const list = Array(12).fill(null);

  list.forEach((_, i) => {
    carts.push(<Cart key={i} />);
  });

  return (
    <div style={{ background: "#ffebee", padding: "20px" }}>
      {carts}
    </div>
  );
}


export default function UserLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "200px" }}>
          <Menu />
        </div>
        <div style={{ flex: 1 }}>
          <Main />
        </div>
        <div style={{ width: "200px" }}>
          <Article />
        </div>
      </div>
    </div>
  );
}