import { instagramShots, studio } from "@/data/site";
import { Marquee } from "@/components/Marquee";

export function InstagramStrip() {
  const shots = [...instagramShots, ...instagramShots];
  return (
    <section className="bg-background pb-24 md:pb-32">
      <div className="flex flex-wrap items-end justify-between gap-4 px-4 pb-8 md:px-8">
        <h2 className="text-3xl tracking-tight md:text-5xl">@monolithstudio</h2>
        <a href={studio.instagram} className="label link-underline text-muted-foreground">
          follow on instagram ↗
        </a>
      </div>
      <Marquee duration={50}>
        {shots.map((src, i) => (
          <a
            key={i}
            href={studio.instagram}
            className="group relative mr-3 block h-[36vw] w-[36vw] shrink-0 overflow-hidden bg-secondary md:h-[20vw] md:w-[20vw]"
          >
            <img
              src={src}
              alt="Tattoo work from Monolith Studio's Instagram page"
              loading="lazy"
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            />
          </a>
        ))}
      </Marquee>
    </section>
  );
}
