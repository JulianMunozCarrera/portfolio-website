// ============================================================
// EDIT THIS FILE to customize your portfolio
// ============================================================

export const portfolioConfig = {
  // Personal info
  name: "Julian Munoz",
  title: "Full Stack Developer",
  tagline: "Building elegant solutions to complex problems",
  bio: "I'm a passionate full stack developer who loves crafting clean, performant web experiences. I specialize in React, TypeScript, and Node.js — bringing ideas from concept to production.",

  // Contact
  email: "julianmunoz5666@gmail.com",
  github: "julianmunoz",       // GitHub username (github.com/<username>)
  linkedin: "",                 // LinkedIn username (linkedin.com/in/<username>)
  twitter: "",                  // Twitter/X handle (x.com/<handle>)
  resume: "",                   // Link to your resume PDF

  // Skills (edit freely)
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs", "GraphQL"],
    },
    {
      category: "Tools & Cloud",
      items: ["Git", "Docker", "Vercel", "AWS", "GitHub Actions", "Linux"],
    },
  ],

  // Projects (edit or add your own)
  projects: [
    {
      title: "Portfolio Website",
      description: "This portfolio — built with Next.js, Three.js, GSAP, and shadcn/ui. Features an immersive 3D hero with scroll-driven camera animation.",
      tech: ["Next.js", "Three.js", "GSAP", "TypeScript", "Tailwind"],
      github: "https://github.com/julianmunoz/portfolio-website",
      live: "",
      featured: true,
    },
    {
      title: "Project Alpha",
      description: "A full stack SaaS application with real-time features. Includes auth, payments, and a live dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "WebSockets"],
      github: "",
      live: "",
      featured: true,
    },
    {
      title: "Project Beta",
      description: "Open-source CLI tool that automates repetitive development workflows. 500+ GitHub stars.",
      tech: ["TypeScript", "Node.js", "Shell"],
      github: "",
      live: "",
      featured: false,
    },
    {
      title: "Project Gamma",
      description: "Mobile-first e-commerce storefront with blazing-fast performance and advanced filtering.",
      tech: ["Next.js", "Shopify API", "Tailwind", "React Query"],
      github: "",
      live: "",
      featured: false,
    },
  ],
};
