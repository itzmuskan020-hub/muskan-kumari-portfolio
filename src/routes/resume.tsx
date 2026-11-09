import { createFileRoute } from "@tanstack/react-router";
import { ExtLink, Section, meta } from "@/components/site";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/resume")({
  head: () => meta("Resume — Muskan Kumari", "Resume of Muskan Kumari, B.Tech CSE student at Haridwar University. Download the PDF."),
  component: ResumePage,
});

function ResumePage() {
  return (
    <Section eyebrow="Resume" title="Resume">
      <div className="flex flex-wrap gap-3 mb-10">
        <a href={profile.resumeUrl} download className="btn-solid">Download PDF</a>
        <ExtLink href={profile.resumeUrl}>Open in new tab ↗</ExtLink>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-surface">
          <p className="eyebrow">Education</p>
          <p className="mt-3 text-foreground">{profile.education.degree}</p>
          <p className="text-muted-foreground">{profile.education.institution}</p>
        </div>
        <div className="card-surface">
          <p className="eyebrow">Projects</p>
          <ul className="mt-3 space-y-1 text-foreground">{profile.projects.map((p) => <li key={p.name}>{p.name}</li>)}</ul>
        </div>
        <div className="card-surface">
          <p className="eyebrow">Skills</p>
          <p className="mt-3 text-muted-foreground">{Object.values(profile.skills).flat().join(" · ")}</p>
        </div>
        <div className="card-surface">
          <p className="eyebrow">Activities</p>
          <ul className="mt-3 space-y-1 text-foreground">{profile.activities.map((a) => <li key={a.title}>{a.title} — {a.detail}</li>)}</ul>
        </div>
      </div>
    </Section>
  );
}
