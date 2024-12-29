import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} p20`}>
      <h1 className={styles.title}>Global NEWS</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  )
}

export default Header