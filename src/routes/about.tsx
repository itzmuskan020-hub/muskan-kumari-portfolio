import { createFileRoute } from "@tanstack/react-router";
import { Section, meta } from "@/components/site";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/about")({
  head: () => meta("About — Muskan Kumari", "About Muskan Kumari, a Computer Science student drawn to AI, technology and startups."),
  component: () => (
    <Section eyebrow="About" title="Hello, I'm Muskan.">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5 text-lg text-muted-foreground">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="card-surface">
          <p className="eyebrow">Interests</p>
          <ul className="mt-4 space-y-2 text-foreground">{profile.interests.map((i) => <li key={i}>→ {i}</li>)}</ul>
        </div>
      </div>
    </Section>
  ),
});
