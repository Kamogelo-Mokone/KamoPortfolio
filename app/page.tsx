import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Work from "./components/Work";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const strengths = [
  ["PROBLEM SOLVING", "Problem Solving", "I enjoy untangling complex business challenges and finding practical solutions that people actually use."],
  ["AI ENABLEMENT", "AI Training & Adoption", "Helping teams understand, embrace, and use AI tools confidently through hands-on learning and real-world examples."],
  ["AUTOMATION", "Process Automation", "Identifying repetitive work and transforming it into streamlined workflows that save time and reduce manual effort."],
  ["INNOVATION", "Rapid Prototyping", "Turning ideas into working solutions quickly, making it easier to validate concepts and gather feedback."],
  ["COMMUNICATION", "Clear Communication", "Connecting the dots between people, requirements and technology to create a shared direction."],
  ["DESIGN SYSTEMS", "Design Guidelines & Systems", "Creating scalable design foundations that ensure consistency across products, platforms, and user experiences."],
  ["USER EXPERIENCE", "UI/UX Design", "Designing intuitive, user-centered experiences that make digital solutions easy, engaging, and effective."],
  ["DESIGN PROCESS", "Design Workflow", "Moving from discovery and wireframes to polished solutions through a structured, iterative design approach."],
  ["DIGITAL WORKPLACE", "Experience Design", "Crafting modern workplace experiences that improve collaboration, communication, and employee engagement."],
  ["ARCHITECTURE", "Solution Design", "Connecting business requirements, platforms, and technologies into scalable, maintainable solutions."],
];

const expertise = [
  {
    symbol: "◈",
    icon: "PowerApps.png",
    tone: "expertise-symbol--purple",
    title: "Power Platform",
    description: "Canvas App architecture, PowerFX logic, UI/UX, SharePoint-backed data storage, role-based permissions, governance.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
  },
  {
    symbol: "S",
    icon: "SharePoint.png",
    tone: "expertise-symbol--blue",
    title: "SharePoint & SPFx",
    description: "List architecture, data modeling, permission governance, Communication Sites, custom SPFx web parts in React & TypeScript.",
    tags: ["SPFx", "React", "Agile", "TypeScript", "UI"],
  },
  {
    symbol: "✦",
    icon: "CopilotStudio.png",
    tone: "expertise-symbol--cyan",
    title: "AI & Copilot Studio",
    description: "Conversational agent design, multi-step scenario flows, Power Platform integration, content-aware instruction building.",
    tags: ["Copilot Studio", "MS Copilot Studio", "Conversational AI"],
  },
  {
    symbol: "◉",
    icon: "M365.png",
    tone: "expertise-symbol--rainbow",
    title: "Solution Architecture",
    description: "Stakeholder workshops, requirements translation, scalable system design, UI prototyping, technical documentation.",
    tags: ["Solution Design", "REST APIs", "Data Architecture"],
  },
];

function RoleIcons() {
  return (
    <div className="role-bar" aria-label="Developer, designer and consultant">
      <div>
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4m-4-9 3-3m-3 3 3 3m5-6-3 3m3 0-3 3" /></svg>
        <span>DEVELOPER</span>
      </div>
      <div>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h4v6H8a3 3 0 0 1 0-6Zm4 0h4a3 3 0 1 1 0 6h-4V3Zm-4 6h4v6H8a3 3 0 1 1 0-6Zm4 0h4a3 3 0 1 1 0 6h-4V9Zm-4 6h4v3a3 3 0 1 1-4-3Z" /></svg>
        <span>DESIGNER</span>
      </div>
      <div>
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></svg>
        <span>CONSULTANT</span>
      </div>
    </div>
  );
}

function AboutPortrait() {
  return (
    <div className="portrait">
      <Image
        alt="Kamogelo Mokone"
        className="portrait-image"
        fill
        sizes="(max-width: 900px) 88vw, 42vw"
        src={`${BASE}/ProfilePicture.png`}
        unoptimized
      />
      <div className="portrait-glow" />
      <span className="portrait-name">KAMOGELO MOKONE</span>
      <span className="location-pill"><span>✳</span> Midrand, SA</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="availability"><span /> Available for new opportunities</p>
            <h1>I build technology<br /><em>with intention.</em></h1>
            <p className="hero-subtitle">Designing enterprise systems that are<br className="desktop-break" /> scalable, human-centered, and built to last.</p>
            <div className="hero-actions">
              <a className="button button--lime" href="#work">View My Work</a>
              <a className="button button--ghost" href="#contact">Let&apos;s Talk</a>
            </div>
            <RoleIcons />
          </div>
          <span className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></span>
        </section>

        <section className="about section-pad reveal" id="about">
          <div className="about-grid content-width">
            <AboutPortrait />
            <div className="about-copy">
              <p className="eyebrow">ABOUT</p>
              <h2>Engineering meets<br />creative intent.</h2>
              <p>
                I&apos;m a <strong>Microsoft Power Platform, SharePoint, AI Solutions Developer,</strong> and <strong>UI/UX designer</strong> based in Midrand, South Africa. My work sits at the intersection of structured engineering and creative problem-solving where technology becomes a tool to build thoughtful, human-centered systems.
              </p>
              <p>
                I design and build solutions across the Microsoft ecosystem, from Power Apps and automation workflows to SharePoint architectures and conversational AI agents. I enjoy taking complex ideas or business challenges and translating them into clear, scalable digital solutions that people can actually use and understand.
              </p>
              <p>
                Beyond development, I see myself as a creative technologist. I&apos;m naturally drawn to writing, reflection, and exploring ideas around identity, growth, and the role technology plays in our lives. That perspective influences how I approach building software with intention, empathy, and a long-term mindset.
              </p>
              <p>
                I&apos;m continuously evolving toward enterprise architecture and AI-driven strategy, focusing not only on delivering solutions but on designing systems that grow with people and organizations over time. At the core of my work is a simple philosophy: build with <strong>integrity, creativity, and the long game in mind.</strong>
              </p>
              <blockquote>Digital systems should reduce friction, not create it. They should empower teams, not overwhelm them.</blockquote>
              <div className="about-actions">
                <Link className="button button--forest" href="/cv/">Download CV</Link>
                <a className="button button--light-outline" href="#contact">Contact Me</a>
              </div>
            </div>
          </div>
        </section>

        <section className="insights section-pad reveal" id="insights">
          <div className="content-width">
            <p className="eyebrow">INSIGHT</p>
            <h2 className="section-title">Things I&apos;m suspiciously good at</h2>
            <p className="insights-intro">When requirements live in emails, Teams chats, meeting notes, and someone&apos;s head, I enjoy connecting the dots and turning them into something actionable.</p>
            <p className="insights-punchline">Usually ends with UI/UX, a workflow, a SharePoint site, or a Power App.</p>
            <div className="strength-grid">
              {strengths.map(([label, title, description], index) => (
                <article className={`strength-card${index > 7 ? " strength-card--wide" : ""}`} key={label + title}>
                  <span className="card-kicker">{label}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="career section-pad reveal" id="career">
          <div className="content-width">
            <p className="eyebrow">CAREER</p>
            <h2 className="section-title">Snapshot</h2>
            <p className="career-intro">When requirements live in emails, Teams chats, meeting notes, and someone&apos;s head, I enjoy connecting the dots and turning them into something actionable.</p>
            <div className="career-grid">
              <article className="career-card">
                <p className="career-role">Power Platform Consultant</p>
                <h3>A Journey Through Technology, Design &amp; Innovation</h3>
                <p>Over the years, I&apos;ve evolved from supporting technology solutions to designing and delivering modern digital workplace experiences. Today, I help organizations unlock the full potential of Microsoft 365, Power Platform, SharePoint, and AI through thoughtful design, practical innovation, and user-focused solutions.</p>
                <div className="career-tags"><span>Power Apps</span><span>Power Automate</span><span>SharePoint</span><span>Copilot Studio</span><span>UI Design</span><span>PowerFX</span><span>SPFx</span><span>Wireframing &amp; UI Prototyping</span></div>
                <div className="career-highlights">
                  <div><strong>5+</strong><span>Years of Experience</span><small>Delivering digital workplace, automation, and business productivity solutions.</small></div>
                  <div><strong>20+</strong><span>Projects Delivered</span><small>Across SharePoint, Power Platform, Microsoft 365, and AI.</small></div>
                  <div><strong>Microsoft 365</strong><span>Specialist</span><small>SharePoint, Teams, Viva, Power Apps, Copilot, Power Platform.</small></div>
                </div>
                <p className="career-note">The longer version lives in the CV.</p>
                <Link className="small-outline" href="/cv/">CV</Link>
                <p className="stats-label">Snapshot Stats</p>
                <div className="snapshot-stats">
                  <div><strong>2+ Years</strong><span>Professional Microsoft Platform Experience</span></div>
                  <div><strong>20+ Apps</strong><span>Power Apps Solutions Delivered</span></div>
                  <div><strong>4+ Workflows</strong><span>Power Automate Implementations</span></div>
                  <div><strong>Multiple AI Agents</strong><span>Built with Microsoft Copilot Studio</span></div>
                  <div><strong>Microsoft 365 Specialist</strong><span>SharePoint, Teams, Power Platform &amp; Copilot</span></div>
                  <div><strong>Consultant &amp; Developer</strong><span>Bridging business needs and technical solutions</span></div>
                </div>
              </article>
              <article className="career-card career-card--experience">
                <div className="experience-heading"><h3>First Digital</h3><span>January 2024 – Present</span></div>
                <h4>Software Consultant &amp; Developer</h4>
                <p>Over the years, I&apos;ve evolved from supporting technology solutions to designing and delivering modern digital workplace experiences. Today, I help organizations unlock the full potential of Microsoft 365, Power Platform, SharePoint, and AI through thoughtful design, practical innovation, and user-focused solutions.</p>
                <h4>Designing Solutions That Drive Impact</h4>
                <p>Transitioned into a client-facing consulting and development role focused on delivering modern workplace, automation, collaboration, and AI-powered solutions using Microsoft technologies.</p>
                <h4>Highlights &amp; Achievements</h4>
                <ul>
                  <li>Power Apps Development</li>
                  <li>Automation &amp; Workflows</li>
                  <li>AI &amp; Copilot Solutions</li>
                  <li>SharePoint Solutions</li>
                  <li>Solution Design &amp; Architecture</li>
                  <li>Stakeholder Engagement</li>
                  <li>Technical Documentation</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <Work />

        <section className="expertise section-pad reveal" id="expertise">
          <div className="content-width">
            <p className="eyebrow">EXPERTISE</p>
            <h2 className="section-title">What I work with.</h2>
            <article className="figma-card">
              <span className="expertise-symbol expertise-symbol--figma">
                <Image alt="" height={35} src={`${BASE}/icons/Figma.png`} unoptimized width={35} />
              </span>
              <h3>Figma</h3>
              <p>I&apos;m highly skilled in Figma with a deep understanding of the full design workflow, from wireframing and ideation to building fully realized screens and interactive prototypes. I excel at creating design systems that ensure consistency, scalability, and efficiency across projects, and I can translate design requirements into intuitive user-friendly interfaces. Whether it&apos;s crafting detailed UI layouts, interactive flows, or polished high-fidelity prototypes, I use Figma to bring ideas to life with precision, clarity, and an eye for both aesthetics and functionality.</p>
              <div className="expertise-tags"><span>Wireframing</span><span>Design Systems</span><span>Prototyping</span></div>
            </article>
            <div className="expertise-grid">
              {expertise.map((item) => (
                <article className="expertise-card" key={item.title}>
                  <span className={`expertise-symbol ${item.tone}`}>
                    <Image alt="" height={35} src={`${BASE}/icons/${item.icon}`} unoptimized width={35} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="expertise-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-pad reveal" id="contact">
          <div className="content-width contact-content">
            <p className="eyebrow">LET&apos;S CONNECT</p>
            <h2>Ready to build<br />something real?</h2>
            <p>Whether it&apos;s an enterprise solution, an AI integration, or a strategy conversation — I&apos;m here.</p>
            <div className="contact-actions">
              <a className="contact-chip" href="mailto:mokonegelo@gmail.com"><span>✉</span> mokonegelo@gmail.com</a>
              <a className="contact-chip" href="https://linkedin.com/in/kamo-mokone" target="_blank" rel="noreferrer"><span>in</span> linkedin.com/in/kamo-mokone</a>
              <a className="contact-chip" href="https://github.com/Kamogelo-Mokone" target="_blank" rel="noreferrer"><span>⌘</span> github.com/Kamogelo-Mokone</a>
              <Link className="button button--lime" href="/cv/">Download CV</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
