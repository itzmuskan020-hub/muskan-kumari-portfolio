import { createFileRoute } from "@tanstack/react-router";
import { Section, meta } from "@/components/site";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/experience")({
  head: () => meta("Experience & Activities — Muskan Kumari", "Team FutureStack and KILN '26 participation by Muskan Kumari."),
  component: () => (
    <Section eyebrow="Experience & Activities" title="Teams & events">
      <ol className="border-l border-border ml-2 space-y-8">
        {profile.activities.map((a) => (
          <li key={a.title} className="pl-8 relative">
            <span className="absolute -left-[7px] top-2 size-3 rounded-full bg-primary" />
            <h2 className="font-display text-3xl text-foreground">{a.title}</h2>
            <p className="mt-1 text-muted-foreground">{a.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  ),
});
