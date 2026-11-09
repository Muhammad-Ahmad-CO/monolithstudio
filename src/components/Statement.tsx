import { Reveal } from "@/components/Reveal";

export function Statement() {
  return (
    <section className="bg-background px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <p className="max-w-[62rem] text-[1.85rem] leading-[1.22] font-medium tracking-tight md:text-[2.55rem]">
          Your premier destination for contemporary tattoo artistry in Brooklyn, NYC. Founded by
          internationally acclaimed tattoo artist Okan Uckun and Oscar Akermo, Monolith Studio is
          dedicated to transforming your creative ideas into unique and stunning tattoos.
        </p>
      </Reveal>
      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="max-w-[26rem] text-[15px] leading-relaxed text-foreground/75">
            At Monolith Tattoo Studio, We specialize tattoos styles in Fine Line tattoos, Micro
            Realism styles such as Black and Grey, Geometric, Color, Realism, Minimal, Line work,
            Single Line, Botanical, Abstract, Fine Arts and Modern tattoos.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-[26rem] text-[15px] leading-relaxed text-foreground/75">
            Our talented team of artists is committed to providing a personalized and collaborative
            tattoo experience, ensuring each piece is a true reflection of your vision.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
