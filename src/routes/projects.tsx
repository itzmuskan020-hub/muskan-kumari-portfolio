import { createFileRoute } from "@tanstack/react-router";
import { ExtLink, Section, meta } from "@/components/site";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/projects")({
  head: () => meta("Projects — Muskan Kumari", "CivicAI, an AI civic issue reporting platform, and Digital Wellness for Students, a student wellbeing concept."),
  component: () => (
    <Section eyebrow="Projects" title="Things I'm building">
      <div className="grid gap-8">
        {profile.projects.map((p) => (
          <article key={p.name} className="card-surface md:p-10">
            <span className="chip">{p.kind}</span>
            <h2 className="font-display text-4xl mt-4 text-foreground">{p.name}</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">{p.summary}</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {p.features.map((f) => <li key={f} className="text-foreground"><span className="text-primary">◆</span> {f}</li>)}
            </ul>
            <div className="mt-8"><ExtLink href={p.link}>See on GitHub ↗</ExtLink></div>
          </article>
        ))}
      </div>
    </Section>
  ),
});
