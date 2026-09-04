import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArtistCard } from "@/components/ArtistsSection";
import { artists } from "@/data/site";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists — Monolith Studio Tattoo Collective, Brooklyn" },
      {
        name: "description",
        content:
          "Meet the 25 residents and resident guests of Monolith Studio in Brooklyn: fine line, micro realism, ornamental, blackwork and single line tattoo artists.",
      },
      { property: "og:title", content: "Artists — Monolith Studio, Brooklyn NYC" },
      {
        property: "og:description",
        content:
          "Residents and guest artists at Monolith Studio, a contemporary tattoo studio in Brooklyn, New York.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArtistsPage,
});

function ArtistsPage() {
  const residents = artists.filter((a) => a.role !== "Resident Guest");
  const guests = artists.filter((a) => a.role === "Resident Guest");

  return (
    <>
      <Header theme="dark" />
      <main className="bg-background px-4 pb-24 pt-32 md:px-8">
        <h1 className="display-xl text-[16vw] leading-[0.8] md:text-[9vw]">the artists</h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          A hand-picked collective working out of 77 Washington Avenue. Each artist keeps their own
          books, their own style and their own waiting list.
        </p>

        <h2 className="rule mt-20 pt-4 label text-muted-foreground">residents</h2>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {residents.map((a, i) => (
            <ArtistCard key={a.name} artist={a} index={i} />
          ))}
        </ul>

        <h2 className="rule mt-24 pt-4 label text-muted-foreground">resident guests</h2>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {guests.map((a, i) => (
            <ArtistCard key={a.name} artist={a} index={i} />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
