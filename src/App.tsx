import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPostPage from './pages/BlogPostPage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProjectsPage />} />
				<Route path="/posts/:slug" element={<BlogPostPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}
