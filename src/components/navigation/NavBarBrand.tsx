import { NavLink } from "react-router-dom";

export default function NavBarBrand() {
  return (
    <NavLink to="/" style={{ height: 32 }}>
      <img src="/logo-full.png" alt="Logo" style={{ height: 32 }} />
    </NavLink>
  );
}
