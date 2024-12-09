import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      {`Copyright by Irakli Tatarashvili - ${new Date().getFullYear()}`}
    </footer>
  );
}

export default Footer;
