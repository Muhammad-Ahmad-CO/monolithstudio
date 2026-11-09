import { Link } from "@tanstack/react-router";
import { news } from "@/data/site";
import { Reveal } from "@/components/Reveal";

function Publication({ name }: { name: string }) {
  if (name === "The New York Times") {
    return <span className="font-blackletter text-[1.75rem] leading-none whitespace-nowrap">{name}</span>;
  }
  return (
    <span className="font-serif text-[1.35rem] font-bold tracking-[0.42em] whitespace-nowrap uppercase">
      {name}
    </span>
  );
}

export function LatestNews() {
  return (
    <section className="bg-paper px-4 py-24 text-paper-foreground md:px-8 md:py-28">
      <Reveal>
        <h2 className="text-5xl font-medium tracking-tight md:text-6xl">Latest news</h2>
      </Reveal>

      <ul className="mt-12 border-t border-paper-foreground/15">
        {news.map((n, i) => (
          <Reveal as="li" key={n.title} delay={i * 80} className="border-b border-paper-foreground/15">
            <a
              href="#"
              className="group grid items-center gap-4 py-7 md:grid-cols-[1fr_auto_8.5rem_2rem] md:gap-8"
            >
              <p className="max-w-[38rem] text-lg leading-snug font-medium tracking-tight md:text-[1.3rem]">
                {n.title}
              </p>
              <Publication name={n.publication} />
              <span className="label text-stone md:text-right">{n.short}</span>
              <span
                aria-hidden="true"
                className="hidden text-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 md:block"
              >
                ↗
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
    <section className="overflow-hidden border-t border-paper-foreground/10 bg-paper text-paper-foreground">
      <Link to="/book-experience" className="group block px-4 py-12 md:px-8 md:py-16">
        <div className="flex items-center gap-[2.5vw] md:gap-[3.5vw]">
          <h2 className="font-condensed text-[9.5vw] leading-[0.9] uppercase md:text-[11vw]">Book</h2>
          <h2 className="font-condensed text-[9.5vw] leading-[0.9] uppercase md:text-[11vw]">Experience</h2>
          <span className="ml-auto flex h-[7vw] max-h-32 min-h-[52px] w-[7vw] max-w-32 min-w-[52px] shrink-0 md:min-h-16 md:min-w-16 items-center justify-center bg-ink text-[2.6vw] text-foreground transition-transform duration-500 group-hover:scale-105">
            ↗
          </span>
        </div>
      </Link>
    </section>
  );
}
