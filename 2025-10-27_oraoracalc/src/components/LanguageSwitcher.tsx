import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      className={styles.switcher}
      value={i18n.resolvedLanguage || i18n.language}
      onChange={handleLanguageChange}
    >
      <option value="en">English</option>
      <option value="ka">ქართული</option>
    </select>
  );
}

export default LanguageSwitcher;
