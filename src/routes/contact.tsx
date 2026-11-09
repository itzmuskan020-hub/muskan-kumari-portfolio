import { createFileRoute } from "@tanstack/react-router";
import { Section, SocialButtons, meta } from "@/components/site";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact — Muskan Kumari", "Connect with Muskan Kumari on LinkedIn or GitHub."),
  component: () => (
    <Section eyebrow="Contact" title="Let's connect">
      <p className="max-w-xl text-lg text-muted-foreground mb-8">Open to conversations about AI, student projects, startups and collaboration. The best way to reach me is LinkedIn.</p>
      <SocialButtons />
      <div className="card-surface mt-12 max-w-xl">
        <p className="eyebrow">Resume</p>
        <p className="mt-2 text-muted-foreground">One-page PDF resume with links to my LinkedIn and GitHub.</p>
        <a href={profile.resumeUrl} download className="btn-ghost mt-4 inline-flex">Download resume (PDF)</a>
      </div>
    </Section>
  ),
});
