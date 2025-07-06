import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Corrected import
import styles from './Navigation.module.css';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setMenuOpen(false);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Function to determine if a link is active
  const isActive = (pathname) => router.pathname === pathname;

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          Linda Hillman Chayes
        </Link>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="navigation-links"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <>&times;</> : <>&equiv;</> } {/* Simple X and Hamburger icons */}
        </button>

        <ul
          id="navigation-links"
          className={`${styles.links} ${menuOpen ? styles.open : ''}`}
        >
          <li><Link href="/poetry" className={isActive('/poetry') ? styles.activeLink : ''}>Poetry</Link></li>
          <li><Link href="/books" className={isActive('/books') ? styles.activeLink : ''}>Books</Link></li>
          <li><Link href="/about" className={isActive('/about') ? styles.activeLink : ''}>About</Link></li>
          <li><Link href="/contact" className={isActive('/contact') ? styles.activeLink : ''}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}