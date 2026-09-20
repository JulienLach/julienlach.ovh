import { Link, useLocation } from 'react-router-dom';

export default function Header() {
	const { pathname } = useLocation();

	return (
		<header className="header">
			{pathname === '/' ? (
				<h1 className="homeHeading">
					<Link to="/" className="home">
						Julien Lach
					</Link>
				</h1>
			) : (
				<Link to="/" className="home">
					Julien Lach
				</Link>
			)}
			<nav className="nav">
				<Link to="/" className={pathname === '/' ? 'active' : undefined}>
					Projects
				</Link>
			</nav>
		</header>
	);
}
