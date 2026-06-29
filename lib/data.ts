export const profile = {
  name: "Sunan Jibril",
  title: "IT Enthusiast",
  role: "IT Support Engineer",
  tagline: "Solum Secundum Data et Veritas",
  taglineMeaning: "Only According to Data and Truth",
  location: "Kota Tangerang, Banten, Indonesia",
  education: "S1 Information Systems — Universitas Pamulang",
  photo: "/nanz.jpg",
  summary:
    "Detail-oriented and certified IT Support Engineer with 2+ years of hands-on experience in IT Helpdesk Coordination, Desktop-as-a-Service (DaaS) operations, and technical user support. Proven ability to manage deployments, monitor service performance, and ensure SLA compliance using tools like ServiceNow.",
  summaryExtended:
    "Strong communicator, adept at collaborating with cross-functional teams and presenting progress in high-level meetings. Experienced with networking (LAN/WAN/WLAN), cPanel, DNS, and server management on cloud platforms — actively seeking new opportunities to contribute technical expertise and service excellence in a dynamic IT environment.",
};

/** Sections the draggable liquid-glass nav slides between. */
export type NavItem = { id: string; label: string; short: string };

export const navItems: NavItem[] = [
  { id: "hero", label: "Home", short: "Home" },
  { id: "about", label: "About", short: "About" },
  { id: "experience", label: "Experience", short: "Work" },
  { id: "skills", label: "Skills", short: "Skills" },
  { id: "certifications", label: "Certifications", short: "Certs" },
  { id: "contact", label: "Contact", short: "Contact" },
];

export type TimelineEntry = {
  type: "work" | "education";
  role: string;
  org: string;
  period: string;
  location?: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    type: "work",
    role: "Information Technology Support",
    org: "SPE Solution",
    period: "Jun 2026 — Present",
    location: "Kota Tangerang",
    description:
      "Providing technical support and IT operations as part of the SPE Solution team.",
  },
  {
    type: "work",
    role: "IT Help Desk Coordinator",
    org: "Macro Trend Technology",
    period: "Jan 2025 — Jun 2026",
    location: "Jakarta Utara",
    description:
      "Assigned deployment tickets to field engineers for timely DaaS rollouts, tracked status in ServiceNow within SLA, followed up on device returns, and presented progress in weekly client meetings — keeping SLA breaches to a minimum.",
  },
  {
    type: "work",
    role: "IT Support Engineer",
    org: "Macro Trend Technology",
    period: "Oct 2023 — Jan 2025",
    location: "Jakarta Selatan",
    description:
      "Managed Seat-Management DaaS assets end-to-end: deployment, decommissioning, billing through ServiceNow, quality checks, hardware/software installation, BAST creation, and end-user follow-up via Email & Microsoft Teams.",
  },
  {
    type: "work",
    role: "Owner",
    org: "SkyUniverse Technology",
    period: "Oct 2023 — Dec 2024",
    location: "Jakarta",
    description:
      "Co-founded a tech brand behind Lucky Proxy, SkyUniverse.tech & Nevipedia.com. Led technical operations: cPanel & email management, DNS + Cloudflare integration, and VPS deployment on DigitalOcean & Linode (Windows Server 2012 R2 / 2019).",
  },
  {
    type: "work",
    role: "YouTuber (Self-Employed)",
    org: "Wiraswasta",
    period: "Apr 2021 — Apr 2023",
    location: "Indonesia",
    description:
      "Built a gaming-content channel around Growtopia, Stumble Guys & PUBGM — reached YouTube Partner Program eligibility within two months and surpassed 12,000 subscribers.",
  },
  {
    type: "work",
    role: "IT Trainee",
    org: "Golden Tulip Essential Tangerang",
    period: "Nov 2021 — Feb 2022",
    location: "Tangerang, Banten",
    description:
      "Set up meeting-room AV (sound systems, projectors), ran weekly quality checks on floor wireless access points, managed hotel display content, and assisted installing new APs to optimize network coverage.",
  },
  {
    type: "education",
    role: "S1, Information Systems",
    org: "Universitas Pamulang",
    period: "Since Sep 2023",
    location: "Indonesia",
    description:
      "Studying Information Systems — bridging business processes, data, and modern technology infrastructure.",
  },
];

export type SkillCategory = {
  name: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "IT Support & Service",
    icon: "◈",
    skills: [
      "IT Helpdesk Coordination",
      "DaaS Operations",
      "ServiceNow",
      "SLA Compliance",
      "Project Management",
    ],
  },
  {
    name: "Networking & Security",
    icon: "◇",
    skills: [
      "LAN / WAN / WLAN",
      "Cybersecurity",
      "Wireless Networks",
      "Cloudflare",
      "DNS",
    ],
  },
  {
    name: "Systems & Cloud",
    icon: "◆",
    skills: [
      "Windows Server",
      "cPanel",
      "VPS (DigitalOcean / Linode)",
      "Server Management",
      "Generative AI",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  abbr: string;
};

export const certifications: Certification[] = [
  {
    name: "Google Project Management",
    abbr: "GPM",
    issuer: "Professional Certificate — Google",
  },
  {
    name: "Fortinet Certified Associate",
    abbr: "FCA",
    issuer: "Cybersecurity — Fortinet",
  },
  {
    name: "DCNP Wireless Certification",
    abbr: "DCNP",
    issuer: "D-Link Certified Network Professional",
  },
  {
    name: "xFusion Certified IT Associate",
    abbr: "xCIA",
    issuer: "xFusion",
  },
  {
    name: "Introduction to Generative AI",
    abbr: "GenAI",
    issuer: "Google Cloud",
  },
];

export const socials = [
  {
    label: "Email",
    href: "mailto:jibrilsunan26@gmail.com",
    handle: "jibrilsunan26@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sunanjibril",
    handle: "in/sunanjibril",
  },
  {
    label: "Phone",
    href: "tel:+6287889015796",
    handle: "+62 878-8901-5796",
  },
];
