// ✏️ Edit all personal details and copy here. Everything on the site reads from this file.
export const profile = {
  name: "Muskan Kumari",
  tagline: "B.Tech Computer Science student exploring AI, technology & startups.",
  intro:
    "I'm curious about how AI and thoughtful technology can solve real, everyday problems — and how great ideas grow into ventures that matter.",
  linkedin: "https://www.linkedin.com/in/muskan-kumari-018921436",
  github: "https://github.com/itzmuskan020-hub",
  // Leave empty until you want to show an email. When set, a "Email me" button appears.
  email: "",
  // Replace public/resume.pdf with your own resume PDF (keep the same file name).
  resumeUrl: "/resume.pdf",
  about: [
    "I'm a B.Tech Computer Science student with a strong interest in artificial intelligence, emerging technology, entrepreneurship and the startup ecosystem.",
    "I enjoy turning problems I notice around me — in cities, campuses and communities — into project ideas, and learning the skills needed to build them with a team.",
  ],
  interests: ["Artificial Intelligence", "Technology", "Entrepreneurship", "Startups"],
  // Editable starter list — no proficiency levels implied.
  skills: {
    "Programming": ["Python", "C/C++", "JavaScript"],
    "Web": ["HTML/CSS"],
    "Strengths": ["Problem solving", "Teamwork", "Entrepreneurship"],
  } as Record<string, string[]>,
  projects: [
    {
      name: "CivicAI",
      kind: "Project",
      summary:
        "An AI-powered civic issue reporting and tracking platform that helps citizens report local problems and helps authorities act on them faster.",
      features: [
        "Image-based issue detection",
        "Severity estimation",
        "Location tagging",
        "Automatic department routing",
        "Structured complaint generation",
        "Status tracking",
      ],
      link: "https://github.com/itzmuskan020-hub",
    },
    {
      name: "Digital Wellness for Students",
      kind: "Concept",
      summary:
        "A student-focused digital wellness platform concept designed to make mental-health support approachable, private and easy to access.",
      features: [
        "Anonymous self-help resources",
        "Peer support",
        "Counselling appointment booking",
        "Confidentiality-focused design",
        "AI chatbot for guidance",
      ],
      link: "https://github.com/itzmuskan020-hub",
    },
  ],
  activities: [
    {
      title: "Team FutureStack",
      detail: "Member of Team FutureStack, collaborating on technology project ideas.",
    },
    {
      title: "KILN '26",
      detail: "Participated in KILN '26 as part of Team FutureStack.",
    },
  ],
  education: {
    degree: "B.Tech in Computer Science",
    institution: "[Your institution name]",
    graduation: "[Expected graduation year]",
  },
};
