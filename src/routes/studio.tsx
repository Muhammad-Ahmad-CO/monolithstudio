import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { InstagramStrip } from "@/components/InstagramStrip";
import { Reveal } from "@/components/Reveal";
import { studio } from "@/data/site";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "The Studio — Monolith Tattoo Studio in Brooklyn, NYC" },
      {
        name: "description",
        content:
          "Inside Monolith Studio: a contemporary tattoo studio at 77 Washington Avenue, Brooklyn, founded by Okan Uckun and Oscar Akermo. Private rooms, hospital-grade hygiene, open daily.",
      },
      { property: "og:title", content: "The Studio — Monolith Tattoo Studio, Brooklyn" },
      {
        property: "og:description",
        content:
          "A contemporary tattoo studio in Brooklyn built around precision, privacy and considered design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudioPage,
});

const values = [
  {
    n: "01",
    t: "Considered design",
    d: "Every project starts as a drawing, not a template. We design around your anatomy, then commit.",
  },
  {
    n: "02",
    t: "Clinical standards",
    d: "Single-use needles, hospital-grade sterilisation, private rooms and licensed artists — no exceptions.",
  },
  {
    n: "03",
    t: "One session, one client",
    d: "Artists take a single client at a time so the room stays calm and the work stays sharp.",
  },
  {
    n: "04",
    t: "Aftercare for life",
    d: "Healing guidance, touch-ups and long-term care from the artist who made the piece.",
  },
];

function StudioPage() {
  return (
    <>
      <Header theme="dark" />
      <main className="bg-background pt-32">
        <div className="px-4 md:px-8">
          <h1 className="display-xl text-[16vw] leading-[0.8] md:text-[9vw]">the studio</h1>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p className="text-2xl leading-[1.15] tracking-tight md:text-4xl">
              Monolith Studio is a contemporary tattoo studio in Brooklyn, New York, founded by Okan
              Uckun and Oscar Akermo.
            </p>
            <div className="space-y-5 text-muted-foreground">
              <p>
                We opened the doors to build the studio we always wanted to work in: quiet rooms,
                serious craft, and a collective of artists whose practices sit between drawing,
                sculpture and skin.
              </p>
              <p>
                Today the space hosts residents and rotating resident guests from across the world,
                covering fine line, micro realism, ornamental, blackwork, lettering and single line
                work.
              </p>
              <p className="label">{studio.address}</p>
            </div>
          </div>

          <ul className="mt-24 grid gap-px border-t border-border md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal as="li" key={v.n} delay={i * 80} className="border-b border-border py-10">
                <span className="label text-muted-foreground">{v.n}</span>
                <h2 className="mt-4 text-2xl tracking-tight md:text-3xl">{v.t}</h2>
                <p className="mt-3 max-w-md text-muted-foreground">{v.d}</p>
              </Reveal>
            ))}
          </ul>

          <div className="rule mt-24 flex flex-wrap items-end justify-between gap-6 pt-6 pb-24">
            <p className="max-w-md text-muted-foreground">
              Ready to start? Tell us the idea, the placement and the artist you have in mind.
            </p>
            <Link to="/book-experience" className="label link-underline">
              book experience ↗
            </Link>
          </div>
        </div>

        <Testimonials />
        <InstagramStrip />
      </main>
      <Footer />
    </>
  );
}
