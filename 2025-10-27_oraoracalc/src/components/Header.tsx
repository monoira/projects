import { NavLink } from "react-router";

import styles from "./Header.module.css";

const activeStyles: React.CSSProperties = {
  backgroundColor: "var(--clr-primary)",
  color: "var(--clr-white)",
};

const navActiveStylesFunction = ({ isActive }: { isActive: boolean }) => {
  return isActive ? activeStyles : undefined;
};

function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink style={navActiveStylesFunction} to={"/"}>
          Home
        </NavLink>
        <NavLink style={navActiveStylesFunction} to={"/formulas"}>
          Formulas
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
