import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const activeStyles: React.CSSProperties = {
  backgroundColor: "var(--customMint)",
  color: "var(--customBrilliantWhite)",
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
