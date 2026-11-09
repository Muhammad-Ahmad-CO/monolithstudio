import { Link } from "@tanstack/react-router";
import { articles } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Journal() {
  return (
    <section className="bg-background px-4 pb-24 md:px-8 md:pb-32">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2 className="max-w-[30rem] text-4xl leading-[1.04] tracking-tight md:text-[3.4rem]">
              Unlock Expert Insights. Dive into our tattoo knowledge hub
            </h2>
            <Link
              to="/blog"
              className="mt-9 inline-flex items-center gap-3 border border-white/30 px-6 py-3.5 text-sm transition-colors hover:bg-white hover:text-black"
            >
              Explore Articles
              <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>

        <ul className="space-y-14">
          {articles.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 90}>
              <Link to="/blog" className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  {a.image ? (
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <div className="label mt-4 flex items-center justify-between text-foreground/55 uppercase">
                  <span>
                    {a.category} • {a.date}
                  </span>
                  <span>{a.read}</span>
                </div>
                <h3 className="mt-2.5 max-w-[30rem] text-[1.55rem] leading-tight font-medium tracking-tight">
                  {a.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
