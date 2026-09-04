import { Link } from "@tanstack/react-router";
import { artists, type Artist } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function ArtistCard({ artist, index }: { artist: Artist; index: number }) {
  return (
    <Reveal as="li" delay={(index % 4) * 70} className="group">
      <Link to="/artists" className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          {artist.image ? (
            <img
              src={artist.image}
              alt={`${artist.name}, tattoo artist at Monolith Studio`}
              loading="lazy"
              className="h-full w-full scale-[1.02] object-cover grayscale transition-[filter,transform] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 group-hover:grayscale-0"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="display-xl text-[5rem] text-muted-foreground">
                {artist.name.slice(0, 2)}
              </span>
            </div>
          )}
          <span className="absolute left-3 top-3 bg-background/85 px-2 py-1 label backdrop-blur">
            {artist.role}
          </span>
          <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-background/85 text-[11px] backdrop-blur">
            ig
          </span>
          <span className="absolute inset-x-3 bottom-3 translate-y-3 label opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {artist.short}'s bio ↗
          </span>
        </div>
        <div className="mt-3 flex items-baseline justify-between gap-3">
          <h3 className="text-lg tracking-tight">{artist.name}</h3>
          <span className="label text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{artist.styles.join(" / ")}</p>
      </Link>
    </Reveal>
  );
}

export function ArtistsSection() {
  return (
    <section id="artists" className="bg-background px-4 py-24 md:px-8 md:py-32">
      <div className="rule flex flex-wrap items-end justify-between gap-6 pt-6">
        <h2 className="display-xl text-[13vw] md:text-[7vw]">artists</h2>
        <div className="max-w-sm space-y-4 pb-3">
          <p className="text-sm text-muted-foreground">
            {artists.length} residents and resident guests. Each one books independently — pick the
            hand that fits the idea.
          </p>
          <Link to="/artists" className="label link-underline">
            view all artists ↗
          </Link>
        </div>
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
        {artists.map((a, i) => (
          <ArtistCard key={a.name} artist={a} index={i} />
        ))}
      </ul>
    </section>
  );
}
