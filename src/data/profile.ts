export const profile = {
  name: 'Manish Jangra',
  mark: 'MANISH.',
  signature: 'Manish',
  role: 'Full Stack Developer',
  email: 'manishjangra761@gmail.com',
  phone: '+91 98175 58402',
  phoneHref: 'tel:+919817558402',
  linkedin: 'https://www.linkedin.com/in/manishjangra2002/',
  github: 'https://github.com/manishjangra761',
  resume: '/ManishResume.pdf',
  summary:
    'Full Stack Developer with 2 years of experience building scalable MERN applications using React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, and AWS. I work on responsive interfaces, REST APIs, authentication, and production deployments across real estate, IT services, education, and ONDC domains.',
};

export const practices = [
  {
    title: 'Frontend',
    text: 'Responsive interfaces in React.js and Next.js, with Tailwind CSS, Redux Toolkit, and Framer Motion.',
  },
  {
    title: 'Backend',
    text: 'REST APIs in Node.js and Express.js, with JWT authentication and role-based access control.',
  },
  {
    title: 'Cloud',
    text: 'AWS deployments, SSL and domains, plus Vercel, Netlify, Docker, and production debugging.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend development',
    badge: 'Interfaces',
    stat: 'React & Next.js',
    description:
      'Component-based interfaces, responsive layouts, and dashboards. Used for property platforms, corporate sites, admin views, and the multi-tenant education product.',
    items: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion', 'Bootstrap', 'HTML5', 'CSS3'],
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'Backend development',
    badge: 'APIs',
    stat: 'Node & Express',
    description:
      'REST services for listings, enquiries, orders, and authenticated workflows. Includes JWT authentication, role-based access, and production issue fixing.',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC'],
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'Databases',
    badge: 'Persistence',
    stat: 'SQL & NoSQL',
    description:
      'Relational and document data for education workflows, property records, and practice-platform accounts. Schema work includes MySQL, Sequelize, MongoDB, and PostgreSQL.',
    items: ['MongoDB', 'Mongoose', 'MySQL', 'Sequelize ORM', 'PostgreSQL'],
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'Cloud, DevOps & tools',
    badge: 'Delivery',
    stat: 'AWS & Git',
    description:
      'Live deployment and release work: AWS EC2, S3, and IAM, SSL, domain setup, SEO, Docker, and Git-based collaboration. Applications have also shipped on Vercel and Netlify.',
    items: ['AWS EC2', 'AWS S3', 'AWS IAM', 'Vercel', 'Netlify', 'Docker', 'CI/CD', 'SSL', 'Git', 'GitHub', 'Postman'],
    colSpan: 'lg:col-span-7',
  },
];

const skillSetCount = skillGroups.reduce((total, group) => total + group.items.length, 0);

export const stats = [
  { value: '2+', label: 'Years of experience' },
  { value: '12', label: 'Featured platforms' },
  { value: String(skillSetCount), label: 'Skill set' },
];

export interface JourneyStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  href?: string;
  summary: string;
  highlights: string[];
}

export const journey: JourneyStop[] = [
  {
    id: '01',
    year: 'MAR 2026 — PRESENT',
    title: 'Software Developer',
    organization: 'Delve Professionals Pvt. Ltd. · Rohtak',
    href: 'https://www.delvepro.in/',
    summary:
      'Building production web applications across real estate, IT, and enterprise domains.',
    highlights: [
      'Develop scalable applications with React.js, Next.js, Node.js, Express.js, AWS, and MongoDB.',
      'Build responsive interfaces, secure REST APIs, admin dashboards, and lead management systems.',
      'Manage AWS deployments, SSL, domain configuration, SEO, and production debugging.',
    ],
  },
  {
    id: '02',
    year: 'JUL 2025 — MAR 2026',
    title: 'Full Stack Developer',
    organization: 'Qvolv Technologies Pvt. Ltd. · Noida',
    summary:
      'Contributed to a multi-tenant educational management platform for schools, universities, and industry partners.',
    highlights: [
      'Designed backend APIs, optimized MySQL schemas with Sequelize, and implemented JWT authentication with RBAC.',
      'Developed role-based dashboards, LMS modules, content workflows, and responsive frontend interfaces.',
      'Improved debugging, testing, and performance for production features.',
    ],
  },
  {
    id: '03',
    year: 'DEC 2024 — JUN 2025',
    title: 'Full Stack Developer Intern',
    organization: 'SequelString AI Pvt. Ltd. · New Delhi',
    href: 'https://www.sequelstring.com/',
    summary:
      'Worked across ONDC domains: Agriculture, Retail, Mobility, Bids & Auctions, and Life Insurance.',
    highlights: [
      'Developed ordering, bidding, insurance purchase, trip booking, and retail order workflows.',
      'Contributed to backend services, API integrations, database operations, and business logic.',
      'Assisted with the Reconciliation and Settlement Framework for transaction reconciliation and settlement.',
    ],
  },
  {
    id: '04',
    year: 'JUN 2024 — NOV 2024',
    title: 'Full Stack Development Training',
    organization: 'QSpiders',
    summary: 'Full Stack Development training, June 2024 to November 2024, completed before the SequelString AI internship.',
    highlights: [
      'Training sat between the MCA and the first developer role.',
    ],
  },
];

export interface ProjectHighlight {
  title: string;
  text: string;
}

export interface ProjectRecord {
  number: string;
  title: string;
  category: string;
  description: string;
  contributions: string[];
  tech: string[];
  facts: { label: string; value: string }[];
  highlights: ProjectHighlight[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectRecord[] = [
  {
    number: '01',
    title: 'Kohinoor Properties',
    category: 'Real estate · Dubai · 2026',
    description:
      'A Dubai real estate platform for property listings, search and filtering, and detailed pages aimed at buyers and investors.',
    contributions: [
      'Built reusable React.js and Next.js components with responsive layouts and clear navigation.',
      'Developed Node.js and Express.js REST APIs, MongoDB data operations, and property enquiry workflows.',
    ],
    tech: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    facts: [
      { label: 'Year', value: '2026' },
      { label: 'Frontend', value: 'React.js, Next.js' },
      { label: 'Backend', value: 'Node, Express, MongoDB' },
    ],
    highlights: [
      {
        title: 'Scale',
        text: 'Buyer and investor marketplace for Dubai listings. Visitors search and filter the catalog, open a detail page for each property, and send an enquiry without leaving the listing they were reading. Gallery, price, and location sit on that same page so a buyer can decide before they write in. Search, the detail page, and the enquiry stay on one path.',
      },
      {
        title: 'Backend architecture',
        text: 'Express.js services sit behind the Next.js pages and handle listing reads and enquiry writes. MongoDB stores property records, gallery media, and the leads those pages collect. The React screens call the same API for search results and for the detail view, so a listing stays consistent from the grid to the page.',
      },
      {
        title: 'Auth flow',
        text: 'Search and property pages are public. A visitor can browse the catalog and open any listing without creating an account. Enquiry forms collect name and contact details and attach them to the property, so the team receives a lead without a public login or a buyer dashboard.',
      },
      {
        title: 'Caching',
        text: 'Listing and detail routes are rendered with Next.js so search results and repeat property views do not rebuild on every request. A buyer moving between filters and a property page gets the page back quickly, and the API is reserved for fresh search queries and new enquiries.',
      },
      {
        title: 'Deployment infra',
        text: 'The site is live on the public domain. The Next.js frontend serves the listing experience and the Node API serves search, detail, and enquiry traffic from the same production environment, so a published property is reachable as soon as it is stored.',
      },
      {
        title: 'APIs',
        text: 'REST endpoints cover search, filters, property detail, and enquiry submission. The React pages consume those routes for the catalog grid, the filter controls, and the form on each listing. A successful enquiry is stored against the property the visitor was viewing.',
      },
      {
        title: 'Database design',
        text: 'MongoDB documents hold each property, its gallery media, and the enquiry records tied back to that listing. Search fields and media live with the property so a detail page can load location, images, and description together, and a lead can be traced to the exact listing. A buyer’s enquiry stays attached to the property they opened, which is the record the team follows up on.',
      },
    ],
    liveUrl: 'https://kohinoorproperties.com/',
  },
  {
    number: '02',
    title: 'Compass Technologies',
    category: 'IT services · Dubai · 2026',
    description:
      'Corporate website for a UAE-based IT services company, with a business-focused layout prepared for production.',
    contributions: [
      'Built reusable frontend components and responsive layouts with Next.js and Tailwind CSS.',
      'Implemented SEO and deployment configuration for the live site.',
    ],
    tech: ['Next.js', 'Tailwind CSS'],
    facts: [
      { label: 'Year', value: '2026' },
      { label: 'Scope', value: 'Frontend & SEO' },
      { label: 'Delivery', value: 'Production site' },
    ],
    highlights: [
      {
        title: 'Scale',
        text: 'Corporate site for a UAE IT services company. Service pages explain what the business offers, and a shared layout keeps navigation, contact, and the company story in the same place on every route. The structure was built so new service sections can be added without redesigning the site.',
      },
      {
        title: 'Backend architecture',
        text: 'Next.js pages share one layout, and each service is a reusable block styled with Tailwind CSS. Copy, headings, and calls to action live in those sections, so a change to spacing or type shows up across the service pages instead of being edited route by route.',
      },
      {
        title: 'Auth flow',
        text: 'The site is a public marketing surface. Visitors read services and reach the company without creating an account, and there is no login, session, or client dashboard. Every page is meant to be opened directly from search or from a shared link.',
      },
      {
        title: 'Caching',
        text: 'Pages are prebuilt so crawlers and repeat visits receive ready HTML. SEO metadata sits on the main service routes, which keeps titles and descriptions aligned with the page a visitor lands on and avoids rebuilding the marketing pages on each request.',
      },
      {
        title: 'Deployment infra',
        text: 'The production build is published on the company domain, with SEO configuration included in the live environment. A released page is the same HTML search engines and visitors receive, so service updates go out with the deployment rather than through a separate content system.',
      },
      {
        title: 'APIs',
        text: 'There is no application API. The site is a content and SEO surface for the company’s services, and contact actions stay on the page. Visitors move through service sections and the shared layout without a data request behind each view.',
      },
      {
        title: 'Database design',
        text: 'There is no application database. Page content lives in the Next.js project as structured sections, so service copy, layout, and metadata ship together. Updating a service means editing that content and publishing the site again. The live page and the source section are the same piece of content.',
      },
    ],
    liveUrl: 'https://www.mycompassuae.com/',
  },
  {
    number: '03',
    title: 'Bluefin Realty',
    category: 'Real estate · 2026',
    description:
      'Real estate platform with dynamic property listings, lead generation workflows, and responsive business pages.',
    contributions: [
      'Implemented dynamic interface components and connected them to backend APIs.',
      'Improved SEO, responsiveness, and performance across devices.',
    ],
    tech: ['React.js', 'Next.js', 'Node.js', 'MongoDB'],
    facts: [
      { label: 'Year', value: '2026' },
      { label: 'Frontend', value: 'React.js, Next.js' },
      { label: 'Data', value: 'Node.js, MongoDB' },
    ],
    highlights: [
      {
        title: 'Scale',
        text: 'Property platform with public listings, search, and lead generation on responsive business pages. A visitor can scan the catalog, open a property, and send a lead from the same flow on a phone or a desktop, without a separate mobile site.',
      },
      {
        title: 'Backend architecture',
        text: 'A Node.js API sits behind the Next.js interface. Listing reads and lead writes go through that same backend, so the catalog a visitor sees and the enquiry the team receives come from one source instead of a hardcoded page and a separate form.',
      },
      {
        title: 'Auth flow',
        text: 'Browsing and lead forms are public. Visitors do not create an account to search or to enquire. Listing data is served from the API, which means a new or updated property appears from the database rather than from a page that was written by hand.',
      },
      {
        title: 'Caching',
        text: 'Listing and detail routes are rendered ahead of the visit, and the layout work keeps search and property pages usable on smaller screens. Repeat views of a listing stay light, while a new lead still posts through to the API. Opening a property stays quick on a phone, and the enquiry still reaches the team.',
      },
      {
        title: 'Deployment infra',
        text: 'The production site runs on the live domain. SEO metadata and the responsive layout are part of the published build, so the pages search engines index are the same pages a buyer opens on a phone.',
      },
      {
        title: 'APIs',
        text: 'REST endpoints serve dynamic listings and capture leads, and the interface components call them directly. The catalog grid, the property page, and the enquiry form stay in step because they read and write the same records.',
      },
      {
        title: 'Database design',
        text: 'MongoDB holds property listings, their media, and the leads those pages collect. A listing document carries the fields the public page needs, and each lead is stored against the property the visitor was viewing. Media and the enquiry sit with that listing, so the follow-up has the same property the visitor saw.',
      },
    ],
    liveUrl: 'https://www.realbluefin.com/',
  },
  {
    number: '04',
    title: 'TradeHubFX',
    category: 'Forex trading · 2026',
    description:
      'Forex trading platform with a responsive interface, market-oriented sections, and secure backend APIs.',
    contributions: [
      'Built frontend components and backend APIs with React.js, Next.js, Node.js, and Express.js.',
      'Managed AWS deployment workflows, SEO, and production environment configuration.',
    ],
    tech: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS'],
    facts: [
      { label: 'Year', value: '2026' },
      { label: 'Cloud', value: 'AWS' },
      { label: 'Stack', value: 'MERN + Next.js' },
    ],
    highlights: [
      {
        title: 'Scale',
        text: 'Forex platform with market-oriented sections and a responsive public site. Visitors move through market content on any screen size, while the actions that need the backend stay on secure API routes instead of being embedded in the marketing pages.',
      },
      {
        title: 'Backend architecture',
        text: 'An Express.js API runs alongside the Next.js pages. MongoDB stores the records both the interface and the APIs share, so a market section and a platform action read the same data rather than two copies that can drift apart.',
      },
      {
        title: 'Auth flow',
        text: 'Market content is public and can be opened without an account. Platform actions go through secure backend APIs, so a visitor can read the site freely while anything that changes account or trading state is checked on the server before it is stored.',
      },
      {
        title: 'Caching',
        text: 'Market sections are rendered with Next.js so those content pages load without calling the API on every view. The API stays available for the secure actions, and repeat visits to the public market pages come back from the rendered routes.',
      },
      {
        title: 'Deployment infra',
        text: 'AWS hosts the production environment. SEO and environment configuration are set for the live domain, so the published frontend, the API, and the secrets they need are part of the same release rather than a manual server setup.',
      },
      {
        title: 'APIs',
        text: 'REST endpoints serve market content and the secure actions the trading interface needs. Public pages read the content routes, and actions that must be protected post to the secured routes with the checks the backend enforces.',
      },
      {
        title: 'Database design',
        text: 'MongoDB collections hold the platform data behind the public pages and the API. Market content and the records those secure actions write live in the same database, so a page and an API response describe the same platform state. A visitor reading a market section and an action that updates the platform are looking at one set of records.',
      },
    ],
    liveUrl: 'https://tradehubfx.com/',
  },
  {
    number: '05',
    title: 'PromoAds',
    category: 'Marketing · 2026',
    description:
      'Digital marketing site with SEO-optimized pages, reusable UI components, and a cloud-ready AWS deployment.',
    contributions: [
      'Built campaign and service pages as reusable sections on a shared Next.js layout.',
      'Set up static asset delivery and the contact path used for campaign enquiries.',
    ],
    tech: ['Next.js', 'TypeScript', 'AWS S3', 'CloudFront', 'CI/CD'],
    facts: [
      { label: 'Year', value: '2026' },
      { label: 'Scope', value: 'Ads & growth' },
      { label: 'Delivery', value: 'AWS static hosting' },
    ],
    highlights: [
      {
        title: 'Scale',
        text: 'Campaign-focused marketing site with several service landing pages, each aimed at a search topic. A visitor can land on one service, read the offer, and send an enquiry without passing through a generic homepage first. Each landing page stands on its own for the campaign that points at it.',
      },
      {
        title: 'Backend architecture',
        text: 'Next.js TypeScript pages use a shared layout, and content sections are composable blocks. A campaign page is assembled from those blocks, so a new landing page reuses the same header, type, and enquiry pattern instead of a fresh layout.',
      },
      {
        title: 'Auth flow',
        text: 'The site is public and has no end-user authentication. Campaign pages and the enquiry form are open to anyone who arrives from search or an ad. There is no account, session, or client login in front of the content. An ad click opens the offer and the form immediately.',
      },
      {
        title: 'Caching',
        text: 'Static assets are served from S3 through CloudFront, and page HTML uses static generation or incremental regeneration where it applies. Repeat visits and ad traffic hit cached pages and files instead of rebuilding the landing page each time.',
      },
      {
        title: 'Deployment infra',
        text: 'The site is hosted as static files on AWS S3, distributed with CloudFront, and released through GitHub Actions. Server-rendered routes can run on EC2 when a page needs them, and the rest of the marketing site stays on the static path.',
      },
      {
        title: 'APIs',
        text: 'Contact and inquiry endpoints validate the form and pass it on through lightweight server routes. The landing pages stay static, and only the enquiry submission hits a server path, so a campaign page does not depend on an API to render.',
      },
      {
        title: 'Database design',
        text: 'Form submissions go to a structured store or an email queue. A PostgreSQL lead inbox can be turned on when the team wants enquiries saved as records. Until then, the submission still leaves the form through the same validated route. Either way, the enquiry is kept with the campaign page that sent it.',
      },
    ],
    liveUrl: 'https://www.promoadsreal.com/',
  },
  {
    number: '06',
    title: 'Delve Professionals',
    category: 'Recruitment & software · 2026',
    description:
      'Company site for software delivery and recruitment, with service pages for how the team builds software and hiring pages for candidates, both published on the live company domain. A client reads how projects are delivered, and a candidate reads how hiring works, on the same navigation. Service pages, hiring pages, and the contact path publish together, so the domain a visitor opens is the live company site.',
    contributions: [],
    tech: [],
    facts: [
      { label: 'Year', value: '2026' },
      { label: 'Scope', value: 'Recruitment & software' },
      { label: 'Delivery', value: 'Production site' },
    ],
    highlights: [
      {
        title: 'Scale',
        text: 'Company site covering software delivery and recruitment, with both sides of the business on one domain. A client can read how projects are delivered, and a candidate can read how hiring works, without being sent to a second website. The same navigation carries both audiences, so the software offer and the hiring paths read as one company.',
      },
      {
        title: 'Backend architecture',
        text: 'Marketing pages cover services and hiring, and the two are structured so software content and recruitment content stay separate. Shared navigation still links them, so a visitor can cross from a service page to a hiring page without losing the company context. A client reading about delivery and a candidate reading about roles are in two sections of the same site.',
      },
      {
        title: 'Auth flow',
        text: 'The company site is public and has no end-user authentication. Clients and candidates read the pages and use the contact paths without an account, a login, or a portal. Every service and hiring route can be shared directly.',
      },
      {
        title: 'Caching',
        text: 'Production pages are built for fast loads and for search indexing of services and hiring content. A crawler and a returning visitor receive the published page, so both the software offer and the open hiring paths stay easy to find.',
      },
      {
        title: 'Deployment infra',
        text: 'The live site runs on the company domain. Service pages, hiring pages, and the contact paths publish together, so an update to either side of the business is what visitors and search results see after the release. There is no second public site for hiring. The domain the release updates is the one a client or a candidate opens.',
      },
      {
        title: 'APIs',
        text: 'Contact paths collect messages from clients and from candidates. There is no public product API on the marketing site. The pages themselves explain the services and the hiring process, and the form is how someone starts a conversation. A client enquiry and a candidate enquiry both leave through that contact path.',
      },
      {
        title: 'Database design',
        text: 'Service and hiring content is part of the site rather than a separate content store. Enquiries are collected through the contact flow, so a client message and a candidate message leave the page the person was reading. The page they were on is what the message is about, whether that was a service or a role.',
      },
    ],
    liveUrl: 'https://www.delvepro.in/',
  },
  {
    number: '07',
    title: 'Nursing Culture',
    category: 'Nursing education · 2026',
    description:
      'Education site for nursing students, with classes, admission guidance, notes, previous year papers, and official council links. A student moves from a class overview to notes or past papers on the same site. Admission guidance sits with that study material, and a council link is the only step that leaves the domain. Class pages, notes, paper lists, and admission pages publish together, so a bookmarked page is the material the site is serving.',
    contributions: [],
    tech: [],
    facts: [
      { label: 'Year', value: '2026' },
      { label: 'Scope', value: 'Nursing education' },
      { label: 'Delivery', value: 'Production site' },
    ],
    highlights: [
      {
        title: 'Scale',
        text: 'Education site for nursing students, with classes, admission guidance, notes, previous-year papers, and links to official councils. A student can move from a class overview to notes or past papers without hunting through an unrelated set of pages.',
      },
      {
        title: 'Backend architecture',
        text: 'Content sections cover classes, notes, papers, and official council resources, and they are laid out so a student can reach one resource quickly. Each section has a clear heading and a path onward, instead of one long page that mixes every kind of material.',
      },
      {
        title: 'Auth flow',
        text: 'The study site is public, and the published pages have no student login. Notes, papers, and admission guidance open without an account, so a student can share a page or return to it directly from a bookmark.',
      },
      {
        title: 'Caching',
        text: 'Resource pages are static, so notes and paper lists open quickly on repeat visits. A student coming back to the same class or the same set of papers gets the built page rather than a fresh render.',
      },
      {
        title: 'Deployment infra',
        text: 'The production site runs on the education domain. Class pages, admission guidance, notes, and paper lists publish together, so the material a student opens is the same set of pages the domain is serving.',
      },
      {
        title: 'APIs',
        text: 'There is no application API. Council resources link out to the official sources, and the site’s own notes and papers are pages. A student stays on the site until they choose an external council link.',
      },
      {
        title: 'Database design',
        text: 'Study material is organized as pages: classes, admission guidance, notes, and previous-year papers. Each kind of resource is its own set of pages, so a list of papers does not have to be loaded from a separate store. A student opens the set they need, and that page is the whole resource.',
      },
    ],
    liveUrl: 'https://www.nursingculture.in/',
  },
  {
    number: '08',
    title: 'VD Studio',
    category: 'Graphic design · 2026',
    description:
      'Website for a graphic design studio. The site presents logo, poster, ad, and campaign work as sections of one practice, with the same navigation and the same way of opening a piece. Logo samples and campaign samples stay on the studio domain.',
    contributions: [],
    tech: ['Next.js'],
    facts: [
      { label: 'Year', value: '2026' },
      { label: 'Frontend', value: 'Next.js' },
      { label: 'Delivery', value: 'Production site' },
    ],
    highlights: [
      {
        title: 'Scale',
        text: 'Studio site presenting logo, poster, ad, and campaign work. A visitor can see each kind of design on its own and still understand it as part of one studio, with the same navigation and the same way of opening a piece of work. Logo work and campaign work sit in their own sections and still belong to the same studio site.',
      },
      {
        title: 'Backend architecture',
        text: 'Next.js pages share one layout, and each kind of design work has its own section. Logo, poster, ad, and campaign samples use that layout, so adding a project means adding it to the right section rather than building a new page structure. The header, type, and project grid stay the same across those sections.',
      },
      {
        title: 'Auth flow',
        text: 'The portfolio site is public and has no end-user authentication. Clients and visitors open project pages without an account or a login. A shared link lands directly on the work, not on a sign-in screen.',
      },
      {
        title: 'Caching',
        text: 'Project pages are pre-rendered so case visuals load with the rest of the studio site. Returning to a logo or a campaign page serves the built HTML and images together, instead of assembling the case on each visit.',
      },
      {
        title: 'Deployment infra',
        text: 'The production site runs on the studio domain. Layout, project sections, and the visuals for each kind of work publish in one build, so the live site matches the set of samples in the project.',
      },
      {
        title: 'APIs',
        text: 'There is no application API. The site is a presentation layer for studio work, and the pages themselves carry the samples. A visitor browses logo, poster, ad, and campaign sections without a data request behind each view.',
      },
      {
        title: 'Database design',
        text: 'Work samples are content in the Next.js project, grouped by logo, poster, ad, and campaign. Each group is a section of pages, so the studio’s catalog is the site structure rather than records in a database. Adding a sample means adding it to the section it belongs to, and the next build shows it.',
      },
    ],
    liveUrl: 'https://www.vdstudio.in/',
  },
  {
    number: '09',
    title: 'ONDC Multi-Domain Platform',
    category: 'Open network · 2025',
    description:
      'ONDC-aligned workflows across retail, agriculture, mobility, auctions, and life insurance, delivered during the SequelString AI internship.',
    contributions: [
      'Built backend integrations, API services, and domain business logic for ordering, bidding, booking, and policy purchase flows.',
      'Worked on database operations, transaction handling, and the Reconciliation and Settlement Framework.',
    ],
    tech: ['Node.js', 'Express.js', 'React.js', 'MongoDB'],
    facts: [
      { label: 'Year', value: '2025' },
      { label: 'Context', value: 'ONDC' },
      { label: 'Domains', value: 'ONDC verticals' },
    ],
    highlights: [
      {
        title: 'Scale',
        text: 'ONDC workflows across retail, agriculture, mobility, bids and auctions, and life insurance. Each vertical has its own order of steps, and the platform still treats a completed action as a transaction that can be tracked, reconciled, and settled.',
      },
      {
        title: 'Backend architecture',
        text: 'Domain services cover orders, bids, trips, and policies. Transaction handling is shared across those verticals, so a retail order, a trip booking, and a policy purchase follow the same pattern for status and settlement even when the business steps differ.',
      },
      {
        title: 'Auth flow',
        text: 'Participant actions on the network go through the domain APIs rather than one consumer login screen. A buyer, a seller, or another network participant is identified in the request the domain service handles, and the action is accepted or rejected there. There is no shared consumer account sitting in front of retail, mobility, and insurance.',
      },
      {
        title: 'Caching',
        text: 'Read paths for catalog and status stay separate from writes that change an order, bid, trip, or policy. Looking up what is available does not run the same path as confirming a purchase, a bid, or a booking. A status check can be repeated without replaying the action that created the order, the bid, or the trip.',
      },
      {
        title: 'Deployment infra',
        text: 'The work shipped inside SequelString AI’s ONDC platform during the internship. Domain services, integrations, and the reconciliation flow were added to that existing platform rather than deployed as a standalone product.',
      },
      {
        title: 'APIs',
        text: 'Integrations cover retail orders, agriculture flows, trip booking, bidding, and insurance purchase. Each flow calls the network with the payload that vertical expects, and the service maps the response back into the platform’s transaction record.',
      },
      {
        title: 'Database design',
        text: 'Transaction records are stored per domain, with reconciliation and settlement data kept for the RSF work. An order, bid, trip, or policy can be followed from the original action through to the settlement entry that closes it. The settlement row points back at that transaction, so a completed flow can be checked after the fact.',
      },
    ],
  },
  {
    number: '10',
    title: 'Qvolv Education Platform',
    category: 'Multi-tenant education · 2025',
    description:
      'Contributed to a multi-tenant educational management platform serving schools, universities, and industry partners. React dashboards, LMS modules, and content workflows call Node.js APIs, and those APIs keep each tenant’s users and records separate with JWT authentication and role-based access. Schema work covers MySQL and PostgreSQL, with indexes on the queries those screens filter and join.',
    contributions: [
      'Designed scalable backend APIs, optimized MySQL and PostgreSQL schemas, and implemented JWT authentication with RBAC.',
      'Developed role-based dashboards, LMS modules, content management workflows, and responsive React interfaces.',
      'Improved debugging, testing, and performance, including SQL indexes on the queries the dashboards and LMS modules run.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'Sequelize', 'SQL indexing', 'JWT', 'RBAC'],
    facts: [
      { label: 'Year', value: '2025–2026' },
      { label: 'Frontend', value: 'React.js' },
      { label: 'Backend', value: 'Node.js, Express' },
      { label: 'Data', value: 'MySQL, PostgreSQL' },
      { label: 'Access', value: 'JWT, RBAC' },
      { label: 'Modules', value: 'LMS & dashboards' },
      { label: 'Performance', value: 'SQL indexing' },
    ],
    highlights: [
      {
        title: 'Scale',
        text: 'One platform for many schools, universities, and industry partners. Each tenant has its own users, courses, and content, and a person signed in under one institution does not see another institution’s records. Dashboards, LMS modules, and content workflows are the screens those tenants use.',
      },
      {
        title: 'Backend architecture',
        text: 'Express services on Node.js sit behind the React dashboards. Tenant, role, course, and content rules live in that API, so an admin screen and a student screen call the same services and receive only the records their role allows. Sequelize models are the path those services use to read and write SQL.',
      },
      {
        title: 'Auth flow',
        text: 'JWT authentication with role-based access control. A user signs in, the token carries the role and the tenant, and each API checks both before it returns a dashboard, an LMS module, or a content action. An admin, an educator, a student, and an industry partner do not share one view of the platform.',
      },
      {
        title: 'Caching',
        text: 'Dashboard and LMS reads stay fast through indexes on the columns those screens filter and join, rather than a separate cache that could drift from the database. A repeat open of a course list uses those indexes instead of scanning the tenant’s tables. Content and enrollment writes commit immediately, so the next read is the saved row.',
      },
      {
        title: 'Deployment infra',
        text: 'The work shipped inside Qvolv’s education platform from July 2025 to March 2026. APIs, schema changes, and the React modules went into that production system, with debugging and tests aimed at features already in use by schools, universities, and industry partners.',
      },
      {
        title: 'APIs',
        text: 'REST endpoints cover authentication, tenant-scoped dashboards, LMS modules, and content workflows. The React screens call those routes to sign in, to load the role-based home, and to create or update course content. Each request is checked for the caller’s role before the handler reads or writes SQL.',
      },
      {
        title: 'Database design',
        text: 'Relational schemas in MySQL and PostgreSQL, accessed through Sequelize. Tables separate tenants, users, roles, courses, and content, and indexes sit on the foreign keys and the filter columns the dashboards use. A query for one institution stays on that tenant’s rows, and the index keeps a large course list from scanning the whole table.',
      },
    ],
  },
  {
    number: '11',
    title: 'Kohinoor Foundation',
    category: 'Charitable trust · 2026',
    description:
      'Site for a charitable trust, with programs, events, donations, and volunteering for education and community support. Program pages and event pages share one layout, and a visitor can read the work, then follow a path to give or to volunteer, without leaving the foundation domain.',
    contributions: [],
    tech: ['Next.js'],
    facts: [
      { label: 'Year', value: '2026' },
      { label: 'Frontend', value: 'Next.js' },
      { label: 'Delivery', value: 'Production site' },
    ],
    highlights: [
      {
        title: 'Scale',
        text: 'Site for a charitable trust covering programs, events, donations, and volunteering for education and community support. A visitor can read what the foundation does, see what is coming up, and reach a way to give or volunteer from the same site.',
      },
      {
        title: 'Backend architecture',
        text: 'Next.js pages share sections for programs, events, and ways to take part. Those sections repeat across routes so a program page and an events page use the same layout, type, and calls to action instead of a one-off design for each.',
      },
      {
        title: 'Auth flow',
        text: 'The site is public. Visitors read programs and reach donation and volunteer paths without an account, a login, or a member area. Anyone with the link can open a program or an event and follow the path to take part.',
      },
      {
        title: 'Caching',
        text: 'Program and event pages are pre-rendered, so repeat visits and search crawlers receive ready HTML. A page about a program or an upcoming event does not wait on a server render each time someone opens it.',
      },
      {
        title: 'Deployment infra',
        text: 'The production site is published on the foundation domain. Program, event, and community pages go out together in that build, so a visitor and a search result land on the same published pages.',
      },
      {
        title: 'APIs',
        text: 'There is no public application API. Donation and volunteer actions are site flows and outbound links, so a visitor stays on the foundation pages until they choose to give or sign up through the path the page provides.',
      },
      {
        title: 'Database design',
        text: 'Programs, events, and community pages are structured content in the Next.js project. Each page carries its own copy and links, and the shared sections decide how that content is laid out when the site is built. A program and an event use that same structure, so the foundation site stays consistent as new pages are added.',
      },
    ],
    liveUrl: 'https://www.kohinoorfoundation.com/',
  },
  {
    number: '12',
    title: 'Youth Welfare Society',
    category: 'Registered society · 2026',
    description:
      'Site for a registered society, covering education, skills, health, leadership, and environment programs. Each program has its own pages under one layout, and a visitor can move from a program to how they get involved without leaving the society site.',
    contributions: [],
    tech: ['Next.js'],
    facts: [
      { label: 'Year', value: '2026' },
      { label: 'Frontend', value: 'Next.js' },
      { label: 'Delivery', value: 'Production site' },
    ],
    highlights: [
      {
        title: 'Scale',
        text: 'Site for a registered society, with programs in education, skills, health, leadership, and the environment. Each area has its own pages, and a visitor can move from one program to another and still see how to get involved with the society.',
      },
      {
        title: 'Backend architecture',
        text: 'Next.js pages are organized by program area and share one layout across the society’s work. Navigation, headings, and the way a program is introduced stay consistent, so education and environment pages feel like parts of the same site.',
      },
      {
        title: 'Auth flow',
        text: 'The site is public and has no end-user authentication. Visitors read program pages and find how to take part without an account, a session, or a member login. Every program route can be opened directly.',
      },
      {
        title: 'Caching',
        text: 'Program pages are pre-rendered for search and for repeat visits. Opening an education or health page returns the built HTML, so the society’s content is available to crawlers and to people coming back to the same program.',
      },
      {
        title: 'Deployment infra',
        text: 'The production site is published on the society domain. All five program areas ship in that build, so a change to the shared layout and a change to a single program go live together.',
      },
      {
        title: 'APIs',
        text: 'There is no application API. The site presents the programs and how to get involved, and those paths stay on the pages themselves. A visitor reads a program and follows the contact or join path the page already shows.',
      },
      {
        title: 'Database design',
        text: 'Program content lives in the Next.js project, grouped by education, skills, health, leadership, and environment. Each group is a set of pages under the shared layout, not a record fetched from a separate store. Opening one program area shows only that group, with the same layout as the others.',
      },
    ],
    liveUrl: 'https://www.youthwelfaresociety.com/',
  },
];

export interface EarlierBuild {
  title: string;
  description: string;
  tech: string[];
  highlights: ProjectHighlight[];
  liveUrl?: string;
  githubUrl?: string;
}

export const earlierBuilds: EarlierBuild[] = [
  {
    title: 'Audio Typing',
    description:
      'Practice platform where people listen to audio clips and type responses. Accounts, categories, attempts, and word-level correct and wrong results are stored through a Sequelize API.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Sequelize', 'PostgreSQL', 'JWT'],
    highlights: [
      {
        title: 'Scale',
        text: 'Practice platform where people listen to audio clips and type what they hear. Every attempt is stored against an account, including the category, the clip, and the word-level correct and wrong result, so a user can come back to their own history.',
      },
      {
        title: 'Backend architecture',
        text: 'An Express.js API uses a Sequelize service layer for accounts, categories, attempts, and word-level results. The React screens talk only to that API, and the service layer is what reads and writes PostgreSQL for a practice session.',
      },
      {
        title: 'Auth flow',
        text: 'JWT authentication ties each attempt to a signed-in user. A practice session starts after login, and the token is what the API checks before it saves an attempt or returns that user’s categories and past results.',
      },
      {
        title: 'Caching',
        text: 'Category and clip lists are read from PostgreSQL when a session loads. Attempt writes go straight to the database, so a score is stored as soon as the user submits instead of waiting on a cache refresh.',
      },
      {
        title: 'Deployment infra',
        text: 'The React frontend is hosted on Vercel, and the Express API serves the practice sessions behind it. Signing in, loading a category, and submitting an attempt all go from that frontend to the API. The published site is the practice screen, and the API is what stores the attempt once the user submits it. A session is not saved in the browser alone. Reloading the site still finds that attempt on the account, because the API wrote it when the user submitted.',
      },
      {
        title: 'APIs',
        text: 'REST endpoints cover auth, categories, attempt submission, and correct versus wrong word scoring. The practice screen calls those routes in order: sign in, load a clip, submit the typed response, and read back which words matched. Each step is a separate call, and the score that comes back is what the screen shows for that attempt. The user sees the matched words from that response, not from a calculation in the browser.',
      },
      {
        title: 'Database design',
        text: 'PostgreSQL tables hold users, categories, attempts, and the word-level correct and wrong results. An attempt row points at the user and the clip, and the word results hang off that attempt so a review can show exactly what was right or wrong. Opening a past attempt shows those words again, tied to the person who typed them.',
      },
    ],
    liveUrl: 'https://audio-frontend-psi.vercel.app/',
    githubUrl: 'https://github.com/manishjangra761/Audio-Typing',
  },
  {
    title: 'Personal portfolio',
    description:
      'React portfolio for projects, skills, and contact, with Tailwind CSS and Framer Motion. This is the published site linked from the resume.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      {
        title: 'Scale',
        text: 'A single published site for projects, skills, and contact, linked from the resume. A recruiter can move from the work to the skill set and then to a way to write, without opening a second property or a PDF for the same story. The resume link opens this site, and the sections below carry the projects and the skills.',
      },
      {
        title: 'Backend architecture',
        text: 'The site is a React client built from section components. Motion and layout live in the frontend, so scrolling, reveals, and the arrangement of projects and skills are all handled in the browser rather than by a server render. Each section is a piece of that client, and the page the visitor scrolls is the whole portfolio.',
      },
      {
        title: 'Auth flow',
        text: 'The site is public and has no end-user authentication. Projects, skills, and the contact links are open to anyone with the URL. There is no login between the resume link and the page it opens. A recruiter can read the work and follow the contact links without creating an account.',
      },
      {
        title: 'Caching',
        text: 'A static build is served from Netlify, so repeat visits hit cached assets. The sections, fonts, and motion code download once and stay available the next time the same person opens the portfolio. Coming back does not rebuild the page. The cached build is what opens.',
      },
      {
        title: 'Deployment infra',
        text: 'Netlify hosts the production portfolio. A published build is the site the resume links to, and an update to projects or skills goes live when that build is released. Until the next release, the live site is that build, including the project list and the contact links. The resume points at this same address. Opening the link shows the latest release, not a draft.',
      },
      {
        title: 'APIs',
        text: 'There is no application API. Contact actions link out to email and to public profiles, so the page hands the visitor to those channels instead of posting a message to a backend on the portfolio itself. Email, LinkedIn, and GitHub are the paths off the page. Nothing is stored from the portfolio when someone uses them.',
      },
      {
        title: 'Database design',
        text: 'Project, skill, and contact content lives in the React app, not in a database. Changing a project means editing that content in the source and publishing again, which is what the live site then shows. There is no separate content store behind the sections the visitor reads.',
      },
    ],
    liveUrl: 'https://manish-jangra-portfolio.netlify.app/',
    githubUrl: 'https://github.com/manishjangra761/Portfolio',
  },
  {
    title: 'Canvas Craft',
    description:
      'Browser drawing tool with shapes, brush, eraser, a color palette, and image export.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      {
        title: 'Scale',
        text: 'A single-page drawing tool in the browser, with shapes, a brush, an eraser, a color palette, and image export. Everything needed to make a drawing and save it as an image is on that one page. The tools sit beside the canvas, and export saves whatever is drawn there.',
      },
      {
        title: 'Backend architecture',
        text: 'There is no server. Drawing state stays on the canvas element in the page, and each stroke updates that canvas directly. Closing or reloading the page is what clears the drawing, unless the user has already exported it. The brush, shapes, and eraser all paint that same canvas.',
      },
      {
        title: 'Auth flow',
        text: 'There are no accounts. Anyone who opens the page can draw, pick a color, and export. Nothing is signed in, and a drawing is not tied to a user because the tool never asks who is using it. Two people opening the page each get their own canvas, and neither one can see the other.',
      },
      {
        title: 'Caching',
        text: 'The tool is static HTML, CSS, and JavaScript. Nothing is fetched per stroke, so the brush, shapes, and eraser respond from the code already loaded in the page. A stroke never waits on a network request. The canvas updates from the script already in the browser. Color changes and exports use that same loaded script.',
      },
      {
        title: 'Deployment infra',
        text: 'The source is on GitHub, and the tool runs entirely in the browser. Opening the page is enough to draw. There is no hosted API or environment to configure before the canvas works.',
      },
      {
        title: 'APIs',
        text: 'The canvas 2D interface handles the brush, shapes, eraser, palette, and image export. Those calls stay in the page: a stroke paints the canvas, and export reads that same canvas out as an image file.',
      },
      {
        title: 'Database design',
        text: 'There is no database. A drawing exists on the canvas until the user exports it or leaves the page. Nothing is written to a server, so the exported image is the only copy that leaves the browser. Reload the page and the canvas is empty again, unless that image was already saved.',
      },
    ],
    githubUrl: 'https://github.com/manishjangra761/Canvas-Craft',
  },
  {
    title: 'Ecommerce website',
    description:
      'Storefront interface with login and signup handled in the browser through local storage.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      {
        title: 'Scale',
        text: 'A storefront interface with catalog-style pages and a login and signup flow. A visitor can move through the product pages and then sign in or create an account from the same static site, without a separate app. The catalog and the account screens are pages in that one site.',
      },
      {
        title: 'Backend architecture',
        text: 'The pages are static, and account state is handled in the browser. Product pages do not call a server to render, and the signed-in state is whatever the page last wrote on that device. Catalog pages and the account state are both local to the browser that opened them. A refresh keeps the sign-in only because this browser stored it.',
      },
      {
        title: 'Auth flow',
        text: 'Login and signup are stored in local storage on the device. There is no server session. A returning visit on the same browser can read that saved account, and a different device has no record of it.',
      },
      {
        title: 'Caching',
        text: 'The storefront is static HTML, CSS, and JavaScript, so the catalog pages come from those files. Account data stays in local storage and is read when a page needs to know whether someone is signed in.',
      },
      {
        title: 'Deployment infra',
        text: 'The project runs in the browser only, with no cloud deployment. Opening the pages locally is the whole environment: catalog, signup, and login all work from the files and from local storage. There is no hosted server behind the storefront. The files in the browser are the site. Signup and the catalog both work from that local copy.',
      },
      {
        title: 'APIs',
        text: 'There is no remote API. Auth reads and writes local storage, and the catalog pages do not fetch products from a server. Signup, login, and the signed-in state are all browser-side operations. The product pages render from the files, and the account check reads what this browser saved.',
      },
      {
        title: 'Database design',
        text: 'There is no database. User records for the demo live in local storage, keyed on that browser. Clearing site data removes the account, because nothing was stored anywhere else. Signup on one browser does not exist on another.',
      },
    ],
  },
];

export const contactChannels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { label: 'LinkedIn', value: 'manishjangra2002', href: profile.linkedin },
  { label: 'GitHub', value: 'manishjangra761', href: profile.github },
];
