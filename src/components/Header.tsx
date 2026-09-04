import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { studio } from "@/data/site";

const nav = [
  { label: "artists", to: "/artists" },
  { label: "studio", to: "/studio" },
  { label: "book experience", to: "/book-experience", arrow: true },
  { label: "blog", to: "/blog" },
];

function useNycTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

function SoundBars({ on }: { on: boolean }) {
  return (
    <span className="flex h-3 items-end gap-[2px]">
      {[0.4, 1, 0.65, 0.85].map((h, i) => (
        <span
          key={i}
          className="w-[2px] bg-current"
          style={{
            height: on ? `${h * 100}%` : "12%",
            transition: `height .45s cubic-bezier(.22,1,.36,1) ${i * 60}ms`,
          }}
        />
      ))}
    </span>
  );
}

export function Header({ theme = "light" }: { theme?: "light" | "dark" }) {
  const time = useNycTime();
  const [sound, setSound] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 220 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const tone = theme === "light" ? "text-paper-foreground" : "text-foreground";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 mix-blend-difference transition-transform duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 text-foreground md:px-8">
          <div className="flex items-center gap-6">
            <Link to="/" className="label text-[0.8rem] tracking-[0.02em] normal-case">
              monolith studio
            </Link>
            <span className="hidden items-center gap-2 label text-muted-foreground md:flex">
              <span className="pulse-dot inline-block h-[5px] w-[5px] rounded-full bg-current" />
              {time} nyc
            </span>
          </div>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="label link-underline">
                {n.label}
                {n.arrow ? " ↗" : ""}
              </Link>
            ))}
            <span className="label text-muted-foreground">available design</span>
            <span className="label text-muted-foreground">lab (soon)</span>
            <button
              type="button"
              onClick={() => setSound((s) => !s)}
              aria-pressed={sound}
              className="flex items-center gap-2 label"
            >
              <SoundBars on={sound} />
              sound {sound ? "on" : "off"}
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="label lg:hidden"
            aria-label="Open menu"
          >
            menu
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-ink text-foreground transition-[clip-path] duration-700 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)" }}
      >
        <div className="flex h-full flex-col justify-between p-6">
          <div className="flex items-center justify-between">
            <span className="label normal-case tracking-[0.02em]">monolith studio</span>
            <button type="button" className="label" onClick={() => setOpen(false)}>
              close
            </button>
          </div>
          <nav className="flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="display-xl text-[13vw]"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-4">
            <div className="flex gap-4 label">
              <a href={studio.instagram}>instagram</a>
              <a href={studio.youtube}>youtube</a>
              <a href={studio.tiktok}>tiktok</a>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">{studio.address}</p>
            <a href={`mailto:${studio.email}`} className="label link-underline">
              reach out ↗
            </a>
          </div>
        </div>
      </div>
      <span className={`hidden ${tone}`} />
    </>
  );
}
