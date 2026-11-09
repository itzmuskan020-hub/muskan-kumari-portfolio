import { createFileRoute } from "@tanstack/react-router";
import { Section, meta } from "@/components/site";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/skills")({
  head: () => meta("Skills — Muskan Kumari", "Skills Muskan Kumari is building: Python, C/C++, web technologies, problem solving and teamwork."),
  component: () => (
    <Section eyebrow="Skills" title="What I work with">
      <p className="text-sm text-muted-foreground mb-8">Editable starter list — skills I'm learning and using; no proficiency levels implied.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(profile.skills).map(([group, items]) => (
          <div key={group} className="card-surface">
            <p className="eyebrow">{group}</p>
            <div className="mt-4 flex flex-wrap gap-2">{items.map((s) => <span key={s} className="chip">{s}</span>)}</div>
          </div>
        ))}
      </div>
    </Section>
  ),
});
