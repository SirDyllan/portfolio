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
  cv: "/docs/dyllan-mutsereketa-cv.docx",
  photo: "/images/dyllan-profile.jpg",
};

export const quickFacts: { label: string; value: string }[] = [
  { label: "Based in", value: "Zimbabwe" },
  { label: "Currently", value: "IT Intern · Prevsol Digital" },
  { label: "Studying", value: "BSc (Hons) Information Technology" },
  { label: "Focus", value: "Web, Mobile, Data & Design" },
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
    role: "IT Intern",
    employmentType: "Internship · 12-month contract",
    location: "Zimbabwe · On-site",
    start: "Sep 28, 2026",
    end: "Sep 28, 2027",
    current: true,
    summary:
      "Industrial attachment with Prevsol Digital, a technology, innovation and digitalization company. My contract is held under Prevsol Digital and I also support its sister business, Feltach Contracting.",
    highlights: [
      "Contributing to software, web and digital solutions delivered for Prevsol Digital and its clients.",
      "Providing IT support, systems administration and day-to-day technical assistance across both businesses.",
      "Supporting Feltach Contracting with its digital presence, documentation and technology needs.",
      "Applying graphic design skills to branded visuals and digital marketing content.",
    ],
    partners: [
      {
        name: "Feltach Contracting",
        logo: "/logos/feltach-contracting.svg",
        note: "Sister business — supported under the same contract",
      },
    ],
    tags: ["Software Development", "IT Support", "Web", "Digital Transformation", "Graphic Design"],
    // Drop photos into public/images/experience/prevsol/ and list them here,
    // e.g. "/images/experience/prevsol/team.jpg"
    gallery: undefined,
  },
  {
    company: "Codico Software Solutions",
    logo: "/logos/codico-software-solutions.png",
    role: "Graphic Designer & Software Developer",
    employmentType: "Contract · 2 months",
    location: "Remote",
    start: "Jun 2026",
    end: "Jul 2026",
    summary:
      "Worked remotely across design and development — producing brand visuals and marketing creatives while contributing to software and UI work for the company and its clients.",
    highlights: [
      "Designed branded visuals, flyers and social media creatives in Adobe Photoshop.",
      "Produced UI/UX concepts and interface mockups in Figma.",
      "Scheduled and managed social content through Meta Business Suite.",
      "Contributed to software development tasks and front-end implementation.",
    ],
    tags: ["Adobe Photoshop", "Figma", "Meta Business Suite", "UI/UX Design", "Software Development"],
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
    "Namecheap Hosting",
  ],
  "Design & Marketing": [
    "Adobe Photoshop",
    "Figma",
    "Meta Business Suite",
    "Graphic Design",
    "UI/UX Design",
    "Social Media Management",
  ],
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
    title: "NetOne Dynamic Antenna Intelligence",
    type: "Telecom Network Intelligence · Nesari Competitions",
    summary:
      "A competition project built for the Nesari Competitions around NetOne's mobile network. It explores dynamic antenna intelligence — using network data and analytics to monitor antenna performance and support smarter, data-driven coverage and capacity decisions. To be presented at the Nesari Competitions event in Masvingo.",
    stack: ["Telecommunications", "Network Intelligence", "Data Analytics", "Innovation"],
    status: "Nesari Competitions · Masvingo",
    certificateId: "nesari-competitions",
    featured: true,
    // Drop event photos into public/images/projects/netone/ then list them here,
    // e.g. "/images/projects/netone/pitch.jpg"
    gallery: [],
  },
  {
    title: "ServiceBridge AI",
    type: "AI-Powered Benefits Navigator (Next.js Web App)",
    summary:
      "A benefits navigator that helps people understand possible public support, prepare documents, and know when to verify with a real human or official office. Users describe their situation in plain language or complete a guided check, and the system suggests support pathways, document readiness, next steps, official source links and office search across food support, education, emergency relief, healthcare, ID documents, youth employment and family support — with source-backed examples for the USA and Zimbabwe.",
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
    title: "CareNest — CeSHHAR MASCOT mHealth Tool",
    type: "AI-Assisted Mobile Health Platform",
    summary:
      "A youth-friendly mHealth platform developed for the CeSHHAR Zimbabwe MASCOT Hackathon to support HIV prevention, pregnancy prevention, private AI-assisted guidance, urgent support, quizzes, anonymous community thoughts, and nearby health service discovery for college and university students.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
      "Google Maps API",
      "OpenAI API",
      "AI Chatbot",
      "Health-Tech",
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
      "A live property auction and verification platform that enables secure property listings, OCR-based document verification, risk analysis, auction bidding, notifications, and intelligent property validation.",
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
    title: "ZAFM Church Management System",
    type: "Web-Based Management System",
    summary:
      "A web-based platform that helps churches manage member records, departments, events, announcements, and day-to-day administration.",
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
  {
    title: "Low-Cost Water Heater",
    type: "Engineering Innovation",
    summary:
      "An affordable engineering solution designed for rural and peri-urban communities in Zimbabwe.",
    stack: ["Engineering", "Innovation", "Community Impact"],
  },
  {
    title: "Other University & Practice Projects",
    type: "Student Project Collection",
    summary:
      "Additional practical projects including a gym management system, the Tryex Gadgets online store, and a real estate listing website prototype.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
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
      "Certificate of participation for developing CareNest, an AI-assisted mHealth platform built during the CeSHHAR Zimbabwe MASCOT Hackathon.",
    image: "/certificates/ceshhar-mascot-hackathon.jpeg",
  },
  {
    id: "usaii-global-hackathon",
    title: "USAII Global Hackathon 2026 — Finalist",
    issuer: "United States Artificial Intelligence Institute (USAII)",
    description:
      "Named a finalist for building ServiceBridge AI, an AI-powered public benefits navigator, at the USAII Global Hackathon.",
    image: "/certificates/usaii-global-hackathon.png",
  },
  {
    id: "nesari-competitions",
    title: "Nesari Competitions — NetOne Challenge",
    issuer: "Nesari Competitions · Masvingo",
    description:
      "For the NetOne Dynamic Antenna Intelligence project presented at the Nesari Competitions in Masvingo.",
    // Add the certificate later: drop it into public/certificates/ and set
    // image: "/certificates/nesari-competitions.jpg",
  },
];

export const timeline: string[] = [
  "Bachelor's Honours Degree in Information Technology",
  "Background in Electronic Engineering concepts",
  "Data Science Club member — hackathons, Kaggle and collaborative development",
  "Property and rental management operations exposure",
  "Health-tech innovation through the CeSHHAR Zimbabwe MASCOT Hackathon",
  "Finalist at the USAII Global Hackathon 2026 with ServiceBridge AI",
  "Remote Graphic Designer & Software Developer at Codico Software Solutions (Jun – Jul 2026)",
  "Telecom innovation: NetOne Dynamic Antenna Intelligence for the Nesari Competitions, Masvingo",
  "IT Intern at Prevsol Digital & Feltach Contracting (Sep 2026 – Sep 2027)",
];

export const databaseExperience = {
  summary:
    "I have practical and academic experience designing, developing and managing database-driven systems. Through university coursework, client work and personal projects, I have worked with relational databases, SQL, Firebase Firestore and backend system integration.",
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
    "Developed database-connected applications using MySQL.",
    "Built systems that store, retrieve, update and manage user data efficiently.",
    "Designed relational schemas and structured tables for real-world systems.",
    "Implemented authentication, records management and form-based data handling.",
    "Integrated Firebase Firestore for live mobile app data such as service directory records, feedback and user features.",
  ],
};
