import { Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
	const { pathname } = useLocation();

	function toggleTheme() {
		const root = document.documentElement;
		const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
		root.dataset.theme = next;
		localStorage.setItem('theme', next);
	}

	return (
		<header className={styles.header}>
			<Link to="/" className={styles.home}>
				Julien Lach
			</Link>
			<nav className={styles.nav}>
				<Link to="/" className={pathname === '/' ? styles.active : undefined}>
					Projects
				</Link>
				<button className={styles.themeToggle} aria-label="Toggle theme" onClick={toggleTheme}>
					<Sun className={styles.iconSun} size={16} strokeWidth={1.5} />
					<Moon className={styles.iconMoon} size={16} strokeWidth={1.5} />
				</button>
			</nav>
		</header>
	);
}
