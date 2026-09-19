import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import type { Project } from '../data/projects';

type Props = {
	project: Project;
	onOpenLightbox: (image: { src: string; alt: string }) => void;
};

export default function ProjectCard({ project, onOpenLightbox }: Props) {
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
					</a>
				)}
			</div>
		</li>
	);
}
