import { Link } from "@tanstack/react-router";
import { articles } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Journal() {
  return (
    <section className="bg-background px-4 pb-24 md:px-8 md:pb-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="label text-muted-foreground">the blog</p>
            <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Unlock expert insights on tattoo craft, aftercare and studio culture.
            </h2>
            <Link to="/blog" className="mt-8 inline-block label link-underline">
              read the blog ↗
            </Link>
          </Reveal>
        </div>

        <ul className="space-y-10">
          {articles.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 90}>
              <Link to="/blog" className="group grid gap-4 sm:grid-cols-[180px_1fr]">
                <div className="aspect-[4/3] overflow-hidden bg-secondary sm:aspect-square">
                  {a.image ? (
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-[900ms] group-hover:scale-105 group-hover:grayscale-0"
                    />
                  ) : null}
                </div>
                <div className="rule flex flex-col justify-between pt-3">
                  <div>
                    <div className="flex gap-4 label text-muted-foreground">
                      <span>{a.category}</span>
                      <span>{a.read}</span>
                    </div>
                    <h3 className="mt-3 text-xl leading-tight tracking-tight md:text-2xl">
                      {a.title}
                    </h3>
                  </div>
                  <span className="mt-4 label text-muted-foreground">{a.date}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
