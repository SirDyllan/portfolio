export const profile = {
  name: "Dyllan Mutsereketa",
  brand: "Dyllan Mutsereketa",
  role: "IT Student | Software Developer | Data Enthusiast",
  location: "Zimbabwe",
  email: "dyllanmutsereketa@gmail.com",
  phone: "+263 78 036 8715",
  phoneHref: "+263780368715",
  linkedin: "https://www.linkedin.com/in/dyllan-mutsereketa-519855390",
  github: "https://github.com/SirDyllan",
  cv: "/docs/dyllan-mutsereketa-cv.docx",
  photo: "/images/dyllan-profile.jpg",
};

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
    "Figma",
    "Kaggle",
    "IntelliJ IDEA",
    "Android Studio",
    "Windows Forms",
    "Pycharm",
    "Firebase",
    "Google Maps API",
    "OpenAI API",
    "Namecheap Hosting",
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
};

export const projects: Project[] = [
  {
    title: "ServiceBridge AI",
    type: "AI-Powered Benefits Navigator (Next.js Web App)",
    summary:
      "A benefits navigator that helps people understand possible public support, prepare documents, and know when to verify with a real human or official office. Users describe their situation in plain language or complete a guided check, and the system suggests support pathways, document readiness, next steps, official source links, Google Maps office search links, and human verification routes across food support, education, emergency relief, healthcare access, ID/document readiness, youth employment and family support, with source-backed examples for the USA and Zimbabwe.",
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
    title: "CeSHHAR Zimbabwe / MASCOT mHealth Tool",
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
      "Accessibility Features",
    ],
    certificateId: "ceshhar-mascot-hackathon",
  },
  {
    title: "Hollandsck Intelligent Property Auction & Verification System (HPAVS)",
    type: "Full Stack Web Platform",
    summary:
      "A live intelligent property auction and verification platform that enables secure property listings, OCR-based document verification, risk analysis, auction bidding, notifications, and intelligent property validation.",
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
    type: "Web-Based Church Management System",
    summary:
      "A web-based platform developed to help churches efficiently manage member records, departments, events, announcements, and church administration processes.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"],
  },
  {
    title: "Oconnect Marketplace",
    type: "Local Services Platform",
    summary:
      "A marketplace concept ongoing project connecting customers with plumbers, welders, electricians, mechanics, small traders, and skilled workers.",
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
      "An affordable engineering solution idea designed for rural and peri-urban communities in Zimbabwe.",
    stack: ["Engineering", "Innovation", "Community Impact"],
  },
  {
    title: "Other University & Practice Projects",
    type: "Student Project Collection",
    summary:
      "Additional practical projects including a gym management system, Tryex Gadgets online store, and a real estate listing website prototype.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
];

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  description: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    id: "ceshhar-mascot-hackathon",
    title: "MASCOT Hackathon",
    issuer: "CeSHHAR Zimbabwe",
    description:
      "Awarded for developing CareNest, an AI-assisted mHealth platform built during the CeSHHAR Zimbabwe MASCOT Hackathon.",
    image: "/certificates/ceshhar-mascot-hackathon.jpeg",
  },
  {
    id: "usaii-global-hackathon",
    title: "USAII Global Hackathon",
    issuer: "United States Artificial Intelligence Institute (USAII)",
    description:
      "Awarded for building ServiceBridge AI, an AI-powered public benefits navigator, at the USAII Global Hackathon.",
    image: "/certificates/usaii-global-hackathon.png",
  },
];

export const timeline: string[] = [
  "Bachelor's Honours Degree in Information Technology",
  "Background exposure to Electronic Engineering concepts",
  "Data Science Club participation, hackathons, Kaggle, and collaborative development",
  "Property and rental management operations exposure",
  "Health-tech innovation experience through the CeSHHAR Zimbabwe MASCOT Hackathon",
  "AI product-building experience through the USAII Global Hackathon",
];

export const databaseExperience = {
  summary:
    "I have practical and academic experience in designing, developing, and managing database-driven systems. Through university coursework and personal projects, I have worked with relational databases, SQL, Firebase Firestore, and backend system integration.",
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
    "Built systems capable of storing, retrieving, updating, and managing user data efficiently.",
    "Designed relational schemas and structured tables for real-world systems.",
    "Implemented authentication, records management, and form-based data handling.",
    "Integrated Firebase Firestore for live mobile app data such as service directory records, feedback, and user-related app features.",
  ],
};
