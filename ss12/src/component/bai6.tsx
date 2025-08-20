export default function Admin() {
  const Header = () => (
    <header style={{ background: "#e0e0e0", padding: "10px", textAlign: "center" }}>
      Header
    </header>
  );

  const Menu = () => (
    <aside style={{ background: "#1e3a8a", color: "white", width: "200px", padding: "10px" }}>
      Menu
    </aside>
  );

  const Main = () => (
    <main style={{ flex: 1, padding: "10px", textAlign: "center" }}>
      Main
    </main>
  );

  const Footer = () => (
    <footer style={{ background: "#e0e0e0", padding: "10px", textAlign: "center" }}>
      Footer
    </footer>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />

      <div style={{ display: "flex", flex: 1 }}>
        <Menu />
        <Main />
      </div>

      <Footer />
    </div>
  );
}