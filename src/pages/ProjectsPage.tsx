import { useState } from "react";
import GithubActivity from "../components/GithubActivity";
import Lightbox from "../components/Lightbox";
import ProjectCard from "../components/ProjectCard";
import avatarImg from "../assets/images/avatar.webp";
import { SITE_TITLE } from "../consts";
import { projects } from "../data/projects";
import { TECH_STACK } from "../data/techStack";
import { useDocumentHead } from "../hooks/useDocumentHead";

export default function ProjectsPage() {
    useDocumentHead(
        `${SITE_TITLE} - Développeur`,
        "Julien Lach - développeur d'applications en France. Je conçois des applications web, des outils d'automatisation et des workflows assistés par l'IA avec TypeScript, React et Node.js.",
    );

    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <>
            <main>
                <section className="profile">
                    <img src={avatarImg} alt="Julien Lach" width={115} height={115} className="avatar" />
                    <div className="bio">
                        <div className="title-row">
                            <h1 className="name">Julien Lach</h1>
                            <span className="title-separator" aria-hidden="true">
                                -
                            </span>
                            <span className="title">Développeur</span>
                            <a
                                href="https://www.linkedin.com/company/acai-france/posts/"
                                target="_blank"
                                rel="noopener"
                                className="work-status"
                            >
                                Actuellement chez ACAI
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
                        </div>
                        <span className="stack">
                            Applications web, workflows et automatisations IA pour les entreprises.
                        </span>
                        <div className="social">
                            <a href="https://github.com/JulienLach" target="_blank" rel="noopener" aria-label="GitHub">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/in/julienlach"
                                target="_blank"
                                rel="noopener"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="mailto:julien.lach@outlook.com" aria-label="Email">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </a>
                            <GithubActivity />
                        </div>
                    </div>
                </section>
                <section className="intro">
                    <p>
                        Développeur d'applications basé en France, j'accompagne les équipes et les entreprises dans leur
                        digitalisation : je conçois, développe et déploie des outils sur mesure qui répondent à de
                        vrais besoins métier.
                    </p>
                    <p>
                        Mes derniers projets : plateformes SaaS, intégrations ERP et PWA mobiles. J'y ajoute souvent un
                        serveur MCP, pour que l'outil se pilote aussi en langage naturel.
                    </p>
                </section>
                <section className="working-with">
                    <h2>Technologies</h2>
                    <ul className="techList">
                        {TECH_STACK.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </section>
                <h2>Projets</h2>
                <ul className="project-list">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onOpenLightbox={setLightboxImage}
                        />
                    ))}
                </ul>
            </main>
            <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
        </>
    );
}
