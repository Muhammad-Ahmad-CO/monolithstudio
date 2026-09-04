import { Link } from "@tanstack/react-router";
import { news } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function LatestNews() {
  return (
    <section className="bg-background px-4 pb-24 md:px-8 md:pb-32">
      <div className="rule flex flex-wrap items-end justify-between gap-4 pt-6">
        <h2 className="text-3xl tracking-tight md:text-5xl">latest news</h2>
        <span className="label text-muted-foreground">press & features</span>
      </div>
      <ul className="mt-10 divide-y divide-border">
        {news.map((n, i) => (
          <Reveal as="li" key={n.title} delay={i * 80}>
            <a href="#" className="group grid gap-4 py-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex items-start gap-6">
                {n.image ? (
                  <img
                    src={n.image}
                    alt=""
                    loading="lazy"
                    className="hidden h-24 w-32 shrink-0 object-cover grayscale transition-all duration-700 group-hover:grayscale-0 md:block"
                  />
                ) : null}
                <p className="max-w-3xl text-lg leading-snug tracking-tight md:text-2xl">
                  {n.title}
                </p>
              </div>
              <span className="label text-muted-foreground transition-transform duration-500 group-hover:-translate-y-1">
                {n.date} ↗
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function BookCta() {
  return (
    <section className="bg-paper text-paper-foreground">
      <Link to="/book-experience" className="group block px-4 py-20 md:px-8 md:py-28">
        <div className="flex items-center justify-between gap-4">
          <h2 className="display-xl text-[13vw] leading-[0.82]">
            book
            <br />
            experience
          </h2>
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-paper-foreground/25 text-xl transition-all duration-500 group-hover:bg-paper-foreground group-hover:text-paper md:h-28 md:w-28 md:text-3xl">
            ↗
          </span>
        </div>
        <p className="mt-8 max-w-md text-stone">
          Consultations are free. Tell us the idea and we will match you with the right hand.
        </p>
      </Link>
    </section>
  );
}
