import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, SocialButtons, meta } from "@/components/site";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/")({
  head: () => meta("Muskan Kumari — CS Student, AI & Startups", "Portfolio of Muskan Kumari, a B.Tech CSE student at Haridwar University interested in AI, technology, entrepreneurship and startups."),
  component: Index,
});

function Index() {
  return (
    <Shell>
      <section className="relative overflow-hidden">
        <div className="hero-glow" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
          <p className="eyebrow">Portfolio · B.Tech CSE · Haridwar University</p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mt-5 text-foreground">
            Muskan <em className="text-gradient">Kumari</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">{profile.tagline}</p>
          <p className="mt-4 max-w-2xl text-muted-foreground">{profile.intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-solid">View projects</Link>
            <a href={profile.resumeUrl} download className="btn-ghost">Download resume</a>
          </div>
          <div className="mt-6"><SocialButtons /></div>
          <div className="mt-16 flex flex-wrap gap-2">
            {profile.interests.map((i) => <span key={i} className="chip">{i}</span>)}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-24 grid md:grid-cols-2 gap-6">
        {profile.projects.map((p) => (
          <Link key={p.name} to="/projects" className="card-surface block">
            <span className="chip">{p.kind}</span>
            <h2 className="font-display text-3xl mt-4 text-foreground">{p.name}</h2>
            <p className="mt-2 text-muted-foreground">{p.summary}</p>
          </Link>
        ))}
      </section>
    </Shell>
  );
}
