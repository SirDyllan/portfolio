/**
 * All portfolio content lives in this file. Edit the arrays below to add
 * experience, projects, certificates or photos — the components update
 * automatically.
 *
 * Photos & certificates — how to add them later:
 *   1. Drop the image into the matching folder under /public
 *      (e.g. public/images/projects/netone/award.jpg).
 *   2. Add its path (without "public") to the item's `gallery` array, or to a
 *      certificate's `image` field (e.g. "/images/projects/netone/award.jpg").
 *   A `gallery: []` (empty) shows a "Photos coming soon" label; a certificate
 *   without an `image` shows as "Certificate pending".
 */

export const profile = {
  name: "Dyllan Mutsereketa",
  brand: "Dyllan Mutsereketa",
  role: "Software Developer · Data Analyst",
  headline: "IT Intern at Prevsol Digital",
  location: "Zimbabwe",
  email: "dyllanmutsereketa@gmail.com",
  phone: "+263 78 036 8715",
  phoneHref: "+263780368715",
  whatsapp: "https://wa.me/263780368715",
  instagram: "",
  linkedin: "https://www.linkedin.com/in/dyllan-mutsereketa-519855390",
  github: "https://github.com/SirDyllan",
  cv: "/docs/dyllan-mutsereketa-cv.pdf",
  cvDocx: "/docs/dyllan-mutsereketa-cv.docx",
  photo: "/images/dyllan-profile.jpg",
};

export const quickFacts: { label: string; value: string }[] = [
  { label: "Based in", value: "Zimbabwe" },
  { label: "Currently", value: "IT Intern · Prevsol Digital" },
  { label: "Studying", value: "BSc (Hons) Information Technology" },
  { label: "Focus", value: "Software, Data Analysis & Networking" },
];

export type Experience = {
  company: string;
  logo: string;
  website?: string;
  role: string;
  employmentType: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  /** Sister / partner businesses worked with under the same contract. */
  partners?: { name: string; logo: string; note: string }[];
  tags: string[];
  /** Photos from this role. Drop files into public/images/experience/<company>/ */
  gallery?: string[];
  certificateId?: string;
};

export const experience: Experience[] = [
  {
    company: "Prevsol Digital",
    logo: "/logos/prevsol-digital.png",
    role: "IT Intern · Procurement & Data Analytics",
    employmentType: "Internship · 12 month contract",
    location: "Zimbabwe · On site",
    start: "Sep 28, 2026",
    end: "Sep 28, 2027",
    current: true,
    summary:
      "Industrial attachment with Prevsol Digital, a technology, innovation and digitalization company and home of the IT team, where I also support its sister business Feltach Contracting. My role spans software development, IT procurement and data analytics, and I help build the partnerships that move the business forward.",
    highlights: [
      "Gathering and documenting user requirements; preparing process flows, wireframes and technical specifications.",
      "Designing and developing approved applications, databases, APIs and integrations.",
      "Writing maintainable code in the organisation's approved tools, using version control and following code review procedures.",
      "Testing, debugging and recording defects before work is released to production.",
      "Preparing user and technical documentation, and supporting deployment, maintenance and user training.",
      "Handling IT procurement: sourcing and evaluating suppliers, many of them based in the UAE, and preparing submissions for tenders.",
      "Analysing business data and turning it into reports and insights that guide decisions.",
      "Negotiating with mining companies, organisations and NGOs to build partnerships and grow the business.",
      "Reporting progress, blockers and risks to my supervisor, who reviews work before release.",
    ],
    partners: [
      {
        name: "Feltach Contracting",
        logo: "/logos/feltach-contracting.svg",
        note: "Sister business, supported under the same contract",
      },
    ],
    tags: ["Requirements Analysis", "Software Development", "Databases & APIs", "Version Control", "Testing & QA", "Documentation", "Deployment", "IT Procurement", "Supplier Sourcing", "Tenders", "Data Analytics", "Negotiation"],
    // Drop photos into public/images/experience/prevsol/ and list them here,
    // e.g. "/images/experience/prevsol/team.jpg"
    gallery: undefined,
  },
  {
    company: "Codico Software Solutions",
    logo: "/logos/codico-software-solutions.png",
    role: "Software Developer & Graphic Designer",
    employmentType: "Contract · 2 months",
    location: "Remote",
    start: "Jun 2026",
    end: "Jul 2026",
    summary:
      "Remote role contributing to software development and UI work for the company and its clients, alongside design support.",
    highlights: [
      "Contributed to software development tasks and front end implementation.",
      "Produced UI/UX concepts and interface mockups in Figma.",
      "Supported the team with branded visuals and digital content.",
    ],
    tags: ["Software Development", "Front End", "UI/UX", "Figma", "Adobe Photoshop"],
    gallery: [
      "/images/projects/codico/a.jpeg",
      "/images/projects/codico/b.jpeg",
      "/images/projects/codico/c.jpeg",
      "/images/projects/codico/sofa2.png",
      "/images/projects/codico/flyer.png",
      "/images/projects/codico/headboard.png",
    ],
  },
];

export const skills: Record<string, string[]> = {
  Development: [
    "PHP",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "C#",
    "Python",
    "SQL",
    "C",
    "Dart",
    "Flutter",
    "Java",
  ],
  "Data & Analytics": [
    "Power BI",
    "Excel",
    "Access",
    "Data Cleaning",
    "Data Analysis",
    "Jupyter Notebook",
    "Python Libraries (Pandas, NumPy, Matplotlib)",
  ],
  "Database Systems": [
    "Database Design",
    "SQL Queries",
    "ER Diagrams",
    "Normalization",
    "Relational Schemas",
    "CRUD Operations",
    "MySQL Database Management",
    "Firebase Firestore",
  ],
  "Tools & Platforms": [
    "XAMPP",
    "VS Code",
    "MySQL Workbench",
    "GitHub",
    "Vercel",
    "Kaggle",
    "IntelliJ IDEA",
    "Android Studio",
    "Windows Forms",
    "PyCharm",
    "Firebase",
    "Google Maps API",
    "OpenAI API",
    "Prompt Engineering",
    "Namecheap Hosting",
  ],
  "Networking & IT Support": [
    "Cisco Packet Tracer",
    "Network Configuration",
    "LAN Setup & Troubleshooting",
    "TCP/IP & Subnetting",
    "IT Support",
    "Cybersecurity (CTF)",
  ],
  Design: ["Figma", "UI/UX Design", "Adobe Photoshop"],
};

export type Project = {
  title: string;
  type: string;
  summary: string;
  stack: string[];
  link?: string;
  linkLabel?: string;
  certificateId?: string;
  featured?: boolean;
  /** Short status label shown on the card, e.g. "Upcoming · Masvingo". */
  status?: string;
  /**
   * Optional project photo gallery. Add image paths here (e.g.
   * "/images/projects/ceshhar/screen-1.jpg") after dropping the matching
   * files into the public/images/projects/<project-folder>/ directory.
   * With entries, a "View Gallery" button appears; an empty array shows
   * "Photos coming soon".
   */
  gallery?: string[];
};

export const projects: Project[] = [
  {
    title: "Multiband",
    type: "Tech Collective Portfolio & Booking Platform",
    summary:
      "A portfolio and service booking platform I founded and built for Multiband, an 11 member Zimbabwean tech collective spanning software, hardware, media, telecom and public speaking. Content is data driven, so each member, project and service is one file, and booking requests go straight to the right member by email.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend", "Vercel"],
    link: "https://multiband.vercel.app",
    linkLabel: "View Live Project",
    featured: true,
  },
  {
    title: "ServiceBridge AI",
    type: "AI Powered Benefits Navigator (Next.js Web App)",
    summary:
      "A benefits navigator that helps people understand possible public support, prepare documents, and know when to verify with a real human or official office. Users describe their situation in plain language or complete a guided check, and the system suggests support pathways, document readiness, next steps, official source links and office search across food support, education, emergency relief, healthcare, ID documents, youth employment and family support, with source backed examples for the USA and Zimbabwe.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Firebase",
      "Firestore",
      "Vercel",
      "Responsible AI",
    ],
    link: "https://servicebridge-ai.vercel.app",
    linkLabel: "View Live Project",
    certificateId: "usaii-global-hackathon",
    featured: true,
  },
  {
    title: "CareNest: CeSHHAR MASCOT mHealth Tool",
    type: "AI Assisted Mobile Health Platform",
    summary:
      "A youth friendly mHealth platform developed for the CeSHHAR Zimbabwe MASCOT Hackathon to support HIV prevention, pregnancy prevention, private AI assisted guidance, urgent support, quizzes, anonymous community thoughts, and nearby health service discovery for college and university students.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
      "Google Maps API",
      "OpenAI API",
      "AI Chatbot",
      "Health Tech",
      "Mobile UI/UX",
      "Accessibility",
    ],
    certificateId: "ceshhar-mascot-hackathon",
    gallery: [
      "/images/projects/ceshhar/x.jpeg",
      "/images/projects/ceshhar/n.jpeg",
      "/images/projects/ceshhar/m.jpeg",
      "/images/projects/ceshhar/v.jpeg",
      "/images/projects/ceshhar/l.jpeg",
      "/images/projects/ceshhar/b.jpeg",
      "/images/projects/ceshhar/z.jpeg",
    ],
  },
  {
    title: "Hollandsck Property Auction & Verification System (HPAVS)",
    type: "Full Stack Web Platform",
    summary:
      "A live property auction and verification platform that enables secure property listings, OCR based document verification, risk analysis, auction bidding, notifications, and intelligent property validation.",
    stack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "OCR.Space API",
      "Google Maps API",
      "Namecheap Hosting",
      "Responsive Design",
    ],
    link: "https://hollandsck.site",
    linkLabel: "View Live Project",
  },
  {
    title: "NetOne Dynamic Antenna Intelligence",
    type: "Explainable AI Antenna Optimisation · NESARI 2026",
    summary:
      "Built with the GreenHex Team for NetOne Topic 2 at the NESARI 2026 competition in Masvingo. A software first prototype that scans 72 directions of simulated network demand, forecasts where demand is heading, and recommends a safe antenna azimuth and tilt, explaining every decision and choosing HOLD when its forecast is unreliable or the gain is too small. A live dashboard compares fixed, busiest direction and forecast aware strategies, verifies results on unseen data, with a virtual Arduino servo demo in Tinkercad showing the actuator idea.",
    stack: [
      "Python",
      "Flask",
      "JavaScript",
      "HTML & CSS",
      "Forecasting",
      "Explainable AI",
      "Arduino",
      "Tinkercad",
      "Telecommunications",
    ],
    status: "NESARI 2026 · Great Zimbabwe University",
    certificateId: "nesari-competitions",
    featured: true,
    gallery: [
      "/images/projects/netone/04-live.webp",
      "/images/projects/netone/05-presenting.webp",
      "/images/projects/netone/02-greenhex.webp",
      "/images/projects/netone/03-dyllan-hazell.webp",
      "/images/projects/netone/06-mentors.webp",
      "/images/projects/netone/07-ceremony.webp",
      "/images/projects/netone/01-day-before.webp",
      "/images/projects/netone/08-arriving-masvingo.webp",
      "/images/projects/netone/09-night-before.webp",
    ],
  },
  {
    title: "ZAFM Church Management System",
    type: "Web Based Management System",
    summary:
      "A web based platform that helps churches manage member records, departments, events, announcements, and day to day administration.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"],
  },
  {
    title: "Oconnect Marketplace",
    type: "Local Services Platform · In Progress",
    summary:
      "An ongoing marketplace project connecting customers with plumbers, welders, electricians, mechanics, small traders, and other skilled workers.",
    stack: ["Flutter", "Dart", "Marketplace", "Local Business"],
  },
  {
    title: "Job Application Portal",
    type: "Desktop Database System",
    summary:
      "A C# Windows Forms application connected to MySQL for managing job applications and recruitment records.",
    stack: ["C#", "MySQL", "Windows Forms"],
  },
];

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  description: string;
  /** Leave empty until the certificate is received — it shows as "pending". */
  image?: string;
  date?: string;
};

export const certificates: Certificate[] = [
  {
    id: "ceshhar-mascot-hackathon",
    title: "MASCOT mHealth Hackathon 2026",
    issuer: "CeSHHAR Zimbabwe",
    description:
      "Certificate of participation for developing CareNest, an AI assisted mHealth platform built during the CeSHHAR Zimbabwe MASCOT Hackathon.",
    image: "/certificates/ceshhar-mascot-hackathon.jpeg",
  },
  {
    id: "usaii-global-hackathon",
    title: "USAII Global Hackathon 2026 Finalist",
    issuer: "United States Artificial Intelligence Institute (USAII)",
    description:
      "Named a finalist for building ServiceBridge AI, an AI powered public benefits navigator, at the USAII Global Hackathon.",
    image: "/certificates/usaii-global-hackathon.png",
  },
  {
    id: "nesari-competitions",
    title: "NESARI 2026: NetOne Topic 2",
    issuer: "NESARI Competitions · Masvingo",
    description:
      "For NetOne Dynamic Antenna Intelligence, an explainable antenna optimisation prototype presented with the GreenHex Team at NESARI 2026 in Masvingo.",
    // Add the certificate later: drop it into public/certificates/ and set
    // image: "/certificates/nesari-competitions.jpg",
  },
  {
    id: "potraz-national-ctf",
    title: "POTRAZ National Capture the Flag",
    issuer: "CTFROOM · POTRAZ",
    description:
      "Certificate of completion for the POTRAZ National Capture the Flag Competition on CTFROOM RangeTime, recognising applied cybersecurity and problem solving skills. Certificate ID CTFR-EVT-59BF82FBCF.",
    image: "/certificates/potraz-national-ctf.webp",
    date: "Nov 8, 2026",
  },
  {
    id: "freeacademy-prompt-engineering",
    title: "Prompt Engineering",
    issuer: "FreeAcademy.ai",
    description:
      "Verified credential for completing the 29 lesson Prompt Engineering course and passing the final exam. Credential FA-2026-PE-167K1N.",
    image: "/certificates/freeacademy-prompt-engineering.webp",
    date: "Nov 4, 2026",
  },
];

export const timeline: string[] = [
  "Bachelor's Honours Degree in Information Technology",
  "Background in Electronic Engineering concepts",
  "Data Science Club member: hackathons, Kaggle and collaborative development",
  "Property and rental management operations exposure",
  "Health tech innovation through the CeSHHAR Zimbabwe MASCOT Hackathon",
  "Finalist at the USAII Global Hackathon 2026 with ServiceBridge AI",
  "Remote Software Developer at Codico Software Solutions (Jun to Jul 2026)",
  "Telecom innovation: NetOne Dynamic Antenna Intelligence with the GreenHex Team at NESARI 2026, Masvingo",
  "IT Intern at Prevsol Digital & Feltach Contracting (Sep 2026 to Sep 2027)",
  "Prompt Engineering credential from FreeAcademy.ai (Nov 2026)",
  "POTRAZ National Capture the Flag Competition on CTFROOM (Nov 2026)",
];

export type ModuleResult = { code: string; name: string; mark: number; grade: string };

export const academicResults = {
  degree: "BSc (Hons) Information Technology",
  school: "Chinhoyi University of Technology",
  summary:
    "Official examination results from Chinhoyi University of Technology across my first three semesters. Every module passed at B- or better, with ten of twelve at A or A-.",
  stats: [
    { value: "77%", label: "Average mark" },
    { value: "12", label: "Modules passed" },
    { value: "10", label: "At A or A-" },
    { value: "85", label: "Highest mark (OOP)" },
  ],
  semesters: [
    {
      title: "Level 1 · Semester 1",
      period: "Aug to Dec 2024",
      modules: [
        { code: "CUITM102", name: "Computer Mathematics", mark: 61, grade: "B-" },
        { code: "CUITM114", name: "Introduction to Procedural Programming", mark: 79, grade: "A-" },
        { code: "CUITM217", name: "Data Science", mark: 79, grade: "A-" },
        { code: "CULCSM101", name: "Communication and Information Technology", mark: 64, grade: "B-" },
      ],
    },
    {
      title: "Level 1 · Semester 2",
      period: "Mar to Jun 2025",
      modules: [
        { code: "CUITM113", name: "Visual Languages and Programming", mark: 76, grade: "A-" },
        { code: "CUITM109", name: "Operating Systems", mark: 84, grade: "A" },
        { code: "CUITM108", name: "Computer Organization and Architecture", mark: 78, grade: "A-" },
        { code: "CUITM201", name: "Database Systems", mark: 78, grade: "A-" },
      ],
    },
    {
      title: "Level 2 · Semester 1",
      period: "Aug to Dec 2025",
      modules: [
        { code: "CUITM206", name: "Object Oriented Programming", mark: 85, grade: "A" },
        { code: "CUITM220", name: "Software Engineering and Project Management", mark: 75, grade: "A-" },
        { code: "CUITM218", name: "Mobile Applications Development", mark: 81, grade: "A" },
        { code: "CUITM216", name: "Website Design and E-Business", mark: 80, grade: "A-" },
      ],
    },
  ] as { title: string; period: string; modules: ModuleResult[] }[],
};

export const databaseExperience = {
  summary:
    "I have practical and academic experience designing, developing and managing database driven systems. Through university coursework, client work and personal projects, I have worked with relational databases, SQL, Firebase Firestore and backend system integration.",
  skills: [
    "Database Design and Modeling",
    "SQL Query Writing",
    "Relational Databases",
    "ER Diagrams",
    "Database Normalization",
    "MySQL Database Management",
    "Firebase Firestore",
    "CRUD Operations",
    "Backend Integration with Databases",
    "Data Validation and Storage",
    "Cloud Database Integration",
  ],
  practical: [
    "Developed database connected applications using MySQL.",
    "Built systems that store, retrieve, update and manage user data efficiently.",
    "Designed relational schemas and structured tables for real world systems.",
    "Implemented authentication, records management and form based data handling.",
    "Integrated Firebase Firestore for live mobile app data such as service directory records, feedback and user features.",
  ],
};
