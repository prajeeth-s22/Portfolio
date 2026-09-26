import {
  Brain,
  Code2,
  Database,
  Cloud,
  Cpu,
  Globe,
  Terminal,
  Layers,
  Shield,
  Mic,
  Eye,
  Bot,
  Rocket,
  Award,
  Users,
  BookOpen,
  Lightbulb,
  Zap,
  Server,
  GitBranch,
} from "lucide-react";

// ─── Personal Info ────────────────────────────────────────────────
export const personalInfo = {
  name: "Partha Sarathi S",
  initials: "PS",
  headline: "Building Intelligent Systems for the Real World.",
  subtitle:
    "I'm Partha Sarathi S — a Computer Science & Engineering student specializing in AI & ML, passionate about building intelligent software, AI applications, cloud solutions, and data-driven systems.",
  roles: ["AI Engineer", "Software Developer", "Data Analyst", "Cloud Engineer"],
  tagline: "AI/ML × Software × Cloud × Data",
  status: "Open to Opportunities",
  education: {
    institution: "VIT Vellore",
    degree: "B.Tech CSE – AI & ML",
    cgpa: "8.0 / 10.0",
    location: "Hosur, Tamil Nadu, India",
    graduation: "2027",
  },
  social: {
    email: "parthasarathiatwork@gmail.com",
    linkedin: "https://www.linkedin.com/in/parthasarathi22",
    github: "https://github.com/prajeeth-s22",
  },
  resumeUrl: "/resume.pdf",
};

// ─── About ────────────────────────────────────────────────────────
export const aboutText = [
  "I'm a 4th-year B.Tech Computer Science & Engineering student specializing in AI & ML at VIT Vellore.",
  "I'm deeply interested in Artificial Intelligence, Machine Learning, Software Development, Cloud Computing, and Data — and I love turning ideas into practical technology solutions.",
  "Through internships, technical communities, projects, research, hackathons, and extracurricular activities, I've built a strong foundation that spans AI/ML, software engineering, cloud infrastructure, and data analysis.",
];

// ─── Career Focus ─────────────────────────────────────────────────
export const careerFocus = [
  {
    title: "AI Engineer",
    icon: "Brain",
    color: "accent",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "NLP",
      "Speech Recognition",
      "Computer Vision",
    ],
  },
  {
    title: "Software Developer",
    icon: "Code2",
    color: "violet",
    skills: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "React.js",
      "REST APIs",
    ],
  },
  {
    title: "Data Analyst",
    icon: "Database",
    color: "success",
    skills: [
      "Python",
      "SQL",
      "Excel",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data-driven problem solving",
    ],
  },
  {
    title: "Cloud Engineer",
    icon: "Cloud",
    color: "accent-light",
    skills: [
      "AWS",
      "GCP",
      "Cloud Computing",
      "Linux",
      "Git",
      "DevOps concepts",
    ],
  },
];

// ─── Skills ───────────────────────────────────────────────────────
export const skillCategories = [
  {
    name: "Programming",
    icon: "Terminal",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "R", "SQL", "MySQL"],
  },
  {
    name: "AI / ML",
    icon: "Brain",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "NLP",
      "Speech Recognition",
      "OpenCV",
    ],
  },
  {
    name: "Web",
    icon: "Globe",
    skills: ["HTML", "CSS", "React.js", "REST API", "Firebase"],
  },
  {
    name: "Cloud / DevOps",
    icon: "Cloud",
    skills: ["AWS", "GCP", "Cloud Computing", "Git", "Linux"],
  },
  {
    name: "Blockchain",
    icon: "Layers",
    skills: ["Solidity", "Smart Contracts", "Blockchain Development"],
  },
  {
    name: "Tools",
    icon: "Cpu",
    skills: ["NumPy", "Pandas", "Matplotlib", "Excel", "Figma", "Gemini", "Antigravity"],
  },
  {
    name: "Professional",
    icon: "Users",
    skills: [
      "Research",
      "Leadership",
      "Management",
      "Operations",
      "Content Strategy",
      "Marketing",
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────
export const experiences = [
  {
    company: "Renza",
    role: "Research & Management Intern",
    period: "Aug 2026 – Present",
    location: "",
    description: [
      "Support Research and Development through research, analysis, idea exploration, and evaluation of emerging technologies and solutions.",
      "Contribute to management activities including coordination, documentation, problem solving, and technology-driven initiatives.",
    ],
    tags: ["Research", "Management", "R&D", "Technology"],
  },
  {
    company: "Titan Company Limited",
    role: "SAP Systems Intern",
    period: "Jun 2026",
    location: "Hosur",
    description: [
      "Gained exposure to enterprise SAP workflows, HTML, CSS, Microsoft Excel, and industrial software practices.",
      "Developed practical understanding of SAP-based business processes.",
    ],
    tags: ["SAP", "HTML", "CSS", "Excel", "Enterprise"],
  },
  {
    company: "Google Developers Group",
    role: "GDG Member",
    period: "May 2026 – Present",
    location: "Chennai",
    description: [
      "Participated in technical sessions and developer events focused on GCP, Antigravity, cloud technologies, and modern AI tools.",
    ],
    tags: ["GCP", "Cloud", "AI", "Developer Events"],
  },
  {
    company: "Entrepreneurship Cell, VIT",
    role: "Content & Operations Executive",
    period: "May 2024 – Apr 2025",
    location: "Vellore",
    description: [
      "Created articles and event content while supporting event planning, operations, coordination, and execution.",
    ],
    tags: ["Content", "Operations", "Event Planning", "Leadership"],
  },
  {
    company: "RoboVITics, VIT",
    role: "AI & ML Core Member",
    period: "Apr 2024 – Apr 2025",
    location: "Vellore",
    description: [
      "Worked on AI/ML concepts and computer vision applications involving machine learning, image processing, and robotics.",
    ],
    tags: ["AI/ML", "Computer Vision", "Robotics", "Image Processing"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────
export const projects = [
  {
    title: "Voice Cart AI – Voice Command Shopping Assistant",
    category: "Generative AI / NLP / Web",
    description:
      "Built an AI-powered voice shopping assistant using Speech Recognition, NLP, React.js, JavaScript, REST APIs, and web technologies for voice-based product discovery. Enabled voice-driven shopping workflows through an interactive web application integrating AI, speech processing, and frontend technologies.",
    technologies: [
      "Speech Recognition",
      "NLP",
      "React.js",
      "JavaScript",
      "REST APIs",
    ],
    featured: true,
    link: "#",
    github: "#",
  },
  {
    title: "Voice Identification System",
    category: "AI / Speech Recognition",
    description:
      "Developed an AI-based voice identification system using Speech Recognition, AI/ML, JavaScript, HTML, and CSS for user recognition and verification. Built a web interface for voice processing and identity matching, demonstrating an end-to-end AI application.",
    technologies: [
      "Speech Recognition",
      "AI/ML",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    featured: false,
    link: "#",
    github: "#",
  },
  {
    title: "Battery Management System",
    category: "IoT / Embedded Systems / Hardware",
    badge: "Make-a-thon – Hardware Hackathon",
    description:
      "Developed an IoT-enabled BMS prototype using STM32, ESP32, Arduino, CAN Bus, LiFePO4 battery, LCD, sensors, and voltage regulation for battery monitoring. Integrated embedded hardware and communication interfaces to monitor battery parameters and display real-time system information.",
    technologies: [
      "STM32",
      "ESP32",
      "Arduino",
      "CAN Bus",
      "LiFePO4",
      "IoT",
    ],
    featured: false,
    link: "#",
    github: "#",
  },
  {
    title: "Supervised ML-based Intrusion Detection System",
    category: "AI / Cybersecurity / Research",
    badge: "IEEE Conference Accepted · 2025",
    description:
      "Developed supervised ML models for IoT intrusion detection, improving detection while reducing false positives through feature optimization.",
    technologies: [
      "Machine Learning",
      "IoT",
      "Intrusion Detection",
      "Feature Optimization",
    ],
    featured: false,
    link: "#",
    github: "#",
    isResearch: true,
  },
];

// ─── Certifications ──────────────────────────────────────────────
export const certifications = [
  {
    title: "AWS Certified AI Practitioner",
    provider: "Amazon Web Services",
    date: "Aug 2026",
    icon: "Award",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services",
    date: "May 2026",
    icon: "Cloud",
  },
  {
    title: "Oracle OCI AI Associate",
    provider: "Oracle",
    date: "Oct 2025",
    icon: "Cpu",
  },
];

// ─── Achievements ─────────────────────────────────────────────────
export const achievements = [
  {
    title: "Smart India Hackathon",
    description: "Participated in Smart India Hackathon",
    icon: "Rocket",
  },
  {
    title: "GDG Developer Events",
    description:
      "Participated in technical developer events through Google Developers Group",
    icon: "Globe",
  },
  {
    title: "RoboVITics Core Member",
    description: "AI & ML Core Member at RoboVITics, VIT",
    icon: "Bot",
  },
  {
    title: "E-Cell Executive",
    description:
      "Content & Operations Executive at Entrepreneurship Cell, VIT",
    icon: "Lightbulb",
  },
  {
    title: "Make-a-thon",
    description: "Hardware Hackathon / Make-a-thon participation",
    icon: "Zap",
  },
];

// ─── Interests ────────────────────────────────────────────────────
export const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI",
  "Cloud Computing",
  "Software Engineering",
  "Data & Analytics",
  "Speech AI",
  "Computer Vision",
  "Robotics",
  "Emerging Technologies",
  "Research & Innovation",
];

// ─── Navigation ───────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

// ─── Command Palette Commands ─────────────────────────────────────
export const commands = [
  { command: "/home", label: "Go to Home", section: "#home" },
  { command: "/about", label: "Go to About", section: "#about" },
  { command: "/projects", label: "Go to Projects", section: "#projects" },
  { command: "/experience", label: "Go to Experience", section: "#experience" },
  { command: "/skills", label: "Go to Skills", section: "#skills" },
  { command: "/contact", label: "Go to Contact", section: "#contact" },
  {
    command: "whoami",
    label:
      "Partha Sarathi — CSE (AI & ML) | Builder | Research Enthusiast",
    section: null,
  },
];
