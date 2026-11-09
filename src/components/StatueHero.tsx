import { useEffect, useRef } from "react";
import { statueFrames } from "@/lib/media";

const ABOUT =
  "Monolith Studio, founded by internationally renowned pioneers of Fine Line Tattoo, Micro Realism Tattoo, and Minimalist Tattoo, Okan Uçkun and Oscar Akermo, hosts the world's and Brooklyn's best tattoo artists in Brooklyn, NYC.";
const NOTE_ONE =
  "Each of our works is unique, crafted especially for you to meet your artistic vision and technical expectations.";
const VISION =
  "At our Brooklyn tattoo studio, we believe in the power of creativity and self-expression. Our vision is to transform your ideas and unique stories into stunning, one-of-a-kind tattoos in collaboration with the best tattoo artists from NYC and around the world.";
const NOTE_TWO =
  "We see each tattoo as a piece of art, a narrative that unfolds on your skin. Your body is a canvas, and we strive to create masterpieces that reflect your individuality and passions.";

function Sidenote({ body }: { body: string }) {
  return (
    <div className="w-[min(23rem,86vw)] bg-ink text-foreground shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/15 px-5 pt-4 pb-3">
        <span className="text-sm">Sidenote</span>
        <span className="h-2 w-2 rounded-full bg-white" />
      </div>
      <p className="px-5 py-4 text-[15px] leading-snug">{body}</p>
    </div>
  );
}

export function StatueHero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const meetRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);
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
      // Zoom past cover so the bust fills the frame like the reference:
      // a head-and-shoulders crop anchored slightly above centre.
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight) * 1.42;
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const x = (cw - w) / 2;
      const y = (ch - h) * 0.42;
      ctx.drawImage(img, x, y, w, h);
    };

    const fade = (el: HTMLDivElement, prog: number, start: number, end: number, rise = 46) => {
      const local = (prog - start) / (end - start);
      let opacity = 0;
      if (local > 0 && local < 1) {
        opacity = local < 0.16 ? local / 0.16 : local > 0.84 ? (1 - local) / 0.16 : 1;
      }
      const clamped = Math.min(1, Math.max(0, local));
      const ease = 1 - Math.pow(1 - clamped, 3);
      el.style.opacity = String(opacity);
      el.style.transform = `translate3d(0, ${(1 - ease) * rise}px, 0)`;
      el.style.visibility = opacity < 0.01 ? "hidden" : "visible";
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

      const [title, about, note1, vision, note2] = panelRefs.current;
      if (title) {
        const o = Math.max(0, 1 - prog / 0.1);
        title.style.opacity = String(o);
        title.style.transform = `translate3d(0, ${-prog * 500}px, 0)`;
        title.style.visibility = o < 0.01 ? "hidden" : "visible";
      }
      if (about) fade(about, prog, 0.1, 0.34);
      if (note1) fade(note1, prog, 0.3, 0.52, 30);
      if (vision) fade(vision, prog, 0.47, 0.69);
      if (note2) fade(note2, prog, 0.63, 0.84, 30);

      if (meetRef.current) {
        const start = 0.79;
        const local = Math.min(1, Math.max(0, (prog - start) / (1 - start)));
        const o = local <= 0 ? 0 : Math.min(1, local / 0.25);
        meetRef.current.style.opacity = String(o);
        meetRef.current.style.transform = `translate3d(${(0.24 - local * 0.225) * window.innerWidth}px, 0, 0)`;
        meetRef.current.style.visibility = o < 0.01 ? "hidden" : "visible";
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = String(prog > 0.04 && prog < 0.8 ? 1 : 0);
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

  const setPanel = (i: number) => (el: HTMLDivElement | null) => {
    panelRefs.current[i] = el;
  };

  return (
    <div ref={wrapRef} className="relative bg-paper text-paper-foreground" style={{ height: "620vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden grain">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

        <div className="pointer-events-none absolute inset-0">
          {/* wordmark */}
          <div ref={setPanel(0)} className="absolute inset-x-0 top-[6vh]" style={{ opacity: 1 }}>
            <h1 className="text-center font-condensed text-[18vw] leading-[0.95] tracking-[0.005em] uppercase">
              Monolith
            </h1>
          </div>

          {/* keep scrolling hint */}
          <div
            ref={hintRef}
            className="label absolute top-1/2 right-5 text-stone transition-opacity duration-500 md:right-7"
            style={{ opacity: 0 }}
          >
            Keep scrolling
          </div>

          {/* about */}
          <div ref={setPanel(1)} className="absolute inset-0" style={{ opacity: 0 }}>
            <p className="label absolute top-[15%] left-4 text-stone md:left-8">About</p>
            <p className="absolute top-[23%] left-4 max-w-[21rem] text-[1.35rem] leading-[1.3] font-medium tracking-tight md:left-8 md:max-w-[33rem] md:text-[1.7rem]">
              {ABOUT}
            </p>
          </div>

          {/* sidenote one */}
          <div
            ref={setPanel(2)}
            className="absolute right-4 bottom-[12%] md:right-8"
            style={{ opacity: 0 }}
          >
            <Sidenote body={NOTE_ONE} />
          </div>

          {/* our vision */}
          <div ref={setPanel(3)} className="absolute inset-0" style={{ opacity: 0 }}>
            <div className="absolute top-[27%] right-4 max-w-[20rem] md:right-8 md:max-w-[31rem]">
              <p className="label text-stone">Our vision</p>
              <p className="mt-4 text-[1.2rem] leading-[1.32] font-medium tracking-tight md:text-[1.45rem]">
                {VISION}
              </p>
            </div>
          </div>

          {/* sidenote two */}
          <div
            ref={setPanel(4)}
            className="absolute bottom-[12%] left-4 md:left-8"
            style={{ opacity: 0 }}
          >
            <Sidenote body={NOTE_TWO} />
          </div>

          {/* meet the artists */}
          <div
            ref={meetRef}
            className="absolute top-[13%] left-0 font-condensed leading-[0.94] uppercase"
            style={{ opacity: 0 }}
          >
            <div className="text-[13.5vw]">Meet</div>
            <div className="text-[13.5vw]">The</div>
            <div className="text-[13.5vw]">Artists</div>
          </div>
        </div>
      </div>
    </div>
  );
}
