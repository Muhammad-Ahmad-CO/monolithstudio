import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { StatueHero } from "@/components/StatueHero";
import { ArtistsSection } from "@/components/ArtistsSection";
import { Journal } from "@/components/Journal";
import { Testimonials } from "@/components/Testimonials";
import { InstagramStrip } from "@/components/InstagramStrip";
import { LatestNews, BookCta } from "@/components/NewsAndCta";
import { Footer } from "@/components/Footer";
import { studio, artists } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Monolith Studio",
  description:
    "Contemporary tattoo studio in Brooklyn, NYC founded by Okan Uckun and Oscar Akermo.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "77 Washington Avenue",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11205",
    addressCountry: "US",
  },
  openingHours: "Mo-Su 12:00-20:00",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "108" },
  founder: [
    { "@type": "Person", name: "Okan Uckun" },
    { "@type": "Person", name: "Oscar Akermo" },
  ],
  employee: artists.map((a) => ({ "@type": "Person", name: a.name })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monolith Studio — Contemporary Tattoo Studio in Brooklyn, NYC" },
      {
        name: "description",
        content:
          "Monolith Studio is a contemporary tattoo studio in Brooklyn, New York — 25 fine line, micro realism, ornamental and blackwork artists. Book your experience.",
      },
      {
        property: "og:title",
        content: "Monolith Studio — Contemporary Tattoo Studio in Brooklyn, NYC",
      },
      {
        property: "og:description",
        content:
          "A hand-picked collective of tattoo artists in Brooklyn. Fine line, micro realism, ornamental, blackwork and single line work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header theme="light" />
      <main>
        <h1 className="sr-only">{studio.tagline}</h1>
        <StatueHero />
        <ArtistsSection />
        <Journal />
        <Testimonials />
        <InstagramStrip />
        <LatestNews />
        <BookCta />
      </main>
      <Footer />
    </>
  );
}
