# Kamogelo Mokone — Portfolio

A personal portfolio for Kamogelo Mokone, a Microsoft Power Platform, SharePoint and AI solutions developer and UI/UX designer based in Midrand, South Africa.

## Tech stack

- Next.js 16 App Router with TypeScript and static export
- React 19
- Global CSS in `app/globals.css` (no Tailwind or CSS Modules)
- Playfair Display headings and DM Sans body text, loaded from Google Fonts
- Next.js `<Image>` with `unoptimized: true` for local public images

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/KamoPortfolio](http://localhost:3000/KamoPortfolio).

## Build for GitHub Pages

```bash
npm run lint
npm run build
```

Next.js statically exports the site to `docs/`. The postbuild script creates `docs/.nojekyll` so GitHub Pages preserves Next.js assets. The configured base path is `/KamoPortfolio`, matching the GitHub repository name.

## Pages and routes

| Route | Description |
| --- | --- |
| `/` | Portfolio home page: hero, about, insights, career, projects, expertise and contact |
| `/cv/` | Documents page with links to the CV, Professional Growth & Positioning Statement, and Technology Expertise PDFs |
| `/projects/` | Selected Projects and Microsoft Projects gallery |
| `/projects/streetwear-e-commerce/` | OFFGRID project case study |
| `/projects/freebird/` | Freebird case study, including design context, reflection and learnings |
| `/projects/intelligent-conversational-agents/` | Intelligent Conversational Agents case study |
| `/projects/justdeving-platform/` | JustDeving Platform case study |
| `/projects/digital-collaboration-environments/` | Digital Collaboration Environments case study |
| `/projects/architecture-strategy/` | Architecture & Strategy Sessions case study |

Project detail routes are generated from `app/projects/project-data.ts` by `generateStaticParams()`. Keep each project slug stable and ensure project cards use the matching route.

## Project structure

```text
app/
  components/
    Footer.tsx
    Nav.tsx
    ProjectsGallery.tsx
    Work.tsx
  cv/
    page.tsx
  projects/
    [slug]/
      page.tsx
    page.tsx
    project-data.ts
  globals.css
  layout.tsx
  page.tsx
public/
  ProfilePicture.png
  documents/
    CV.pdf
    Professional Growth & Positioning Statement.pdf
    Technology Expertise.pdf
  icons/
    CopilotStudio.png
    Figma.png
    M365.png
    PowerApps.png
    SharePoint.png
  projects/
    Freebird.png
    OFFGRID.png
Assest/                 # Original source assets; copy to public/ before use
docs/                   # Static export output for GitHub Pages
scripts/
  create-nojekyll.mjs
```

## Home page sections

- **Hero:** Portfolio introduction, primary links, and Developer / Designer / Consultant role icons.
- **About:** Profile photo, bio, and links to the documents page and contact section.
- **Insights:** Strengths and problem-solving capabilities.
- **Career:** Career snapshot, experience, and highlights.
- **Work:** Selected projects and Microsoft projects. Each card links to its project case study; “All Projects” opens the gallery.
- **Expertise:** Figma feature card and Microsoft platform / SharePoint / AI / solution architecture expertise cards with supplied icons.
- **Contact:** Email, LinkedIn, GitHub, and documents-page link.

## Project case studies

`app/projects/project-data.ts` is the shared source for project card details and case-study content. The selected project case studies have their project screenshots:

- OFFGRID uses `public/projects/OFFGRID.png`.
- Freebird uses `public/projects/Freebird.png` and includes the supplied design-preview image, Deeper Context, Why This Matters, Reflection, and What I learned sections.

The other Microsoft project case-study routes currently use a designed overview placeholder until project-specific screenshots are supplied.

## Assets and links

- Source images and PDFs are kept in `Assest/`; served files live in `public/`.
- Add or update public assets by copying them from `Assest/`, then reference them from the relevant page or shared project data.
- For image and PDF paths used in code, prefix public paths with `process.env.NEXT_PUBLIC_BASE_PATH ?? ""`. This is required for GitHub Pages because unoptimized image URLs and plain asset URLs do not automatically include `basePath`.
- Internal page navigation uses Next.js `<Link>` so Next.js applies `basePath`. Use normal `<a>` elements for external links and direct PDF links.
- The “Download CV” links open `/cv/`, where all three PDF options are available. Each document action opens its corresponding PDF in a new tab.

## Navigation and styling conventions

- Use the shared `Nav` and `Footer` components on pages.
- Subpages use `<Nav variant="light" />`; the light navigation has a fixed, frosted-glass treatment so it remains visible while scrolling.
- Keep styling in `app/globals.css` and use the existing CSS custom properties and responsive media queries.
- Typography is intentionally larger than the initial design pass for readability; retain responsive font adjustments when changing text styles.
- Avoid arrow glyphs in buttons and button-style calls to action. Directional arrows may be used for non-button cues only when appropriate.
- Use `"use client"` only for components that need client-side state or browser APIs.

## GitHub Pages configuration

`next.config.ts` sets:

```ts
const BASE_PATH = "/KamoPortfolio";

const nextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  basePath: BASE_PATH,
  assetPrefix: `${BASE_PATH}/`,
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
  images: { unoptimized: true },
};
```

`trailingSlash: true` exports route pages as `index.html` within their folders (for example, `docs/projects/freebird/index.html`). Do not remove `docs/.nojekyll`; it is generated by the postbuild script.
