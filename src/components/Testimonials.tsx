import { reviews } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="bg-paper px-4 py-24 text-paper-foreground md:px-8 md:py-28">
      <Reveal>
        <h2 className="text-5xl font-medium tracking-tight md:text-6xl">Collectors say</h2>
      </Reveal>

      <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal as="figure" key={r.author} delay={i * 110}>
            <blockquote className="text-[15px] leading-[1.55]">{r.body}</blockquote>
            <figcaption className="mt-5">
              <span className="block text-[15px] font-medium">{r.author}</span>
              <span className="mt-0.5 block text-[13px] text-stone">
                5 star review from <span className="underline">Google</span>
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
