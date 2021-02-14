import Link from 'next/link';
import styles from '../styles/components/header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>ひなたぼっこ</h1>
    <ul className={styles.nav}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/blog">Blog</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </header>
);

export default Header;
