import Link from "next/link";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const documents = [
  {
    type: "CV",
    title: "Curriculum Vitae",
    description: "Experience, selected work and professional background.",
    action: "Download CV",
    href: `${BASE}/documents/CV.pdf`,
  },
  {
    type: "NOTE",
    title: "Professional Growth & Positioning",
    description: "A little more about my direction, approach and growth.",
    action: "View Professional Growth and Positioning Statement",
    href: `${BASE}/documents/Professional%20Growth%20%26%20Positioning%20Statement.pdf`,
  },
  {
    type: "TECH",
    title: "Technology Expertise",
    description: "Platforms, tools and areas I work across.",
    action: "View Technology Expertise",
    href: `${BASE}/documents/Technology%20Expertise.pdf`,
  },
];

export default function CvPage() {
  return (
    <>
      <Nav variant="light" />
      <main className="subpage">
        <div className="subpage-inner">
          <p className="eyebrow"><span className="section-index">DOCUMENTS</span> A LITTLE MORE DETAIL</p>
          <h1>Experience, in<br /><em>my own words.</em></h1>
          <p className="subpage-intro">
            A few useful documents about my background and the work I do.
            Open or download the documents below.
          </p>
          <div className="document-list">
            {documents.map((document) => (
              <article className="document-card" key={document.type}>
                <span className="document-symbol">{document.type}</span>
                <div>
                  <h2>{document.title}</h2>
                  <p>{document.description}</p>
                </div>
                <a className="document-status" href={document.href} target="_blank" rel="noreferrer">
                  {document.action}
                </a>
              </article>
            ))}
          </div>
          <Link className="subpage-back" href="/">Back to the portfolio</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
