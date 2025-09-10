import { NavLink } from "react-router-dom";
import "../css/header.css"; 

export default function Header() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/detail">Detail</NavLink>
    </nav>
  );
}
