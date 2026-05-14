import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Header.module.css";

const activeStyles: React.CSSProperties = {
  backgroundColor: "var(--clr-primary)",
  color: "var(--clr-white)",
};

const navActiveStylesFunction = ({ isActive }: { isActive: boolean }) => {
  return isActive ? activeStyles : undefined;
};

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <nav className={styles.nav}>
        <NavLink style={navActiveStylesFunction} to={"/"}>
          {t("navigation.home")}
        </NavLink>
        <NavLink style={navActiveStylesFunction} to={"/formulas"}>
          {t("navigation.formulas")}
        </NavLink>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default Header;
