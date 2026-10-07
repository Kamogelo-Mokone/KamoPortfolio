import Link from "next/link";
import {
  microsoftProjects,
  selectedProjects,
  type Project,
} from "../projects/project-data";

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link
      className={`gallery-card${featured ? " gallery-card--forest" : ""}${project.tone ? ` gallery-card--${project.tone}` : ""}`}
      href={`/projects/${project.slug}/`}
    >
      <span className="gallery-card-number">{project.number}</span>
      <span className="gallery-card-category">{project.category}</span>
      <span className="gallery-card-title">{project.title}</span>
      <span className="gallery-card-description">{project.description}</span>
      <span className="gallery-card-link">
        View Case Study
      </span>
    </Link>
  );
}

export default function ProjectsGallery() {
  return (
    <section className="projects-page">
      <div className="projects-page-inner">
        <div className="projects-page-heading">
          <div>
            <p className="eyebrow">WORK</p>
            <h1>Selected Projects</h1>
          </div>
          <Link className="projects-back" href="/#work">
            Back
          </Link>
        </div>

        <div className="gallery-selected-grid">
          {selectedProjects.map((project, index) => (
            <ProjectCard
              featured={index === 0}
              key={project.slug}
              project={project}
            />
          ))}
        </div>

        <div className="projects-page-heading projects-page-heading--microsoft">
          <div>
            <p className="eyebrow">WORK</p>
            <h2>Microsoft Projects</h2>
          </div>
          <Link className="projects-back" href="/#work">
            Back
          </Link>
        </div>

        <div className="gallery-microsoft-grid">
          {microsoftProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
