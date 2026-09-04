import { useEffect, useRef } from "react";
import { statueFrames } from "@/lib/media";

const panels = [
  {
    kind: "title" as const,
    eyebrow: "contemporary tattoo studio — brooklyn, nyc",
    title: "monolith",
    note: "keep scrolling",
  },
  {
    kind: "text" as const,
    label: "about",
    body: "Monolith Studio is a contemporary tattoo studio in Brooklyn, New York, founded by Okan Uckun and Oscar Akermo. We work with a hand-picked collective of artists whose practices sit somewhere between drawing, sculpture and skin.",
  },
  {
    kind: "sidenote" as const,
    label: "sidenote",
    body: "Every piece begins as a conversation. No flash walls, no rushed consults — only considered work made once, for one person.",
  },
  {
    kind: "text" as const,
    label: "our vision",
    body: "We treat the body as architecture: proportion, weight, negative space. Precision is the baseline. Permanence is the point.",
  },
];

export function StatueHero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const endRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images: HTMLImageElement[] = statueFrames.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    let raf = 0;
    let lastIndex = -1;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const size = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      lastIndex = -1;
    };

    const draw = (img: HTMLImageElement) => {
      if (!img.complete || !img.naturalWidth) return;
      const cw = canvas.width;
      const ch = canvas.height;
      ctx.clearRect(0, 0, cw, ch);
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    const loop = () => {
      const rect = wrap.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const raw = total > 0 ? -rect.top / total : 0;
      const p = Math.min(1, Math.max(0, raw));
      progressRef.current += (p - progressRef.current) * 0.16;
      const prog = progressRef.current;

      const idx = Math.min(images.length - 1, Math.round(prog * (images.length - 1)));
      if (idx !== lastIndex) {
        const img = images[idx];
        if (img) {
          if (img.complete) {
            draw(img);
            lastIndex = idx;
          } else {
            img.onload = () => draw(img);
          }
        }
      }

      const count = panels.length;
      panelRefs.current.forEach((el, i) => {
        if (!el) return;
        const start = i / count;
        const span = 1 / count;
        const local = (prog - start) / span;
        const opacity =
          local < -0.35 || local > 1.25
            ? 0
            : local < 0.12
              ? Math.max(0, (local + 0.32) / 0.44)
              : local > 0.78
                ? Math.max(0, (1.25 - local) / 0.47)
                : 1;
        el.style.opacity = String(opacity);
        el.style.transform = `translate3d(0, ${(0.5 - Math.min(1, Math.max(0, local))) * 90}px, 0)`;
        el.style.visibility = opacity < 0.01 ? "hidden" : "visible";
      });

      if (endRef.current) {
        const t = Math.max(0, (prog - 0.82) / 0.18);
        endRef.current.style.opacity = String(Math.min(1, t * 1.4));
        endRef.current.style.transform = `translate3d(0,0,0) scale(${0.94 + t * 0.06})`;
      }

      raf = requestAnimationFrame(loop);
    };

    size();
    window.addEventListener("resize", size);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative bg-paper text-paper-foreground" style={{ height: "620vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden grain">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

        <div className="pointer-events-none absolute inset-0">
          {panels.map((p, i) => (
            <div
              key={i}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="absolute inset-0 flex flex-col justify-between px-4 py-24 md:px-8"
              style={{ opacity: 0 }}
            >
              {p.kind === "title" ? (
                <>
                  <p className="label max-w-[16rem] text-stone">{p.eyebrow}</p>
                  <div>
                    <h1 className="display-xl text-[19vw] leading-[0.8]">{p.title}</h1>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="label text-stone">{p.note} ↓</span>
                      <span className="label text-stone">est. brooklyn</span>
                    </div>
                  </div>
                </>
              ) : p.kind === "sidenote" ? (
                <div className="m-auto w-full max-w-md">
                  <div className="bg-ink p-6 text-foreground shadow-2xl md:p-8">
                    <p className="label text-muted-foreground">{p.label}</p>
                    <p className="mt-5 text-lg leading-snug tracking-tight md:text-xl">{p.body}</p>
                  </div>
                </div>
              ) : (
                <>
                  <p className="label text-stone">{p.label}</p>
                  <p className="ml-auto max-w-2xl text-balance text-2xl leading-[1.15] tracking-tight md:text-4xl">
                    {p.body}
                  </p>
                  <span className="label text-stone">/ {String(i).padStart(2, "0")}</span>
                </>
              )}
            </div>
          ))}

          <div
            ref={endRef}
            className="absolute inset-0 flex items-center justify-center px-4"
            style={{ opacity: 0 }}
          >
            <h2 className="display-xl text-center text-[14vw] leading-[0.82]">
              meet
              <br />
              the artists
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
