import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { studio, tattooStyles } from "@/data/site";
import { Marquee } from "@/components/Marquee";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="bg-background">
      <div className="grid gap-10 border-t border-border px-4 py-16 md:grid-cols-2 md:px-8">
        <div className="space-y-6">
          <p className="label text-muted-foreground">the studio</p>
          <p className="max-w-sm text-2xl leading-tight tracking-tight">{studio.address}</p>
          <div className="flex flex-wrap gap-6 label">
            <a href={studio.mapUrl} className="link-underline">
              get directions ↗
            </a>
            <a href={`mailto:${studio.email}`} className="link-underline">
              {studio.email}
            </a>
          </div>
          <p className="label text-muted-foreground">open daily 12:00 — 20:00</p>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          <iframe
            title="Map of Monolith Studio, 77 Washington Avenue, Brooklyn"
            src="https://www.google.com/maps?q=77+Washington+Avenue+Brooklyn+NY+11205&output=embed"
            loading="lazy"
            className="h-full w-full grayscale invert-[0.92]"
          />
        </div>
      </div>

      <div className="border-t border-border px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="label text-muted-foreground">discover</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <Link to="/artists" className="link-underline">
                  Artists
                </Link>
              </li>
              <li>
                <Link to="/studio" className="link-underline">
                  Studio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="link-underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/book-experience" className="link-underline">
                  Book Experience
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="label text-muted-foreground">follow us</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a href={studio.instagram} className="link-underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href={studio.youtube} className="link-underline">
                  YouTube
                </a>
              </li>
              <li>
                <a href={studio.tiktok} className="link-underline">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="label text-muted-foreground">connect</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a href={`mailto:${studio.email}`} className="link-underline">
                  General enquiries
                </a>
              </li>
              <li>
                <a href={`mailto:${studio.career}`} className="link-underline">
                  Careers
                </a>
              </li>
              <li>
                <a href={studio.mapUrl} className="link-underline">
                  Visit us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="label text-muted-foreground">newsletter</p>
            <form
              className="mt-5"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setSent(true);
              }}
            >
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your email"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button type="submit" className="label">
                  {sent ? "thanks" : "subscribe"}
                </button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Studio news, guest spots and open books. No noise.
              </p>
            </form>
          </div>
        </div>
      </div>

      <Marquee duration={55} className="border-y border-border py-4">
        {tattooStyles.map((s) => (
          <span key={s} className="label px-5 text-muted-foreground">
            {s} ·
          </span>
        ))}
      </Marquee>

      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-6 md:px-8">
        <span className="label text-muted-foreground">© {new Date().getFullYear()} monolith studio</span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="label link-underline"
        >
          back to top ↑
        </button>
      </div>
    </footer>
  );
}
