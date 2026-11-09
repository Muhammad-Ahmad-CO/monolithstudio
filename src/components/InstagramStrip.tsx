import { articles, instagramShots, studio } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const shapes = [
  "aspect-[3/4]",
  "aspect-square md:mt-12",
  "aspect-[4/5] md:mt-5",
  "aspect-[3/4] md:mt-16",
  "aspect-[4/5] md:-mt-4",
  "aspect-[3/4] md:mt-8",
  "aspect-square md:mt-2",
  "aspect-[4/5] md:mt-12",
];

export function InstagramStrip() {
  const tiles = [...instagramShots, ...articles.map((a) => a.image).filter(Boolean)].slice(0, 8);
  return (
    <section className="bg-background px-4 pb-24 md:px-8 md:pb-32">
      <Reveal>
        <h2 className="text-5xl font-medium tracking-tight md:text-6xl">Instagram Feed</h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
        {tiles.map((src, i) => (
          <Reveal key={i} delay={(i % 4) * 80} className={shapes[i % shapes.length]}>
            <a
              href={studio.instagram}
              className="group block h-full w-full overflow-hidden bg-secondary"
            >
              <img
                src={src as string}
                alt="Tattoo work from Monolith Studio's Instagram page"
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105 ${
                  i === 1 || i === 4 ? "" : "grayscale"
                }`}
              />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
