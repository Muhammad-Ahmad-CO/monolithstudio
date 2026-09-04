import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { articles, news } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Tattoo Craft & Aftercare | Monolith Studio" },
      {
        name: "description",
        content:
          "Long-form notes on tattoo design, aftercare, chrome tattoos, sleeve composition and studio culture from Monolith Studio in Brooklyn, NYC.",
      },
      { property: "og:title", content: "Monolith Studio Blog — Tattoo Craft & Aftercare" },
      {
        property: "og:description",
        content: "Expert insights on tattoo design and aftercare from our Brooklyn studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <Header theme="dark" />
      <main className="bg-background px-4 pb-24 pt-32 md:px-8">
        <h1 className="display-xl text-[16vw] leading-[0.8] md:text-[9vw]">the blog</h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Unlock expert insights on tattoo craft, healing and the ideas behind the work.
        </p>

        <ul className="mt-20 grid gap-12 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 80}>
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                {a.image ? (
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-[900ms] hover:grayscale-0"
                  />
                ) : null}
              </div>
              <div className="mt-4 flex gap-4 label text-muted-foreground">
                <span>{a.category}</span>
                <span>{a.read}</span>
              </div>
              <h2 className="mt-3 text-2xl leading-tight tracking-tight">{a.title}</h2>
              <p className="mt-3 label text-muted-foreground">{a.date}</p>
            </Reveal>
          ))}
        </ul>

        <h2 className="rule mt-28 pt-4 label text-muted-foreground">press</h2>
        <ul className="mt-8 divide-y divide-border">
          {news.map((n) => (
            <li key={n.title} className="flex flex-wrap items-baseline justify-between gap-4 py-6">
              <p className="max-w-3xl text-lg leading-snug tracking-tight md:text-2xl">{n.title}</p>
              <span className="label text-muted-foreground">{n.short}</span>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
