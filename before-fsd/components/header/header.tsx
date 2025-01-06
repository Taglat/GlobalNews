import { themeIcons } from "../../assets/images";
import { useTheme } from "../../context/theme-context";
import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light} p20`}>
      <div className={styles.logo}>
        <h1 className={styles.title}>Global NEWS</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <img
        src={isDark ? themeIcons.dark : themeIcons.light}
        width={30}
        alt="theme"
        onClick={toggleTheme}
      />
    </header>
  )
}

export default Header