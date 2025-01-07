import { ThemeButton } from "@/features/theme";
import { formatDate } from "@/shared/helpers/formatDate";
import styles from "./styles.module.css";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { isDark } = useTheme();

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light} p20`}>
      <Link to={"/"}>
        <div className={styles.logo}>
          <h1 className={styles.title}>Global NEWS</h1>
          <p className={styles.date}>{formatDate(new Date())}</p>
        </div>
      </Link>
      
      <ThemeButton />
    </header>
  )
}

export default Header