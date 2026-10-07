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
      className={`project-card${featured && project.tone ? ` selected-project--${project.tone}` : ""}`}
      href={`/projects/${project.slug}/`}
    >
      <span className="project-number">{project.number}</span>
      <span className="project-category">{project.category}</span>
      <span className="project-title">{project.title}</span>
      <span className="project-description">{project.description}</span>
      <span className="project-link">
        View Case Study
      </span>
    </Link>
  );
}

export default function Work() {
  return (
    <section className="work section-pad reveal" id="work">
      <div className="content-width">
        <div className="work-heading">
          <div>
            <p className="eyebrow">WORK</p>
            <h2 className="section-title">Selected Projects</h2>
          </div>
          <Link className="all-projects-link" href="/projects/">
            All Projects
          </Link>
        </div>
        <div className="selected-projects">
          {selectedProjects.map((project) => (
            <ProjectCard
              featured
              key={project.slug}
              project={project}
            />
          ))}
        </div>
        <div className="work-heading work-heading--microsoft">
          <div>
            <p className="eyebrow">WORK</p>
            <h2 className="section-title">Microsoft Projects</h2>
          </div>
          <Link className="all-projects-link" href="/projects/">
            All Projects
          </Link>
        </div>
        <div className="microsoft-projects">
          {microsoftProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
