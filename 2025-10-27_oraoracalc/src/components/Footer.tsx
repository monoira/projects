import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <span>
        {t("footer.createdBy")}{" "}
        <a href="https://www.github.com/monoira">monoira</a> -{" "}
        {new Date().getFullYear()}
      </span>
    </footer>
  );
}

export default Footer;
