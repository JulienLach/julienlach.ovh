import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { SITE_TITLE } from '../consts';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { getPostBySlug } from '../lib/posts';
import NotFoundPage from './NotFoundPage';
import styles from './BlogPostPage.module.css';

function formatDate(date: Date) {
	return date.toISOString().slice(0, 10);
}

export default function BlogPostPage() {
	const { slug } = useParams<{ slug: string }>();
	const post = slug ? getPostBySlug(slug) : undefined;

	useDocumentHead(post ? post.title : `Not found - ${SITE_TITLE}`, post?.description ?? '');

	if (!post) return <NotFoundPage />;

	return (
		<>
			<Header />
			<main>
				<article>
					<header className={styles.header}>
						<Link to="/" className={styles.back}>
							← index
						</Link>
						<h1 className={styles.h1}>{post.title}</h1>
						<time className={styles.time}>{formatDate(post.pubDate)}</time>
						{post.updatedDate && (
							<span className={styles.updated}> · mis à jour le {formatDate(post.updatedDate)}</span>
						)}
					</header>
					<hr />
					<div className={styles.prose}>
						<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
							{post.content}
						</ReactMarkdown>
					</div>
				</article>
			</main>
		</>
	);
}
