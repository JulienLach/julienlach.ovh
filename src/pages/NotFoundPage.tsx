import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { SITE_TITLE } from '../consts';
import { useDocumentHead } from '../hooks/useDocumentHead';

export default function NotFoundPage() {
	useDocumentHead(`Not found - ${SITE_TITLE}`, 'Page not found');

	return (
		<>
			<Header />
			<main>
				<p>Page not found.</p>
				<p>
					<Link to="/">← back to index</Link>
				</p>
			</main>
		</>
	);
}
