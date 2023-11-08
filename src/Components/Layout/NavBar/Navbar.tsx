import styles from "./NavBar.module.css";
import Logo from "../../../Logo/Ignite-logo.svg";

export const NavBar = () => {
  return (
    <div className={styles.container_nav}>
      <header>
        <img src={Logo} alt="logo-projeto" />
        <strong>Ignite Feed</strong>
      </header>
    </div>
  );
};
