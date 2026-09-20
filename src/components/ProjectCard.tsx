import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import type { Project } from '../data/projects';

type Props = {
	project: Project;
	index: number;
	onOpenLightbox: (image: { src: string; alt: string }) => void;
};

export default function ProjectCard({ project, index, onOpenLightbox }: Props) {
	const { ref, visible } = useRevealOnScroll<HTMLLIElement>();

	return (
		<li ref={ref} className={`project-card${visible ? ' visible' : ''}`}>
			{project.screenshotRows.map((row, rowIndex) => (
				<div className="project-screenshots-row" key={rowIndex}>
					{row.screenshots.map((shot) => (
						<div
							className="screenshot-wrap"
							key={shot.src}
							onClick={() => onOpenLightbox(shot)}
						>
							<img
								src={shot.src}
								alt={shot.alt}
								className={row.variant === 'desktop' ? 'project-screenshot-desktop' : 'project-screenshot-mobile'}
							/>
						</div>
					))}
				</div>
			))}
			<div className="project-header">
				<span className="project-index">{String(index + 1).padStart(2, '0')}</span>
				<span className="project-name">{project.name}</span>
				{project.statuses.map((status) => (
					<span className={`project-status ${status.type}`} key={status.label}>
						{status.label}
					</span>
				))}
			</div>
			<p className="project-desc">{project.description}</p>
			<div className="project-footer">
				<ul className="project-tags">
					{project.tags.map((tag) => (
						<li key={tag}>{tag}</li>
					))}
				</ul>
				{project.link && (
					<a href={project.link.href} target="_blank" rel="noopener" className="project-link">
						{project.link.label}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12"
							height="12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M7 7h10v10" />
							<path d="M7 17 17 7" />
						</svg>
					</a>
				)}
			</div>
		</li>
	);
}
