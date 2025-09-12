import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col">
      <nav className="bg-blue-500 text-white">
        <div className="flex justify-between px-10 py-3 font-semibold">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="about" className="hover:underline">
            About
          </Link>
          <Link to="contact" className="hover:underline">
            Contact
          </Link>
          <Link to="products" className="hover:underline">
            Products
          </Link>
          <Link to="tasks" className="hover:underline">
            Task
          </Link>
        </div>
      </nav>
      <div className="p-4 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
