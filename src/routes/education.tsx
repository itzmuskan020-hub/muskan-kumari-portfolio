import { createFileRoute } from "@tanstack/react-router";
import { Section, meta } from "@/components/site";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/education")({
  head: () => meta("Education — Muskan Kumari", "Muskan Kumari is pursuing a B.Tech in Computer Science."),
  component: () => (
    <Section eyebrow="Education" title="Learning">
      <div className="card-surface max-w-2xl">
        <h2 className="font-display text-3xl text-foreground">{profile.education.degree}</h2>
        <p className="mt-2 text-muted-foreground">{profile.education.institution}</p>
        <p className="mt-1 text-sm text-muted-foreground">Expected graduation: {profile.education.graduation}</p>
      </div>
    </Section>
  ),
});
