import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { studio, tattooStyles } from "@/data/site";

const discover = [
  { label: "Artists", to: "/artists" },
  { label: "Studio", to: "/studio" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/studio" },
  { label: "Aftercare", to: "/studio" },
  { label: "Preparation", to: "/studio" },
] as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const half = Math.ceil(tattooStyles.length / 2);
  const styleCols = [tattooStyles.slice(0, half), tattooStyles.slice(half)];

  return (
    <footer className="bg-background">
      {/* location */}
      <div className="grid border-t border-border md:grid-cols-[1fr_1.7fr]">
        <div className="px-4 py-12 md:px-8">
          <p className="text-[1.8rem] font-medium tracking-tight italic">Monolith Studio</p>
          <p className="mt-5 text-sm leading-relaxed text-foreground/80">
            77 Washington Avenue, Brooklyn,
            <br />
            NYC, USA, 11205
          </p>
          <a
            href={studio.mapUrl}
            className="mt-7 inline-flex items-center gap-3 border border-white/30 px-5 py-3 text-sm transition-colors hover:bg-white hover:text-black"
          >
            Show on Google Map
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="relative min-h-[300px] overflow-hidden bg-secondary">
          <iframe
            title="Map of Monolith Studio, 77 Washington Avenue, Brooklyn"
            src="https://www.google.com/maps?q=77+Washington+Avenue+Brooklyn+NY+11205&output=embed"
            loading="lazy"
            className="absolute inset-0 h-full w-full grayscale invert-[0.92]"
          />
          <span className="label pointer-events-none absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/55 backdrop-blur">
            MNLTH
          </span>
        </div>
      </div>

      {/* link columns */}
      <div className="grid gap-12 border-t border-border px-4 py-14 md:grid-cols-[1.25fr_0.75fr_1.25fr_0.75fr] md:px-8">
        <div>
          <p className="label text-foreground/60">Subscribe to our emails</p>
          <form
            className="mt-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.includes("@")) setSent(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter e-mail address"
              className="w-full border border-white/25 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:tracking-widest placeholder:text-foreground/40 placeholder:uppercase"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-white py-3.5 text-sm font-bold tracking-[0.18em] text-black uppercase transition-colors hover:bg-white/85"
            >
              {sent ? "Thanks" : "Submit"}
            </button>
          </form>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-8 w-full border border-white/25 py-3.5 text-sm tracking-widest uppercase transition-colors hover:bg-white hover:text-black"
          >
            Back to top
          </button>
        </div>

        <nav>
          <p className="label text-foreground/60">Discover</p>
          <ul className="mt-5 space-y-2.5 text-[13px] tracking-wide uppercase">
            {discover.map((d) => (
              <li key={d.label}>
                <Link to={d.to} className="link-underline">
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="label text-foreground/60">Tattoo styles</p>
          <div className="mt-5 grid grid-cols-2 gap-x-6">
            {styleCols.map((col, ci) => (
              <ul key={ci} className="space-y-2.5 text-[13px] tracking-wide uppercase">
                {col.map((s) => (
                  <li key={s}>
                    <Link to="/artists" className="link-underline">
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div>
          <p className="label text-foreground/60">Follow us</p>
          <ul className="mt-5 space-y-2.5 text-[13px] tracking-wide uppercase">
            <li>
              <a href={studio.instagram} className="link-underline">
                Instagram ↗
              </a>
            </li>
            <li>
              <a href={studio.youtube} className="link-underline">
                YouTube ↗
              </a>
            </li>
            <li>
              <a href={studio.tiktok} className="link-underline">
                TikTok ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* address / connect */}
      <div className="grid gap-10 px-4 pb-14 md:grid-cols-2 md:px-8">
        <div>
          <p className="label text-foreground/60">Monolith Studio</p>
          <p className="mt-4 text-[13px] tracking-wide text-foreground/70 uppercase">
            77 Washington Avenue, Brooklyn, NYC, USA, 11205
          </p>
        </div>
        <div>
          <p className="label text-foreground/60">Connect</p>
          <p className="mt-4 space-y-1.5 text-[13px] tracking-wide uppercase">
            <a href={`mailto:${studio.email}`} className="link-underline block w-fit">
              {studio.email}
            </a>
            <a href={`mailto:${studio.career}`} className="link-underline block w-fit">
              {studio.career}
            </a>
          </p>
        </div>
      </div>

      {/* legal */}
      <div className="label flex flex-wrap items-center justify-between gap-4 border-t border-border px-4 py-6 text-foreground/50 md:px-8">
        <span>© 2026 Monolith Studio — All Rights Reserved</span>
        <span className="space-x-6">
          <a href="#" className="link-underline">
            Privacy Policy
          </a>
          <a href="#" className="link-underline">
            Terms of Use
          </a>
        </span>
        <span>Brooklyn, NYC</span>
      </div>
    </footer>
  );
}
