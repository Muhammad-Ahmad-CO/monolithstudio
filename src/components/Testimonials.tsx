import { useState } from "react";
import { reviews } from "@/data/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i]!;

  return (
    <section className="bg-paper px-4 py-24 text-paper-foreground md:px-8 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="display-xl text-[12vw] leading-[0.85] md:text-[6vw]">
          what collectors say
        </h2>
        <div className="flex items-center gap-4 pb-3">
          <span className="label text-stone">
            {String(i + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-foreground/25 transition-colors hover:bg-paper-foreground hover:text-paper"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => setI((v) => (v + 1) % reviews.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-foreground/25 transition-colors hover:bg-paper-foreground hover:text-paper"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-14 grid gap-8 border-t border-paper-foreground/15 pt-10 md:grid-cols-[1fr_2fr]">
        <div className="space-y-2">
          <p className="label text-stone">google reviews</p>
          <p className="text-5xl tracking-tight">5.0</p>
          <p className="label text-stone">108 reviews</p>
        </div>
        <blockquote key={i} className="reveal is-in">
          <p className="text-lg leading-relaxed tracking-tight md:text-2xl md:leading-[1.35]">
            “{r.body}”
          </p>
          <footer className="mt-6 label text-stone">— {r.author}</footer>
        </blockquote>
      </div>
    </section>
  );
}
