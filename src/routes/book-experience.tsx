import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { artists, studio } from "@/data/site";

export const Route = createFileRoute("/book-experience")({
  head: () => ({
    meta: [
      { title: "Book Experience — Monolith Tattoo Studio, Brooklyn NYC" },
      {
        name: "description",
        content:
          "Request a tattoo appointment at Monolith Studio in Brooklyn: choose your artist, describe the idea, placement and size, and our team replies within 48 hours.",
      },
      { property: "og:title", content: "Book Experience — Monolith Studio, Brooklyn" },
      {
        property: "og:description",
        content: "Request an appointment with a Monolith Studio tattoo artist in Brooklyn, NYC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

const steps = [
  { n: "01", t: "Tell us the idea", d: "Reference, placement, size and budget range." },
  { n: "02", t: "Get matched", d: "We route your request to the artist whose hand fits it best." },
  { n: "03", t: "Confirm the date", d: "Deposit secures the chair. Design lands before the session." },
];

function BookPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Header theme="dark" />
      <main className="bg-background pt-32">
        <div className="px-4 md:px-8">
          <h1 className="display-xl text-[15vw] leading-[0.8] md:text-[8vw]">book experience</h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Open daily 12:00 — 20:00 at {studio.address}. Requests are answered within 48 hours.
          </p>

          <ul className="mt-16 grid gap-px border-t border-border md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="border-b border-border py-8 md:pr-8">
                <span className="label text-muted-foreground">{s.n}</span>
                <h2 className="mt-3 text-xl tracking-tight">{s.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ul>

          <form
            className="mt-20 grid max-w-3xl gap-6 pb-24"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="full name" name="name" />
              <Field label="email" name="email" type="email" />
              <Field label="phone (optional)" name="phone" required={false} />
              <label className="block">
                <span className="label text-muted-foreground">preferred artist</span>
                <select
                  name="artist"
                  className="mt-3 w-full border-b border-border bg-transparent pb-2 text-sm outline-none"
                >
                  <option>No preference</option>
                  {artists.map((a) => (
                    <option key={a.name}>{a.name}</option>
                  ))}
                </select>
              </label>
              <Field label="placement" name="placement" />
              <Field label="approx. size" name="size" />
            </div>
            <label className="block">
              <span className="label text-muted-foreground">describe the idea</span>
              <textarea
                name="idea"
                required
                rows={5}
                className="mt-3 w-full resize-none border-b border-border bg-transparent pb-2 text-sm outline-none"
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Must be 18+ with valid ID. Deposits are non-refundable but transferable once.
              </p>
              <button
                type="submit"
                className="border border-foreground px-8 py-4 label transition-colors hover:bg-foreground hover:text-background"
              >
                {sent ? "request sent ✓" : "send request ↗"}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="label text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-b border-border bg-transparent pb-2 text-sm outline-none"
      />
    </label>
  );
}
