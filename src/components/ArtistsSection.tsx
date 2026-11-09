import { Link } from "@tanstack/react-router";
import { artists, type Artist } from "@/data/site";
import { Reveal } from "@/components/Reveal";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-[15px] w-[15px]"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
              className="h-full w-full object-cover grayscale transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="display-xl text-[5rem] text-muted-foreground">
                {artist.name.slice(0, 2)}
              </span>
            </div>
          )}
          <span className="absolute top-3 left-3 bg-white px-2 py-1 text-[11px] font-medium text-black">
            {artist.role}
          </span>
          <span className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
            <InstagramIcon />
          </span>
        </div>
        <h3 className="mt-3.5 text-[17px] font-medium tracking-tight">{artist.name}</h3>
        <p className="mt-1 text-sm text-foreground/50">{artist.styles.join(", ")}</p>
        <span className="mt-3.5 flex w-full max-w-[230px] items-center justify-between border border-white/25 px-4 py-2.5 text-sm transition-colors group-hover:bg-white group-hover:text-black">
          {artist.short}&rsquo;s bio
          <span aria-hidden="true">↗</span>
        </span>
      </Link>
    </Reveal>
  );
}

export function ArtistsSection() {
  return (
    <section id="artists" className="bg-background px-4 py-20 md:px-8 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-5xl font-medium tracking-tight md:text-6xl">Artists</h2>
        <Link to="/artists" className="label link-underline pb-2">
          View all ↗
        </Link>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4">
        {artists.map((a, i) => (
          <ArtistCard key={a.name} artist={a} index={i} />
        ))}
      </ul>
    </section>
  );
}
