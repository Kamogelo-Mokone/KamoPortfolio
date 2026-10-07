import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { getProjectBySlug, projects } from "../project-data";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

function ProjectPreview({
  image,
  imageSize,
  title,
}: {
  image?: string;
  imageSize?: { width: number; height: number };
  title: string;
}) {
  if (image && imageSize) {
    return (
      <Image
        alt={`${title} project design`}
        className="project-case-image"
        height={imageSize.height}
        loading="eager"
        src={`${BASE}${image}`}
        unoptimized
        width={imageSize.width}
      />
    );
  }

  return (
    <div className="project-preview-placeholder">
      <span className="preview-placeholder-mark">KM</span>
      <p>PROJECT OVERVIEW</p>
      <h3>{title}</h3>
      <span>Selected work · Kamogelo Mokone</span>
    </div>
  );
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const metadata = [
    ["Product Area", project.metadata.area],
    ["Focus", project.metadata.focus],
    ["Role", project.metadata.role],
    ["Scope", project.metadata.scope],
    ["Status", project.metadata.status],
  ];

  return (
    <>
      <Nav variant="light" />
      <main className="case-study-page">
        <div className="case-study-inner">
          <div className="case-study-heading">
            <div>
              <p className="eyebrow">WORK</p>
              <h1>Selected Projects</h1>
            </div>
            <Link className="projects-back" href="/projects/">
              Back
            </Link>
          </div>

          <section aria-labelledby="case-title" className="case-intro">
            <p className="case-category">{project.category}</p>
            <h2 id="case-title">
              {project.slug === "freebird" ? "Freebird" : project.title}
            </h2>
            <p>{project.detail}</p>
          </section>

          <dl className="case-metadata">
            {metadata.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <section aria-label={`${project.title} project preview`} className="case-preview">
            <ProjectPreview
              image={project.image}
              imageSize={project.imageSize}
              title={project.title}
            />
          </section>

          <section aria-labelledby="case-context-title" className="case-context">
            <p className="eyebrow">DESIGN DECISIONS</p>
            <h2 id="case-context-title">Deeper Context</h2>
            <ol>
              {project.rationale.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          {project.whyItMatters && (
            <section
              aria-labelledby="case-importance-title"
              className="case-importance"
            >
              <h2 id="case-importance-title">Why This Matters</h2>
              <div>
                {project.whyItMatters.map(({ audience, context }) => (
                  <p key={audience}>
                    <strong>{audience}</strong> {context}
                  </p>
                ))}
              </div>
            </section>
          )}

          {project.reflection && (
            <section
              aria-labelledby="case-reflection-title"
              className="case-reflection"
            >
              <h2 id="case-reflection-title">Reflection</h2>
              <h3>What worked well.</h3>
              <div className="reflection-grid">
                {project.reflection.strengths.map(({ title, detail }) => (
                  <article className="reflection-card" key={title}>
                    <h4>{title}</h4>
                    <p>{detail}</p>
                  </article>
                ))}
              </div>
              <h3>What I would improve or revisit.</h3>
              <div className="reflection-grid reflection-grid--improvements">
                {project.reflection.improvements.map(({ title, detail }) => (
                  <article className="reflection-card" key={title}>
                    <h4>{title}</h4>
                    <p>{detail}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {project.learned && (
            <section
              aria-labelledby="case-learnings-title"
              className="case-learnings"
            >
              <h2 id="case-learnings-title">What I learned.</h2>
              <p>{project.learned}</p>
            </section>
          )}

          <Link className="case-back-link" href="/projects/">
            Back to all projects
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
