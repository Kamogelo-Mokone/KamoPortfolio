export type Project = {
  slug: string;
  number: string;
  section: "selected" | "microsoft";
  category: string;
  title: string;
  description: string;
  detail: string;
  image?: string;
  imageSize?: { width: number; height: number };
  tone?: "forest" | "teal";
  metadata: {
    area: string;
    focus: string;
    role: string;
    scope: string;
    status: string;
  };
  rationale: string[];
  whyItMatters?: { audience: string; context: string }[];
  reflection?: {
    strengths: { title: string; detail: string }[];
    improvements: { title: string; detail: string }[];
  };
  learned?: string;
};

export const projects: Project[] = [
  {
    slug: "streetwear-e-commerce",
    number: "01",
    section: "selected",
    category: "WEB APP",
    title: "OFFGRID",
    image: "/projects/OFFGRID.png",
    imageSize: { width: 1602, height: 861 },
    description:
      "A mobile-first e-commerce concept designed to showcase clothing collections, curated outfits, and seamless product discovery through a clean, modern interface.",
    detail:
      "A mobile-first e-commerce concept designed to showcase clothing collections, curated outfits, and seamless product discovery through a clean, modern interface.",
    tone: "forest",
    metadata: {
      area: "Fashion e-commerce",
      focus: "Product discovery",
      role: "UI/UX designer",
      scope: "Collections, products & shopping",
      status: "Concept design",
    },
    rationale: [
      "A collection-led entry point gives the brand room to tell a story before asking people to browse individual products.",
      "Clear product groupings and curated outfits help shoppers move from inspiration to a considered purchase.",
      "A mobile-first layout keeps product imagery and key actions easy to scan on smaller screens.",
    ],
  },
  {
    slug: "freebird",
    number: "02",
    section: "selected",
    category: "WEBSITE",
    title: "Freebird",
    image: "/projects/Freebird.png",
    imageSize: { width: 1477, height: 1089 },
    description:
      "A modern platform concept designed to connect freelancers with opportunities through a streamlined search experience and visually engaging interface.",
    detail:
      "A modern platform concept designed to connect freelancers with opportunities through a streamlined search experience and visually engaging interface.",
    tone: "teal",
    metadata: {
      area: "Two-sided freelance marketplace",
      focus: "Landing page & job discovery",
      role: "UI/UX designer",
      scope: "Homepage, search, categories & trust",
      status: "Concept — desktop design",
    },
    rationale: [
      "A search-first entry point speaks to both sides of the marketplace. Visitors can identify as a freelancer looking for work or choose the type of work they need, then move straight into search.",
      "A playful visual identity uses a bright illustrated character, colourful accents and a soft teal-to-lime gradient to make the experience feel energetic and approachable.",
      "Category exploration is treated as visual browsing. Image-led category tiles make different kinds of work easier to scan than a plain list.",
      "Success stories and visible ratings add social proof near the discovery experience, helping new visitors understand the scale and credibility of the community.",
      "The homepage brings search, categories, community stories and newsletter signup into one guided journey, while keeping the primary job-search action easy to find.",
    ],
    whyItMatters: [
      {
        audience: "For the business.",
        context:
          "A marketplace lives or dies on liquidity, meaning enough freelancers and enough clients showing up and finding each other. The homepage is the main place that gets decided. By giving each audience its own section and offering search at both the top and bottom of the page, the design reduces the chance that a visitor leaves without taking a step toward signing up or searching.",
      },
      {
        audience: "For freelancers.",
        context:
          "Many freelancers feel that platforms treat them as interchangeable. Framing the product around work they “actually love,” showing real success stories, and using warm, human imagery speaks to motivation and fit, not just job listings.",
      },
      {
        audience: "For clients.",
        context:
          "Companies, individuals and local businesses all have different anxieties: speed and reliability, budget and ease, and trust and proximity, respectively. Addressing these separately shows that the platform understands who is using it.",
      },
      {
        audience: "For the market.",
        context:
          "The design carries a South African identity through its flags and its local business angle. A platform that treats local businesses as a first-class audience can build a niche that global competitors often overlook.",
      },
      {
        audience: "For me as a designer.",
        context:
          "This project shows end-to-end thinking on a single, content-heavy page: information hierarchy, a consistent colour system for actions, audience segmentation, and layouts that balance imagery with copy. It demonstrates that I can take a business idea and turn it into a clear, scannable, conversion-minded interface.",
      },
    ],
    reflection: {
      strengths: [
        {
          title: "Clear hierarchy and rhythm.",
          detail:
            "The page alternates between tinted bands (mint blue for social proof and category browsing) and white sections, which gives it a natural reading rhythm and clear section breaks.",
        },
        {
          title: "Consistent action colour.",
          detail:
            "Lime is reserved for calls to action and interactive controls, so users learn quickly what to click.",
        },
        {
          title: "Segmented storytelling.",
          detail:
            "The two-audience zig-zag layout keeps a long page engaging and avoids a one-size-fits-all pitch.",
        },
        {
          title: "Search in the right places.",
          detail:
            "Putting search in the hero and again before the category grid supports both decisive and exploratory visitors.",
        },
      ],
      improvements: [
        {
          title: "Content consistency.",
          detail:
            "The design currently shows slightly conflicting figures: “Over 4200 freelancers” in the hero and “Over 5,000 Active Jobs” in the success stories and category sections. These need clean, verified numbers (and a typo fix for “4000”) before launch.",
        },
        {
          title: "Placeholder content.",
          detail:
            "The testimonial text is lorem ipsum, the company logo slots are empty grey blocks, and the filter button reads “Button”. Real copy and labels are needed to judge how the layout holds up with actual content lengths.",
        },
        {
          title: "Repeated hero copy.",
          detail:
            "The hero headline is repeated almost word for word in the second section. That space could carry a different message, such as how it works or a key differentiator.",
        },
        {
          title: "Filter labelling.",
          detail:
            "Two dropdowns are both labelled “Category”, which could confuse users. They should be differentiated (for example, Category, Experience level, and Work type).",
        },
        {
          title: "Text legibility.",
          detail:
            "The body copy in the audience sections is quite small and light grey against white, which may fall short of accessibility contrast guidelines. Test against WCAG standards and increase size and contrast.",
        },
        {
          title: "Hero subtext spacing.",
          detail:
            "The hero subtext lines sit very tightly together and could use more line height to match the breathing room elsewhere.",
        },
        {
          title: "Responsive and interaction states.",
          detail:
            "This is a desktop layout only. Next steps should be mobile and tablet versions, hover and focus states for the tiles and dropdowns, and logged-in experiences for freelancers and clients.",
        },
      ],
    },
    learned:
      "A marketplace homepage has to do many jobs at once: explain the idea, build trust, and move different users toward different actions. The most useful decision was to design around the audiences first (freelancer, company, individual, local business) and let the layout follow from that. If I continued this project, I would validate the messaging with real freelancers and clients and measure which entry point (hero search, category tiles, or the lower search) actually drives the most sign-ups.",
  },
  {
    slug: "intelligent-conversational-agents",
    number: "01",
    section: "microsoft",
    category: "COPILOT STUDIO",
    title: "Intelligent Conversational Agents",
    description:
      "From structured FAQs to multi-step scenario-driven agents, integrated with Power Platform workflows.",
    detail:
      "Conversational agents designed around practical scenarios, with contextual answers and Power Platform integration to connect knowledge with useful actions.",
    metadata: {
      area: "Conversational AI",
      focus: "Knowledge & workflow journeys",
      role: "AI solutions developer",
      scope: "FAQs, scenarios & integrations",
      status: "Solution design",
    },
    rationale: [
      "A structured FAQ experience gives people a clear starting point for common questions.",
      "Scenario-driven conversations can guide users through multi-step tasks without losing the context of their request.",
      "Connecting agents to Power Platform workflows helps move beyond answers toward useful next steps.",
    ],
  },
  {
    slug: "justdeving-platform",
    number: "02",
    section: "microsoft",
    category: "SHAREPOINT / SPFX",
    title: "JustDeving Platform",
    description:
      "Custom SPFx web parts — policy acknowledgement with group-based filtering, status tracking, and role-powered data layers.",
    detail:
      "A custom SharePoint experience using SPFx web parts for policy acknowledgement, group-based filtering, status tracking, and role-aware access.",
    metadata: {
      area: "SharePoint platform",
      focus: "Policy acknowledgement",
      role: "SharePoint / SPFx developer",
      scope: "Filtering, status & role-aware data",
      status: "Platform development",
    },
    rationale: [
      "Group-based filtering helps surface the policies relevant to each audience.",
      "Acknowledgement status makes progress visible to both users and administrators.",
      "Role-aware data layers support a more tailored experience across the platform.",
    ],
  },
  {
    slug: "digital-collaboration-environments",
    number: "03",
    section: "microsoft",
    category: "SHAREPOINT",
    title: "Digital Collaboration Environments",
    description:
      "SharePoint Communication Sites that improve internal governance, communication, and digital collaboration.",
    detail:
      "Digital workplace experiences built with SharePoint Communication Sites to make organisational communication and collaboration clearer.",
    metadata: {
      area: "Digital workplace",
      focus: "Internal communication",
      role: "SharePoint solutions developer",
      scope: "Communication sites & governance",
      status: "Solution delivery",
    },
    rationale: [
      "A clear information structure helps employees find relevant updates and resources.",
      "Communication sites provide a consistent home for organisational content and announcements.",
      "Governance considerations help keep collaboration spaces useful and maintainable over time.",
    ],
  },
  {
    slug: "architecture-strategy",
    number: "04",
    section: "microsoft",
    category: "SOLUTION DESIGN",
    title: "Architecture & Strategy Sessions",
    description:
      "Stakeholder workshops translating business requirements into scalable technical architecture.",
    detail:
      "Collaborative architecture sessions that translate stakeholder needs into scalable, maintainable solutions aligned with enterprise standards.",
    metadata: {
      area: "Solution architecture",
      focus: "Requirements & technical direction",
      role: "Solution architect",
      scope: "Stakeholder workshops & architecture",
      status: "Strategy & design",
    },
    rationale: [
      "Facilitated workshops bring stakeholder goals and constraints into the same conversation.",
      "Translating business requirements into technical options makes trade-offs easier to discuss.",
      "Architecture decisions consider scalability, maintainability and enterprise governance from the start.",
    ],
  },
];

export const selectedProjects = projects.filter(
  (project) => project.section === "selected",
);

export const microsoftProjects = projects.filter(
  (project) => project.section === "microsoft",
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
