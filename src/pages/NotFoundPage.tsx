import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { SITE_TITLE } from '../consts';
import { useDocumentHead } from '../hooks/useDocumentHead';

export default function NotFoundPage() {
	useDocumentHead(`Page introuvable - ${SITE_TITLE}`, 'Page introuvable', true);

	return (
		<>
			<Header />
			<main>
				<p>Page introuvable.</p>
				<p>
					<Link to="/">← retour à l&apos;accueil</Link>
				</p>
			</main>
		</>
	);
}
