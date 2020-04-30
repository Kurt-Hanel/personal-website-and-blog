import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <li className={styles.li}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/writings">
          <a>Writings</a>
        </Link>
      </li>
    </nav>
  );
}
