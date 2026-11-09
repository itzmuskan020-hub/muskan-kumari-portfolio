import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { profile } from "@/content/profile";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;

export function ExtLink({ href, children, variant = "ghost" }: { href: string; children: ReactNode; variant?: "solid" | "ghost" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={variant === "solid" ? "btn-solid" : "btn-ghost"}>
      {children}
    </a>
  );
}

export function SocialButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <ExtLink href={profile.linkedin} variant="solid">LinkedIn ↗</ExtLink>
      <ExtLink href={profile.github}>GitHub ↗</ExtLink>
      {profile.email && <a className="btn-ghost" href={`mailto:${profile.email}`}>Email me</a>}
    </div>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4 flex flex-wrap items-center justify-between gap-3">
          <Link to="/" className="font-display text-2xl text-foreground">Muskan<span className="text-primary">.</span></Link>
          <nav className="flex flex-wrap gap-1 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="nav-link" activeProps={{ className: "nav-link nav-active" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 animate-rise">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-8 flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="flex gap-4">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-display text-5xl md:text-6xl mt-3 mb-10 text-foreground">{title}</h1>
        {children}
      </section>
    </Shell>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
