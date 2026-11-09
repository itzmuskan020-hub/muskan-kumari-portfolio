// ✏️ Edit all personal details and copy here. Everything on the site reads from this file.
export const profile = {
  name: "Muskan Kumari",
  tagline: "B.Tech Computer Science & Engineering student at Haridwar University, interested in AI, technology & startups.",
  intro:
    "I enjoy learning by building — from small C programs to team web projects — and I'm curious about how technology and entrepreneurship can solve real problems.",
  linkedin: "https://www.linkedin.com/in/muskan-kumari-018921436/",
  github: "https://github.com/itzmuskan020-hub",
  // Leave empty until you want to show an email. When set, a "Email me" button appears.
  email: "",
  // Regenerate or replace public/resume.pdf to update the resume.
  resumeUrl: "/resume.pdf",
  about: [
    "I'm Muskan Kumari, a B.Tech Computer Science & Engineering student at Haridwar University with interests in artificial intelligence, technology, web development and startups.",
    "My projects so far include a beginner C console program and a team-built campus resource-sharing web demo. I value problem solving, teamwork and clear communication, and I'm steadily building my technical foundations.",
  ],
  interests: ["Artificial Intelligence", "Technology", "Web Development", "Startups"],
  // Editable list based on technologies used in her GitHub projects — no proficiency levels implied.
  skills: {
    "Languages": ["C", "C++", "Python", "JavaScript", "HTML/CSS"],
    "Tools & frameworks": ["React", "Vite", "Git/GitHub", "Supabase (schema groundwork only)"],
    "Strengths": ["Problem solving", "Teamwork", "Communication & presentation"],
  } as Record<string, string[]>,
  projects: [
    {
      name: "CampusVault",
      kind: "Team project · Demo",
      summary:
        "A responsive campus resource-sharing demo for underused campus equipment and spaces, running as a browser-local demo with fictional data.",
      features: [
        "Catalogue search and filters",
        "Booking requests",
        "Staff approval, rejection and waitlist",
        "Booking overlap detection",
        "Resource management",
        "Checkout/return notes",
        "Incident reports",
        "Notices and activity trail",
      ],
      stack: ["React 19", "Vite", "JavaScript", "Supabase JS (not yet integrated)"],
      note: "Not a production backend: Supabase schema and policy groundwork exists, but the app is not yet switched to Supabase Auth or backend reads/writes.",
      link: "https://github.com/itzmuskan020-hub/CampusVault",
    },
    {
      name: "Mad Libs Story Generator",
      kind: "C console app",
      summary:
        "A beginner-friendly console program that asks the user for words and generates a funny, personalized story.",
      features: [
        "User-entered words via scanf",
        "Story output with printf",
        "Variables and character arrays",
        "Basic string handling and I/O",
      ],
      stack: ["C"],
      note: "",
      link: "https://github.com/itzmuskan020-hub/mad-libs",
    },
  ],
  activities: [
    {
      title: "Smart India Hackathon (SIH) 2026",
      detail: "Participated as a member of Team  Green Intelligence",
    },
  ],
  education: {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Haridwar University",
  },
};
