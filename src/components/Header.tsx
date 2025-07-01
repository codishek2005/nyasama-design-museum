import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <nav className={styles.header}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/" className={styles.home}>Home</Link>
                </li>
            </ul>
        </nav>
    );
}