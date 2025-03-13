import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Linda Hillman Chayes
        </Link>
        <ul className={styles.links}>
          <li><Link href="/poetry">Poetry</Link></li>
          <li><Link href="/books">Books</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}