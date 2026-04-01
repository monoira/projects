import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Created by <a href="https://www.github.com/monoira">monoira</a> -{" "}
        {new Date().getFullYear()}
      </span>
    </footer>
  );
}

export default Footer;
